"""Verify imported source files against pinned upstream inventories; no dependencies."""
from pathlib import Path
import hashlib
import json
import os
import subprocess

root = Path(__file__).resolve().parents[1]
def git(*args):
    return subprocess.check_output(["git", "-C", str(root), *args])

manifest = json.loads((root / "SOURCE_MANIFEST.json").read_text())
index = {}
for row in git("ls-files", "--stage", "-z").split(b"\0"):
    if row:
        info, path = row.split(b"\t", 1)
        mode, sha, stage = info.decode().split()
        assert mode != "160000", "Submodule found"
        assert stage == "0", "Unmerged index"
        index[path.decode()] = (mode, sha)

total = 0
for source in manifest["sources"]:
    inventory = json.loads((root / source["inventory"]).read_text())["files"]
    assert len(inventory) == source["source_file_count"]
    if source["status"] == "link-only":
        forbidden = root / "sources" / source["repository"].split("/")[1]
        assert not forbidden.exists(), "Restricted source content present"
        print(source["repository"] + ": link-only; 0 imported")
        continue
    prefix = source["destination"] + "/"
    expected = {prefix + item["path"] for item in inventory}
    tracked = {path for path in index if path.startswith(prefix)}
    actual = {str(path.relative_to(root)) for path in (root / source["destination"]).rglob("*") if path.is_file() or path.is_symlink()}
    assert tracked == expected == actual, source["repository"] + ": file set mismatch"
    for item in inventory:
        path = prefix + item["path"]
        file = root / path
        data = os.readlink(file).encode() if file.is_symlink() else file.read_bytes()
        blob = hashlib.sha1(b"blob " + str(len(data)).encode() + b"\0" + data).hexdigest()
        mode = "120000" if file.is_symlink() else "100755" if file.stat().st_mode & 0o111 else "100644"
        assert len(data) == item["bytes"]
        assert hashlib.sha256(data).hexdigest() == item["sha256"], path
        assert blob == item["git_blob_sha"], path
        assert index[path] == (item["mode"], blob), path
        assert mode == item["mode"], path
    assert len(inventory) == source["imported_file_count"]
    total += len(inventory)
    print(source["repository"] + ": " + str(len(inventory)) + " files verified")
print("PASS: " + str(total) + " imported upstream files; no submodules")
