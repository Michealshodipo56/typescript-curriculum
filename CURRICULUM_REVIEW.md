# Curriculum review index

The complete result is in [CURRICULUM.md](CURRICULUM.md): **427 ordered entries in 22 modules**, with prerequisites, source links, placement rationale, contract discrepancies, licensing limits and verification instructions.

[FILE_REVIEW.md](FILE_REVIEW.md) contains the **2,288-path inspection ledger** and detailed reading notes. It explicitly distinguishes authored text reading, differential/identity comparisons, generated dependency/index inspection and visual asset inspection. It does not claim every generated dependency record was read manually.

| Source | Files inspected | Files imported | Ordered entries |
| --- | ---: | ---: | ---: |
| 4Geeks Academy | 1,048 | 0 | 170 external links |
| TypeScript Exercises | 121 | 121 | 15 |
| Type Challenges | 1,088 | 1,088 | 190 |
| TypeScript Training | 31 | 31 | 52 individual subtasks |
| Total | 2,288 | 1,240 | 427 |

Original source trees and licenses are preserved. 4Geeks lacks an established repository-wide redistribution grant and its plugin declares UNLICENSED, so no source content from it was imported. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) and the [pinned source manifest](SOURCE_MANIFEST.json).

The earlier 217-unit sequence grouped each TypeScript Training file into one unit and omitted 4Geeks from the teaching index. This revision splits its numbered subtasks, includes 4Geeks as source links only, and places work using the actual contracts and reading findings. Curriculum ordering remains a teaching judgment, not a mathematically unique easiest-to-hardest ranking.

Verification checks preservation and coverage. It does not solve or execute the learner exercises, certify reference solutions, or certify every upstream application. Run both commands from the repository root:

```sh
python3 scripts/verify_import.py
python3 scripts/verify_curriculum.py
```
