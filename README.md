# TypeScript curriculum source collection

Four upstream TypeScript learning repositories collected for a later file-by-file curriculum review. Exercises have **not** been merged, rewritten, or rearranged. Each imported source retains its original internal paths, source files, tests, solutions, documentation, dotfiles, lockfiles, attribution, and license.

| Source | Location | Tracked files imported | License/status |
| --- | --- | ---: | --- |
| [4Geeks Academy](https://github.com/4GeeksAcademy/master-typescript-programming-exercises) | Link and inventory only | 0 of 1,048 | No repository-wide license; plugin is UNLICENSED |
| [TypeScript Exercises](https://github.com/typescript-exercises/typescript-exercises) | [sources/typescript-exercises](sources/typescript-exercises) | 121 | MIT |
| [Type Challenges](https://github.com/type-challenges/type-challenges) | [sources/type-challenges](sources/type-challenges) | 1,088 | MIT |
| [TypeScript Training](https://github.com/birsi/typescript-training) | [sources/typescript-training](sources/typescript-training) | 31 | MIT |

**Total: 1,240 upstream files imported as ordinary tracked files.** No submodules are used. The default-branch snapshots are pinned by commit in [SOURCE_MANIFEST.json](SOURCE_MANIFEST.json). Inventories in [manifests](manifests) record every source path, Git blob ID, SHA-256 checksum, byte length, and mode, including metadata for the restricted source.

## Source contents

- 4Geeks: 170 auto-graded exercises on functions, collections, and typed objects, English/Spanish instructions, grading scripts, and a local LearnPack plugin. Link-only pending permission.
- TypeScript Exercises: exercise sources in `src/exercises`, compiler/checking utilities, and the accompanying React learning interface in `src` and `public`.
- Type Challenges: type-level questions, templates, test cases, multilingual instructions, guides, utilities, scripts, and site sources.
- TypeScript Training: 12 exercises and reference solutions across three stages, with compiler configuration and tutoring guidance.

## Licenses and attribution

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Imported content retains each source's MIT license and original copyright notices. There is no blanket license overriding upstream rights.

The 4Geeks repository exposes no repository-wide license grant at the pinned snapshot. Its `learnpack-typescript-plugin/package.json` declares `UNLICENSED`; the root package contains no license field. Public availability alone does not establish permission to redistribute or modify. No source content from that repository is copied here; obtain written permission or an applicable license before importing it. Its manifest contains path/checksum metadata and a pinned upstream link only.

## Verification

Run `python3 scripts/verify_import.py` from this directory. It checks exact imported file sets, Git blob hashes, SHA-256 checksums, byte sizes, modes, and absence of gitlinks against the inventories. All upstream tracked files are included for the three MIT sources, including deliberately tracked exercise fixtures beneath `node_modules`.

This collection is for inspection. Each upstream project keeps its own dependency and build setup; there is no unified installation or build command. Nested upstream GitHub Actions definitions are preserved as source files and are not installed as root workflows.
