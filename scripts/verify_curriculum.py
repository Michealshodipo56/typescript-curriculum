"""Verify sequence coverage, prerequisite order, Markdown links and review inventory."""
from pathlib import Path
from collections import Counter
from urllib.parse import unquote, urlsplit
import hashlib
import json
import re

root = Path(__file__).resolve().parents[1]
seq = json.loads((root / 'curriculum/sequence.json').read_text())
manifest = json.loads((root / 'SOURCE_MANIFEST.json').read_text())
units = seq['units']
ids = [u['id'] for u in units]
assert len(ids) == len(set(ids)) == seq['unit_count'] == 427
assert [u['order'] for u in units] == list(range(1, 428))
assert [m['number'] for m in seq['modules']] == list(range(1, 23))
assert [i for m in seq['modules'] for i in m['units']] == ids
for m in seq['modules']:
    assert all(u['module'] == m['number'] for u in units if u['id'] in m['units'])

expected = set()
for f in (root / 'sources/typescript-training/exercises').rglob('*.ts'):
    expected.update('B' + t for t in re.findall(r'^// --- Task (\d+\.\d+)\b', f.read_text(), re.M))
assert len(expected) == 52
edir = root / 'sources/typescript-exercises/src/exercises'
expected.update(f'E{int(p.name):02}' for p in edir.iterdir() if p.is_dir() and p.name.isdigit() and int(p.name) < 16)
qdir = root / 'sources/type-challenges/questions'
expected.update('C' + str(int(p.name.split('-')[0])) for p in qdir.iterdir() if p.is_dir())
gsource = next(s for s in manifest['sources'] if s['status'] == 'link-only')
ginventory = json.loads((root / gsource['inventory']).read_text())['files']
gdirs = {r['path'].split('/')[1] for r in ginventory if re.match(r'exercises/\d{3}-', r['path'])}
expected.update('G' + str(int(d.split('-')[0])) for d in gdirs)
assert set(ids) == expected, (expected - set(ids), set(ids) - expected)
assert Counter(i[0] for i in ids) == {'B': 52, 'C': 190, 'E': 15, 'G': 170}
position = {i: n for n, i in enumerate(ids)}
for edge in seq['key_dependencies']:
    assert position[edge['before']] < position[edge['after']], edge
for u in units:
    assert all(position[p] < position[u['id']] for p in u['prerequisites'])
    if u['id'].startswith('G'):
        assert all(u[k] is None for k in ('instruction_path', 'editable_path', 'test_path'))
        assert u['instruction_url'].startswith(gsource['snapshot_url'] + '/exercises/')
    else:
        for key in ('instruction_path', 'editable_path', 'test_path'):
            assert (root / u[key]).is_file(), (u['id'], key)

# Every Markdown row's pinned identity must match the source inventory exactly.
expected_rows = {}
for source in manifest['sources']:
    inv = json.loads((root / source['inventory']).read_text())['files']
    prefix = source['destination'] + '/' if source['destination'] else source['snapshot_url'] + '/'
    for record in inv:
        expected_rows[prefix + record['path']] = (record['bytes'], record['sha256'])
        if source['destination']:
            assert hashlib.sha256((root / prefix / record['path']).read_bytes()).hexdigest() == record['sha256']
ledger = (root / 'FILE_REVIEW.md').read_text()
rows = re.findall(r'^\| \[[^\n]+?\]\(([^\n]+?)\) \| (\d+) \| `([0-9a-f]{64})` \| ([TNIDLVXS]) \| [^\n]+ \|$', ledger, re.M)
assert len(rows) == 2288, len(rows)
actual_rows = {unquote(url): (int(size), sha) for url, size, sha, method in rows}
assert len(actual_rows) == len(rows)
assert actual_rows == expected_rows, 'File ledger differs from pinned source inventories'

# Inspect local links in authored reports, excluding code spans/blocks in detailed notes.
for name in ('README.md', 'CURRICULUM.md', 'CURRICULUM_REVIEW.md', 'FILE_REVIEW.md'):
    content = (root / name).read_text()
    for target in re.findall(r'\]\(([^\s)]+)\)', content):
        parts = urlsplit(target)
        if parts.scheme or target.startswith('#'):
            continue
        file = root / unquote(parts.path)
        assert file.exists(), (name, target)
        if re.fullmatch(r'L\d+', parts.fragment):
            assert int(parts.fragment[1:]) <= len(file.read_text().splitlines()), (name, target)
# The human-readable ordered table must agree with the machine-readable sequence.
ordered = re.findall(r'^\| (\d{3}) \| \[([BCEG][\d.]+) — ', (root / 'CURRICULUM.md').read_text(), re.M)
assert [(int(n), i) for n, i in ordered] == [(u['order'], u['id']) for u in units]
print('PASS: 427 unique tasks, 22 modules, all source tasks/subtasks represented')
print('PASS: prerequisite order, local source paths and Markdown links')
print('PASS: 2,288 per-file review rows match pinned inventories; 1,240 imported hashes unchanged')
