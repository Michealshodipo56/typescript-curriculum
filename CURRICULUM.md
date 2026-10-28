# TypeScript curriculum: ordered sequence and review

Reviewed 28 October 2026. This report supersedes the earlier 217-unit arrangement. It contains **427 ordered entries in 22 modules**: **257 local tasks** and **170 external link-only exercises**. The 52 TypeScript Training subtasks are now separate entries, allowing their harder concepts to move later.

The order is a teaching judgment based on the exercise instructions, starters, tests and available references. It progresses from concrete value operations to generic contracts, recursive type programming and compiler-scale constraints. Runtime and type-level difficulty are not a single measurable quantity; module entry requirements state the conceptual bridges. It is not a proof that every adjacent exercise takes longer than the preceding one.

Original source files remain at their original internal paths. The curriculum integrates them through this ordered index; no exercises were silently rewritten, moved or corrected. Similar tasks are retained for practice, with distinct contracts identified.

## Contents

- [Source snapshots and redistribution](#source-snapshots-and-redistribution)
- [How to use the curriculum](#how-to-use-the-curriculum)
- [Module overview](#module-overview)
- [Ordered learning sequence](#ordered-learning-sequence)
- [Review findings and execution limits](#review-findings-and-execution-limits)
- [Coverage, verification and complete file ledger](#coverage-verification-and-complete-file-ledger)

## Source snapshots and redistribution

| Source | Pinned commit | Files inspected | Files imported | Ordered entries | License |
| --- | --- | ---: | ---: | ---: | --- |
| [4GeeksAcademy/master-typescript-programming-exercises](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f) | `d3999bbabc804e253a6d190530cb198743d3b69f` | 1,048 | 0 | 170 | No repository-wide license found; nested plugin declares UNLICENSED |
| [typescript-exercises/typescript-exercises](https://github.com/typescript-exercises/typescript-exercises/tree/95b2e81f6e4bd3d1b81072ceb311bcb4b8415e91) | `95b2e81f6e4bd3d1b81072ceb311bcb4b8415e91` | 121 | 121 | 15 | MIT |
| [type-challenges/type-challenges](https://github.com/type-challenges/type-challenges/tree/91220864b0cbb84106c3b97e8d116316db2856e7) | `91220864b0cbb84106c3b97e8d116316db2856e7` | 1,088 | 1,088 | 190 | MIT |
| [birsi/typescript-training](https://github.com/birsi/typescript-training/tree/1ae7b80a56a87a96a4677943f65c5933ce51d62e) | `1ae7b80a56a87a96a4677943f65c5933ce51d62e` | 31 | 31 | 52 | MIT |

**MIT sources:** redistribution and modification are permitted with their copyright and permission notices retained. All three original licenses and attribution remain in their imported trees. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). This does not relicense third-party dependencies or trademarks.

**4Geeks restriction:** no repository-wide license grant was found at the pinned snapshot; the nested plugin declares `UNLICENSED`. Public access does not establish redistribution permission. Its 1,048 files were inspected read-only but none were imported. G entries contain only our index, review comments and pinned source links. Their prompts, implementations, tests and plugin code are not copied here. Written permission or an applicable license is needed before local redistribution. The complete metadata inventory is retained in [the manifest](manifests/master-typescript-programming-exercises.json).

## How to use the curriculum

Follow the numbered rows. B identifiers refer to individual numbered tasks inside a shared TypeScript Training file; E identifiers refer to TypeScript Exercises; C identifiers retain Type Challenges question numbers; G identifiers link to restricted 4Geeks exercises. A row can require several functions or test cases; complete the full linked contract.

A B file contains assertions for all its tasks. When a later task in that same file is assigned to a later module, intermediate compiler errors for its unimplemented tasks are expected. Complete its assigned portion now and return to the file; the file passes only after all its tasks are completed. Do not delete assertions to obtain a pass.

Use each source’s own compiler environment and test harness. Do not compile every upstream starter as one program: unresolved TODOs and deliberate expected-error cases are part of the exercises. The original sources do not constitute a complete JavaScript-from-zero textbook. Before each module, learn any named syntax you have not met; Type Challenges’ six guide files are TODO placeholders, not sufficient instructional chapters.

G links can be opened and studied at the source. If you require an entirely local course, skip those external practice rows while retaining the B/E/C foundation modules and read the JavaScript concepts stated in each entry requirement. The repository contains all permitted source files, but cannot provide a locally copied fourth curriculum without permission.

## Module overview

| Module | Focus | Global entries | Count |
| --- | --- | --- | ---: |
| 01 | Primitive values and scalar functions | 001–025 | 25 |
| 02 | Comparisons, conditions and unions | 026–058 | 33 |
| 03 | Arrays, tuple positions and mutation | 059–081 | 23 |
| 04 | Loops, string traversal and reductions | 082–112 | 31 |
| 05 | Interfaces and object operations | 113–146 | 34 |
| 06 | Reusable function contracts and safe input | 147–180 | 34 |
| 07 | Runtime composition and data transformations | 181–199 | 19 |
| 08 | Classes, generics and discriminated results | 200–213 | 14 |
| 09 | Utility types, asynchronous APIs and declarations | 214–229 | 16 |
| 10 | Type operators and basic tuple transformations | 230–252 | 23 |
| 11 | Equality, distribution and special types | 253–260 | 8 |
| 12 | Object type transformations and fluent state | 261–289 | 29 |
| 13 | Recursive tuples, collections and matrices | 290–316 | 27 |
| 14 | Template literals and string transformations | 317–342 | 26 |
| 15 | Function transformations and higher-order APIs | 343–351 | 9 |
| 16 | Deep objects, paths and schemas | 352–363 | 12 |
| 17 | String algorithms and structured parsers | 364–377 | 14 |
| 18 | Numeric predicates and bounded arithmetic | 378–399 | 22 |
| 19 | Union algebra and combinatorial generation | 400–412 | 13 |
| 20 | Contextual this and constrained APIs | 413–419 | 7 |
| 21 | Recursive algorithm applications | 420–423 | 4 |
| 22 | Compiler scale and advanced parameter constraints | 424–427 | 4 |

## Ordered learning sequence

### 01 — Primitive values and scalar functions

**Entry requirements and bridge:** Start here. Read the TypeScript syntax for annotations, parameter and return types; use basic JavaScript expressions.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 001 | [B1.1 — String annotation](sources/typescript-training/exercises/stage1/01_basics.ts#L19) | String annotation. Complete the named task and retain its assertions. |
| 002 | [B1.2 — Number annotations and computed age](sources/typescript-training/exercises/stage1/01_basics.ts#L26) | Number annotations and computed age. Complete the named task and retain its assertions. **Review:** Annotate birthYear as number: an inferred numeric literal fails the exact type assertion. |
| 003 | [B1.3 — String array](sources/typescript-training/exercises/stage1/01_basics.ts#L33) | String array. Complete the named task and retain its assertions. **Review:** The static assertions do not verify the requested minimum array length. |
| 004 | [B1.4 — Inline object shape](sources/typescript-training/exercises/stage1/01_basics.ts#L40) | Inline object shape. Complete the named task and retain its assertions. |
| 005 | [B1.5 — Typed greeting function](sources/typescript-training/exercises/stage1/01_basics.ts#L50) | Typed greeting function. Complete the named task and retain its assertions. |
| 006 | [G6 — getFullName](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/006-getFullName) | External practice; read the original instructions and tests at the pinned source. |
| 007 | [G7 — getLengthOfWord](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/007-getLengthOfWord) | External practice; read the original instructions and tests at the pinned source. |
| 008 | [G8 — getLengthOfTwoWords](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/008-getLengthOfTwoWords) | External practice; read the original instructions and tests at the pinned source. |
| 009 | [G9 — getLengthOfThreeWords](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/009-getLengthOfThreeWords) | External practice; read the original instructions and tests at the pinned source. |
| 010 | [G25 — average](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/025-average) | External practice; read the original instructions and tests at the pinned source. |
| 011 | [G28 — square](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/028-square) | External practice; read the original instructions and tests at the pinned source. |
| 012 | [G27 — cube](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/027-cube) | External practice; read the original instructions and tests at the pinned source. |
| 013 | [G26 — computeAreaOfATriangle](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/026-computeAreaOfATriangle) | External practice; read the original instructions and tests at the pinned source. |
| 014 | [G29 — computeAreaOfARectangle](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/029-computeAreaOfARectangle) | External practice; read the original instructions and tests at the pinned source. |
| 015 | [G30 — computePerimeterOfARectangle](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/030-computePerimeterOfARectangle) | External practice; read the original instructions and tests at the pinned source. |
| 016 | [G31 — computePerimeterOfATriangle](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/031-computePerimeterOfATriangle) | External practice; read the original instructions and tests at the pinned source. |
| 017 | [G33 — computePerimeterOfACircle](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/033-computePerimeterOfACircle) | External practice; read the original instructions and tests at the pinned source. |
| 018 | [G34 — computeAreaOfACircle](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/034-computeAreaOfACircle) | External practice; read the original instructions and tests at the pinned source. |
| 019 | [G35 — computePower](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/035-computePower) | External practice; read the original instructions and tests at the pinned source. |
| 020 | [G36 — computeSquareRoot](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/036-computeSquareRoot) | External practice; read the original instructions and tests at the pinned source. |
| 021 | [G37 — doubleSquareRootOf](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/037-doubleSquareRootOf) | External practice; read the original instructions and tests at the pinned source. |
| 022 | [G32 — computeTripledAreaOfARectangle](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/032-computeTripledAreaOfARectangle) | External practice; read the original instructions and tests at the pinned source. |
| 023 | [G23 — computeAverageLengthOfWords](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/023-computeAverageLengthOfWords) | External practice; read the original instructions and tests at the pinned source. |
| 024 | [G93 — calculateBillTotal](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/093-calculateBillTotal) | External practice; read the original instructions and tests at the pinned source. |
| 025 | [G101 — computeCompoundInterest](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/101-computeCompoundInterest) | External practice; read the original instructions and tests at the pinned source. |

### 02 — Comparisons, conditions and unions

**Entry requirements and bridge:** Use scalar functions from module 01. Learn boolean operators, remainder, if/else, literal unions and switch narrowing.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 026 | [G1 — isOldEnoughToDrink](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/001-isOldEnoughToDrink) | External practice; read the original instructions and tests at the pinned source. |
| 027 | [G2 — isOldEnoughToDrive](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/002-isOldEnoughToDrive) | External practice; read the original instructions and tests at the pinned source. |
| 028 | [G3 — isOldEnoughToVote](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/003-isOldEnoughToVote) | External practice; read the original instructions and tests at the pinned source. |
| 029 | [G11 — isGreaterThanTen](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/011-isGreaterThanTen) | External practice; read the original instructions and tests at the pinned source. |
| 030 | [G12 — isLessThanThirty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/012-isLessThanThirty) | External practice; read the original instructions and tests at the pinned source. **Review:** The exported function spelling differs from the folder name (30 versus Thirty). |
| 031 | [G13 — equalsTen](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/013-equalsTen) | External practice; read the original instructions and tests at the pinned source. |
| 032 | [G14 — isLessThan](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/014-isLessThan) | External practice; read the original instructions and tests at the pinned source. **Review:** Compare the second argument with the first, as the tested contract requires. |
| 033 | [G15 — isGreaterThan](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/015-isGreaterThan) | External practice; read the original instructions and tests at the pinned source. **Review:** Compare the second argument with the first, as the tested contract requires. |
| 034 | [G16 — isEqualTo](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/016-isEqualTo) | External practice; read the original instructions and tests at the pinned source. |
| 035 | [G10 — isSameLength](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/010-isSameLength) | External practice; read the original instructions and tests at the pinned source. |
| 036 | [G17 — isEven](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/017-isEven) | External practice; read the original instructions and tests at the pinned source. |
| 037 | [G18 — isOdd](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/018-isOdd) | External practice; read the original instructions and tests at the pinned source. **Review:** The reference remainder check fails for negative odd inputs; supplied fixtures are positive. |
| 038 | [G21 — isOddLength](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/021-isOddLength) | External practice; read the original instructions and tests at the pinned source. |
| 039 | [G22 — isEvenLength](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/022-isEvenLength) | External practice; read the original instructions and tests at the pinned source. |
| 040 | [G4 — isOldEnoughToDrinkAndDrive](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/004-isOldEnoughToDrinkAndDrive) | External practice; read the original instructions and tests at the pinned source. |
| 041 | [G19 — areBothOdd](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/019-areBothOdd) | External practice; read the original instructions and tests at the pinned source. **Review:** The reference odd check has the same negative-input weakness as G18. |
| 042 | [G20 — isEitherEven](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/020-isEitherEven) | External practice; read the original instructions and tests at the pinned source. |
| 043 | [G24 — isEvenAndGreaterThanTen](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/024-isEvenAndGreaterThanTen) | External practice; read the original instructions and tests at the pinned source. |
| 044 | [G38 — isEitherEvenOrAreBoth7](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/038-isEitherEvenOrAreBoth7) | External practice; read the original instructions and tests at the pinned source. |
| 045 | [G39 — isEitherEvenAndLessThan9](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/039-isEitherEvenAndLessThan9) | External practice; read the original instructions and tests at the pinned source. |
| 046 | [G58 — or](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/058-or) | External practice; read the original instructions and tests at the pinned source. **Review:** Boolean operator restriction belongs with boolean logic, despite its upstream position among arrays. |
| 047 | [G61 — areValidCredentials](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/061-areValidCredentials) | External practice; read the original instructions and tests at the pinned source. |
| 048 | [G63 — findMinLengthOfThreeWords](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/063-findMinLengthOfThreeWords) | External practice; read the original instructions and tests at the pinned source. |
| 049 | [G64 — findMaxLengthOfThreeWords](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/064-findMaxLengthOfThreeWords) | External practice; read the original instructions and tests at the pinned source. |
| 050 | [G66 — getLongestOfThreeWords](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/066-getLongestOfThreeWords) | External practice; read the original instructions and tests at the pinned source. |
| 051 | [G67 — findShortestOfThreeWords](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/067-findShortestOfThreeWords) | External practice; read the original instructions and tests at the pinned source. **Review:** Fixtures call with four arguments while the starter advertises three. |
| 052 | [G5 — checkAge](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/005-checkAge) | External practice; read the original instructions and tests at the pinned source. **Review:** Starter return annotation conflicts with string-returning prompt/tests; resolve the contract before solving. |
| 053 | [B3.1 — Number or string union](sources/typescript-training/exercises/stage1/03_unions_narrowing.ts#L18) | Number or string union. Complete the named task and retain its assertions. |
| 054 | [B3.2 — Literal status union](sources/typescript-training/exercises/stage1/03_unions_narrowing.ts#L25) | Literal status union. Complete the named task and retain its assertions. |
| 055 | [B3.3 — typeof narrowing](sources/typescript-training/exercises/stage1/03_unions_narrowing.ts#L35) | typeof narrowing. Complete the named task and retain its assertions. |
| 056 | [B3.4 — Exhaustive direction switch](sources/typescript-training/exercises/stage1/03_unions_narrowing.ts#L48) | Exhaustive direction switch. Complete the named task and retain its assertions. |
| 057 | [G97 — convertScoreToGrade](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/097-convertScoreToGrade) | External practice; read the original instructions and tests at the pinned source. **Review:** Closed integer bands leave fractional gaps in the reference; valid input assumptions need to be explicit. |
| 058 | [G98 — convertScoreToGradeWithPlus](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/098-convertScoreToGradeWithPlus) | External practice; read the original instructions and tests at the pinned source. **Review:** Adds nested plus/minus branches; reference fractional-score gaps remain. |

### 03 — Arrays, tuple positions and mutation

**Entry requirements and bridge:** Use typed arrays and scalar expressions. Learn indexing, slice, spread, push/pop/shift/unshift, and the distinction between mutation and copying.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 059 | [G44 — getFirstElement](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/044-getFirstElement) | External practice; read the original instructions and tests at the pinned source. |
| 060 | [G45 — getLastElement](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/045-getLastElement) | External practice; read the original instructions and tests at the pinned source. |
| 061 | [G43 — getNthElement](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/043-getNthElement) | External practice; read the original instructions and tests at the pinned source. |
| 062 | [G48 — joinArrays](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/048-joinArrays) | External practice; read the original instructions and tests at the pinned source. |
| 063 | [G68 — joinThreeArrays](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/068-joinThreeArrays) | External practice; read the original instructions and tests at the pinned source. |
| 064 | [G49 — getElementsAfter](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/049-getElementsAfter) | External practice; read the original instructions and tests at the pinned source. **Review:** Starter numeric-array annotation conflicts with string-oriented fixtures. |
| 065 | [G50 — getElementsUpTo](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/050-getElementsUpTo) | External practice; read the original instructions and tests at the pinned source. **Review:** Starter numeric-array annotation conflicts with string-oriented fixtures. |
| 066 | [G46 — addToFront](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/046-addToFront) | External practice; read the original instructions and tests at the pinned source. |
| 067 | [G47 — addToBack](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/047-addToBack) | External practice; read the original instructions and tests at the pinned source. |
| 068 | [G51 — removeFromFront](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/051-removeFromFront) | External practice; read the original instructions and tests at the pinned source. |
| 069 | [G52 — removeFromBack](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/052-removeFromBack) | External practice; read the original instructions and tests at the pinned source. |
| 070 | [G53 — removeFromFrontOfNew](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/053-removeFromFrontOfNew) | External practice; read the original instructions and tests at the pinned source. |
| 071 | [G54 — removeFromBackOfNew](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/054-removeFromBackOfNew) | External practice; read the original instructions and tests at the pinned source. |
| 072 | [G69 — addToFrontOfNew](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/069-addToFrontOfNew) | External practice; read the original instructions and tests at the pinned source. |
| 073 | [G70 — addToBackOfNew](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/070-addToBackOfNew) | External practice; read the original instructions and tests at the pinned source. |
| 074 | [G71 — getAllElementsButNth](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/071-getAllElementsButNth) | External practice; read the original instructions and tests at the pinned source. |
| 075 | [G73 — removeElement](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/073-removeElement) | External practice; read the original instructions and tests at the pinned source. |
| 076 | [G56 — getAllLetters](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/056-getAllLetters) | External practice; read the original instructions and tests at the pinned source. |
| 077 | [G57 — getAllWords](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/057-getAllWords) | External practice; read the original instructions and tests at the pinned source. |
| 078 | [B4.1 — Coordinate tuple](sources/typescript-training/exercises/stage1/04_tuples_enums_const.ts#L20) | Coordinate tuple. Complete the named task and retain its assertions. |
| 079 | [B4.2 — Distance using tuple coordinates](sources/typescript-training/exercises/stage1/04_tuples_enums_const.ts#L30) | Distance using tuple coordinates. Complete the named task and retain its assertions. |
| 080 | [B4.3 — Readonly price arrays](sources/typescript-training/exercises/stage1/04_tuples_enums_const.ts#L38) | Readonly price arrays. Complete the named task and retain its assertions. |
| 081 | [B4.5 — Numeric enum](sources/typescript-training/exercises/stage1/04_tuples_enums_const.ts#L63) | Numeric enum. Complete the named task and retain its assertions. |

### 04 — Loops, string traversal and reductions

**Entry requirements and bridge:** Use arrays, conditions and function returns. Learn for/while loops, accumulators, split/join and explicit empty-input policies.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 082 | [G41 — getStringLength](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/041-getStringLength) | External practice; read the original instructions and tests at the pinned source. **Review:** The task forbids .length and inspects compiled JS text; use traversal rather than the earlier length helper. |
| 083 | [G55 — countCharacter](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/055-countCharacter) | External practice; read the original instructions and tests at the pinned source. |
| 084 | [G60 — convertDoubleSpaceToSingle](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/060-convertDoubleSpaceToSingle) | External practice; read the original instructions and tests at the pinned source. **Review:** One replacement pass is not general whitespace normalization. |
| 085 | [G62 — getIndexOf](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/062-getIndexOf) | External practice; read the original instructions and tests at the pinned source. |
| 086 | [G65 — repeatString](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/065-repeatString) | External practice; read the original instructions and tests at the pinned source. |
| 087 | [G96 — computeSummationToN](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/096-computeSummationToN) | External practice; read the original instructions and tests at the pinned source. |
| 088 | [G95 — computeSumBetween](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/095-computeSumBetween) | External practice; read the original instructions and tests at the pinned source. |
| 089 | [G94 — multiplyBetween](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/094-multiplyBetween) | External practice; read the original instructions and tests at the pinned source. **Review:** Equal bounds: prompt requires zero while the reference returns one. |
| 090 | [G99 — computeFactorialOfN](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/099-computeFactorialOfN) | External practice; read the original instructions and tests at the pinned source. |
| 091 | [G100 — sumDigits](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/100-sumDigits) | External practice; read the original instructions and tests at the pinned source. **Review:** Negative-digit handling uses a special first-digit convention rather than ordinary absolute digit sum. |
| 092 | [G102 — modulo](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/102-modulo) | External practice; read the original instructions and tests at the pinned source. **Review:** Reference loop can fail to terminate for a negative divisor; fixtures use positive divisors. |
| 093 | [G103 — multiply](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/103-multiply) | External practice; read the original instructions and tests at the pinned source. |
| 094 | [G104 — isOddWithoutModulo](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/104-isOddWithoutModulo) | External practice; read the original instructions and tests at the pinned source. **Review:** The no-modulo restriction is not enforced by the test suite. |
| 095 | [G105 — isEvenWithoutModulo](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/105-isEvenWithoutModulo) | External practice; read the original instructions and tests at the pinned source. **Review:** The no-modulo restriction is not enforced by the test suite. |
| 096 | [G86 — computeSumOfAllElements](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/086-computeSumOfAllElements) | External practice; read the original instructions and tests at the pinned source. |
| 097 | [G40 — computeAverageOfNumbers](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/040-computeAverageOfNumbers) | External practice; read the original instructions and tests at the pinned source. Prerequisites: G86. **Review:** Moved after summation and array reductions; scalar average alone is not enough. |
| 098 | [G79 — computeProductOfAllElements](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/079-computeProductOfAllElements) | External practice; read the original instructions and tests at the pinned source. |
| 099 | [G92 — averageIntegers](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/092-averageIntegers) | External practice; read the original instructions and tests at the pinned source. **Review:** The requested sum-helper reuse is not enforced by the tests; empty average is underspecified. |
| 100 | [G83 — findSmallestElement](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/083-findSmallestElement) | External practice; read the original instructions and tests at the pinned source. **Review:** Reference sentinel fails when every number exceeds its fixed initial value. |
| 101 | [G85 — getLargestElement](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/085-getLargestElement) | External practice; read the original instructions and tests at the pinned source. |
| 102 | [G76 — getLengthOfLongestElement](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/076-getLengthOfLongestElement) | External practice; read the original instructions and tests at the pinned source. **Review:** Starter number[] annotation conflicts with word fixtures. |
| 103 | [G81 — getLengthOfShortestElement](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/081-getLengthOfShortestElement) | External practice; read the original instructions and tests at the pinned source. **Review:** Starter number[] annotation conflicts with word fixtures. |
| 104 | [G82 — getLongestElement](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/082-getLongestElement) | External practice; read the original instructions and tests at the pinned source. **Review:** Starter number[] annotation conflicts with word fixtures. |
| 105 | [G84 — findShortestElement](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/084-findShortestElement) | External practice; read the original instructions and tests at the pinned source. **Review:** Reference fixed length sentinel fails when every candidate is a long word. |
| 106 | [G77 — squareElements](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/077-squareElements) | External practice; read the original instructions and tests at the pinned source. |
| 107 | [G72 — keep](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/072-keep) | External practice; read the original instructions and tests at the pinned source. |
| 108 | [G74 — filterOddLengthWords](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/074-filterOddLengthWords) | External practice; read the original instructions and tests at the pinned source. |
| 109 | [G75 — filterEvenLengthWords](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/075-filterEvenLengthWords) | External practice; read the original instructions and tests at the pinned source. |
| 110 | [G78 — filterOddElements](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/078-filterOddElements) | External practice; read the original instructions and tests at the pinned source. |
| 111 | [G80 — filterEvenElements](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/080-filterEvenElements) | External practice; read the original instructions and tests at the pinned source. |
| 112 | [G87 — joinArraysOfArrays](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/087-joinArraysOfArrays) | External practice; read the original instructions and tests at the pinned source. **Review:** One-level flattening; the exported function spelling also differs from the folder. |

### 05 — Interfaces and object operations

**Entry requirements and bridge:** Use union narrowing and array methods. Learn optional/readonly fields, interfaces, index signatures and object property access; keep runtime key absence explicit.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 113 | [B5.1 — Optional and readonly interface fields](sources/typescript-training/exercises/stage2/05_interfaces.ts#L18) | Optional and readonly interface fields. Complete the named task and retain its assertions. |
| 114 | [E01 — Type the community user model](sources/typescript-exercises/src/exercises/1/index.ts) | Define User from the supplied data and consistently type the array and logging function. |
| 115 | [G167 — buildUserProfileWithInterface](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/167-buildUserProfileWithInterface) | External practice; read the original instructions and tests at the pinned source. |
| 116 | [B5.2 — Check an optional description](sources/typescript-training/exercises/stage2/05_interfaces.ts#L32) | Check an optional description. Complete the named task and retain its assertions. |
| 117 | [G168 — getDisplayNameFromOptionalProfile](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/168-getDisplayNameFromOptionalProfile) | External practice; read the original instructions and tests at the pinned source. **Review:** Nullish fallback should preserve an empty string; that case is not tested. |
| 118 | [B5.3 — Extend an interface](sources/typescript-training/exercises/stage2/05_interfaces.ts#L42) | Extend an interface. Complete the named task and retain its assertions. |
| 119 | [B5.4 — String dictionary and missing-key return](sources/typescript-training/exercises/stage2/05_interfaces.ts#L57) | String dictionary and missing-key return. Complete the named task and retain its assertions. **Review:** The shared config does not enable noUncheckedIndexedAccess, despite the comment implying it. Keep the explicit string \| undefined return and test missing keys. |
| 120 | [G116 — getProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/116-getProperty) | External practice; read the original instructions and tests at the pinned source. |
| 121 | [G117 — addProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/117-addProperty) | External practice; read the original instructions and tests at the pinned source. **Review:** Tracked JavaScript and TypeScript contain inconsistent initial values. |
| 122 | [G118 — removeProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/118-removeProperty) | External practice; read the original instructions and tests at the pinned source. |
| 123 | [G119 — addFullNameProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/119-addFullNameProperty) | External practice; read the original instructions and tests at the pinned source. **Review:** Mutates its input despite a test description saying new object; a typeof assertion is weak, and tracked JS is stale. |
| 124 | [G120 — addObjectProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/120-addObjectProperty) | External practice; read the original instructions and tests at the pinned source. |
| 125 | [G124 — addArrayProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/124-addArrayProperty) | External practice; read the original instructions and tests at the pinned source. |
| 126 | [G121 — isPersonOldEnoughToDrive](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/121-isPersonOldEnoughToDrive) | External practice; read the original instructions and tests at the pinned source. |
| 127 | [G122 — isPersonOldEnoughToVote](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/122-isPersonOldEnoughToVote) | External practice; read the original instructions and tests at the pinned source. **Review:** Reference exports the driving function name instead of the voting name; stale JS contains unrelated code. |
| 128 | [G123 — isPersonOldEnoughToDrink](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/123-isPersonOldEnoughToDrink) | External practice; read the original instructions and tests at the pinned source. |
| 129 | [G129 — countNumberOfKeys](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/129-countNumberOfKeys) | External practice; read the original instructions and tests at the pinned source. |
| 130 | [G131 — removeArrayValues](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/131-removeArrayValues) | External practice; read the original instructions and tests at the pinned source. |
| 131 | [G132 — removeNumberValues](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/132-removeNumberValues) | External practice; read the original instructions and tests at the pinned source. |
| 132 | [G133 — removeStringValues](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/133-removeStringValues) | External practice; read the original instructions and tests at the pinned source. |
| 133 | [G125 — removeNumbersLargerThan](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/125-removeNumbersLargerThan) | External practice; read the original instructions and tests at the pinned source. |
| 134 | [G126 — removeNumbersLessThan](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/126-removeNumbersLessThan) | External practice; read the original instructions and tests at the pinned source. |
| 135 | [G127 — removeStringValuesLongerThan](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/127-removeStringValuesLongerThan) | External practice; read the original instructions and tests at the pinned source. |
| 136 | [G128 — removeEvenValues](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/128-removeEvenValues) | External practice; read the original instructions and tests at the pinned source. |
| 137 | [G130 — removeOddValues](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/130-removeOddValues) | External practice; read the original instructions and tests at the pinned source. |
| 138 | [G59 — extend](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/059-extend) | External practice; read the original instructions and tests at the pinned source. **Review:** Mutates the first object and preserves its existing values on key collisions. |
| 139 | [G157 — ObjectToArray-A](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/157-ObjectToArray-A) | External practice; read the original instructions and tests at the pinned source. |
| 140 | [G158 — ObjectToArray-B](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/158-ObjectToArray-B) | External practice; read the original instructions and tests at the pinned source. |
| 141 | [G159 — ObjectToArray-C](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/159-ObjectToArray-C) | External practice; read the original instructions and tests at the pinned source. |
| 142 | [G154 — ArrayToObject-A](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/154-ArrayToObject-A) | External practice; read the original instructions and tests at the pinned source. |
| 143 | [G155 — ArrayToObject-B](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/155-ArrayToObject-B) | External practice; read the original instructions and tests at the pinned source. **Review:** Prose claims strings although fixtures include numeric values. |
| 144 | [G160 — GreetCustomers](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/160-GreetCustomers) | External practice; read the original instructions and tests at the pinned source. |
| 145 | [E02 — Unite users and administrators](sources/typescript-exercises/src/exercises/2/index.ts) | Define Person as a union and update consumers to accept both member shapes. |
| 146 | [E03 — Narrow by property presence](sources/typescript-exercises/src/exercises/3/index.ts) | Repair logging so occupation and role are accessed only on the correct union branch. |

### 06 — Reusable function contracts and safe input

**Entry requirements and bridge:** Use objects, unions and branches. Learn function type expressions, callbacks, rest parameters, void/never, unknown and type predicates.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 147 | [B2.1 — Function type expression](sources/typescript-training/exercises/stage1/02_functions.ts#L18) | Function type expression. Complete the named task and retain its assertions. |
| 148 | [B2.2 — Optional and default parameters](sources/typescript-training/exercises/stage1/02_functions.ts#L31) | Optional and default parameters. Complete the named task and retain its assertions. |
| 149 | [B2.3 — Rest parameters](sources/typescript-training/exercises/stage1/02_functions.ts#L45) | Rest parameters. Complete the named task and retain its assertions. |
| 150 | [B2.4 — Callbacks and void](sources/typescript-training/exercises/stage1/02_functions.ts#L53) | Callbacks and void. Complete the named task and retain its assertions. |
| 151 | [G42 — printUserBadgeVoid](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/042-printUserBadgeVoid) | External practice; read the original instructions and tests at the pinned source. **Review:** Tests do not fully verify the requested badge formatting. |
| 152 | [B2.5 — A function that never returns](sources/typescript-training/exercises/stage1/02_functions.ts#L64) | A function that never returns. Complete the named task and retain its assertions. |
| 153 | [B10.1 — unknown JSON boundary](sources/typescript-training/exercises/stage3/10_type_guards.ts#L22) | unknown JSON boundary. Complete the named task and retain its assertions. |
| 154 | [B10.4 — instanceof and Array.isArray narrowing](sources/typescript-training/exercises/stage3/10_type_guards.ts#L64) | instanceof and Array.isArray narrowing. Complete the named task and retain its assertions. |
| 155 | [B10.2 — Custom type predicate](sources/typescript-training/exercises/stage3/10_type_guards.ts#L36) | Custom type predicate. Complete the named task and retain its assertions. |
| 156 | [E04 — Carry narrowing across function calls](sources/typescript-exercises/src/exercises/4/index.ts) | Give isUser and isAdmin explicit predicate contracts and use them in filtering and logging. Prerequisites: B10.2. **Review:** Use an explicit predicate for the historical source compiler rather than relying on modern inferred predicates. |
| 157 | [B10.3 — Assertion function](sources/typescript-training/exercises/stage3/10_type_guards.ts#L51) | Assertion function. Complete the named task and retain its assertions. |
| 158 | [G88 — findShortestWordAmongMixedElements](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/088-findShortestWordAmongMixedElements) | External practice; read the original instructions and tests at the pinned source. |
| 159 | [G89 — findSmallestnumberAmongMixedElements](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/089-findSmallestnumberAmongMixedElements) | External practice; read the original instructions and tests at the pinned source. **Review:** Exported symbol capitalization differs from the folder spelling. |
| 160 | [G90 — getLongestWordOfMixedElements](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/090-getLongestWordOfMixedElements) | External practice; read the original instructions and tests at the pinned source. |
| 161 | [G91 — getLargestNumberAmongMixedElements](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/091-getLargestNumberAmongMixedElements) | External practice; read the original instructions and tests at the pinned source. |
| 162 | [G134 — getFirstElementOfProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/134-getFirstElementOfProperty) | External practice; read the original instructions and tests at the pinned source. **Review:** The numeric-only return annotation is narrower than the generic property-array description. |
| 163 | [G135 — getNthElementOfProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/135-getNthElementOfProperty) | External practice; read the original instructions and tests at the pinned source. |
| 164 | [G136 — getLastElementOfProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/136-getLastElementOfProperty) | External practice; read the original instructions and tests at the pinned source. **Review:** Numeric-only return annotation directly conflicts with string and object fixtures. |
| 165 | [G149 — getElementOfArrayProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/149-getElementOfArrayProperty) | External practice; read the original instructions and tests at the pinned source. **Review:** Duplicates nth-property access with an overly narrow return; reference drops falsy elements and lacks a full array guard. |
| 166 | [G148 — getAllButLastElementOfProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/148-getAllButLastElementOfProperty) | External practice; read the original instructions and tests at the pinned source. |
| 167 | [G137 — getElementsThatEqual10AtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/137-getElementsThatEqual10AtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 168 | [G138 — getElementsLessThanOneHundredAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/138-getElementsLessThanOneHundredAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 169 | [G139 — getElementsGreaterThanTenAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/139-getElementsGreaterThanTenAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 170 | [G140 — getOddLengthWordsAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/140-getOddLengthWordsAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 171 | [G142 — getEvenLengthWordsAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/142-getEvenLengthWordsAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 172 | [G143 — getOddElementsAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/143-getOddElementsAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 173 | [G144 — getEvenElementsAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/144-getEvenElementsAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 174 | [G145 — getSquaredElementsAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/145-getSquaredElementsAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 175 | [G152 — getSumOfAllElementsAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/152-getSumOfAllElementsAtProperty) | External practice; read the original instructions and tests at the pinned source. **Review:** Reference array detection is broken and may throw for null; strings can take the wrong path. |
| 176 | [G141 — getAverageOfElementsAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/141-getAverageOfElementsAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 177 | [G150 — getProductOfAllElementsAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/150-getProductOfAllElementsAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 178 | [G146 — getSmallestElementAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/146-getSmallestElementAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 179 | [G147 — getLargestElementAtProperty](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/147-getLargestElementAtProperty) | External practice; read the original instructions and tests at the pinned source. |
| 180 | [G151 — Select](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/151-Select) | External practice; read the original instructions and tests at the pinned source. **Review:** Reference drops selected falsy property values. |

### 07 — Runtime composition and data transformations

**Entry requirements and bridge:** Combine checked property access with loops and array operations. Learn shallow copy identity, nested records and explicit matrix assumptions.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 181 | [G169 — renameBookMutableVsImmutable](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/169-renameBookMutableVsImmutable) | External practice; read the original instructions and tests at the pinned source. **Review:** Tests verify both identity and mutation behavior; this follows the earlier array copy tasks. |
| 182 | [G170 — comparePassByValueAndReference](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/170-comparePassByValueAndReference) | External practice; read the original instructions and tests at the pinned source. **Review:** Title can obscure JavaScript value passing. Reference is shallow, turns array spread into an object and has a NaN equality edge case; tests cover flat records. |
| 183 | [G153 — countAllCharacters](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/153-countAllCharacters) | External practice; read the original instructions and tests at the pinned source. |
| 184 | [G112 — isogram](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/112-isogram) | External practice; read the original instructions and tests at the pinned source. Prerequisites: G153. |
| 185 | [G156 — ArrayToObject-C](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/156-ArrayToObject-C) | External practice; read the original instructions and tests at the pinned source. **Review:** Tracked JS returns a stale string representation. |
| 186 | [G163 — FashionInventory-A](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/163-FashionInventory-A) | External practice; read the original instructions and tests at the pinned source. |
| 187 | [G165 — FashionInventory-C](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/165-FashionInventory-C) | External practice; read the original instructions and tests at the pinned source. **Review:** Starter unknown[][] annotation conflicts with inventory object-array input; an && assertion skips its second check. |
| 188 | [G164 — FashionInventory-B](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/164-FashionInventory-B) | External practice; read the original instructions and tests at the pinned source. **Review:** One assertion is expressed with && so its second check is skipped. |
| 189 | [G166 — FashionInventory-D](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/166-FashionInventory-D) | External practice; read the original instructions and tests at the pinned source. **Review:** Starter unknown[][] annotation conflicts with inventory records. Reference uses startsWith where prose requires containment and miscounts after previous hits. |
| 190 | [G113 — getMatrixValue](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/113-getMatrixValue) | External practice; read the original instructions and tests at the pinned source. |
| 191 | [G114 — transposeMatrix](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/114-transposeMatrix) | External practice; read the original instructions and tests at the pinned source. Prerequisites: G113. **Review:** Reference assumes a rectangular matrix. |
| 192 | [G106 — flipPairs](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/106-flipPairs) | External practice; read the original instructions and tests at the pinned source. **Review:** Reference regex excludes newline from paired character matching. |
| 193 | [G107 — flipEveryNChars](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/107-flipEveryNChars) | External practice; read the original instructions and tests at the pinned source. **Review:** Requires a positive chunk size; invalid size behavior is not specified. |
| 194 | [G108 — detectOutlierValue](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/108-detectOutlierValue) | External practice; read the original instructions and tests at the pinned source. **Review:** The required outlier position is one-based. |
| 195 | [G109 — findPairForSum](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/109-findPairForSum) | External practice; read the original instructions and tests at the pinned source. **Review:** Reference search can reuse a position because its inner loop starts independently; no-pair behavior is underspecified. |
| 196 | [G110 — isRotated](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/110-isRotated) | External practice; read the original instructions and tests at the pinned source. **Review:** Introductory rotation prose differs from the actual boolean API; reference rejects empty rotations. |
| 197 | [G111 — search](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/111-search) | External practice; read the original instructions and tests at the pinned source. **Review:** Binary search uses null for a miss; G115 uses -1. |
| 198 | [G115 — binarySearchSortedArray](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/115-binarySearchSortedArray) | External practice; read the original instructions and tests at the pinned source. **Review:** A second binary-search contract; preserve the -1 miss convention. |
| 199 | [G162 — longestPalindrome](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/162-longestPalindrome) | External practice; read the original instructions and tests at the pinned source. **Review:** Prompt tie rule chooses the last palindrome; reference chooses the first and excludes one-character candidates. Fixtures include punctuation. |

### 08 — Classes, generics and discriminated results

**Entry requirements and bridge:** Use functions and interfaces. Learn class state/getters, constraints, keyof, indexed access and tagged union exhaustiveness.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 200 | [B6.1 — Private state and getter](sources/typescript-training/exercises/stage2/06_classes.ts#L18) | Private state and getter. Complete the named task and retain its assertions. |
| 201 | [B6.2 — Constructor parameter properties](sources/typescript-training/exercises/stage2/06_classes.ts#L31) | Constructor parameter properties. Complete the named task and retain its assertions. |
| 202 | [B6.3 — Implement an interface](sources/typescript-training/exercises/stage2/06_classes.ts#L47) | Implement an interface. Complete the named task and retain its assertions. |
| 203 | [G161 — phoneNumber](https://github.com/4GeeksAcademy/master-typescript-programming-exercises/tree/d3999bbabc804e253a6d190530cb198743d3b69f/exercises/161-phoneNumber) | External practice; read the original instructions and tests at the pinned source. **Review:** The example omits new although tests require class construction; tracked JS is an older function version. |
| 204 | [B6.4 — Abstract class and inheritance](sources/typescript-training/exercises/stage2/06_classes.ts#L66) | Abstract class and inheritance. Complete the named task and retain its assertions. |
| 205 | [B7.1 — Generic identity](sources/typescript-training/exercises/stage2/07_generics.ts#L20) | Generic identity. Complete the named task and retain its assertions. |
| 206 | [B7.2 — Generic first element](sources/typescript-training/exercises/stage2/07_generics.ts#L30) | Generic first element. Complete the named task and retain its assertions. |
| 207 | [B7.3 — Length constraint](sources/typescript-training/exercises/stage2/07_generics.ts#L40) | Length constraint. Complete the named task and retain its assertions. |
| 208 | [B7.4 — Key-constrained property access](sources/typescript-training/exercises/stage2/07_generics.ts#L52) | Key-constrained property access. Complete the named task and retain its assertions. |
| 209 | [E07 — Swap a generic pair](sources/typescript-exercises/src/exercises/7/index.ts) | Type swap so unrelated inputs return a correctly reversed tuple without losing either type. Prerequisites: B7.1. **Review:** Generic tuple preservation is simpler than E06 overloads, so it comes first. |
| 210 | [B8.1 — Shape discriminated union](sources/typescript-training/exercises/stage2/08_discriminated_unions.ts#L29) | Shape discriminated union. Complete the named task and retain its assertions. |
| 211 | [B8.2 — Exhaustive discriminant switch](sources/typescript-training/exercises/stage2/08_discriminated_unions.ts#L42) | Exhaustive discriminant switch. Complete the named task and retain its assertions. |
| 212 | [B8.3 — assertNever helper](sources/typescript-training/exercises/stage2/08_discriminated_unions.ts#L55) | assertNever helper. Complete the named task and retain its assertions. |
| 213 | [B8.4 — Generic Result type](sources/typescript-training/exercises/stage2/08_discriminated_unions.ts#L77) | Generic Result type. Complete the named task and retain its assertions. |

### 09 — Utility types, asynchronous APIs and declarations

**Entry requirements and bridge:** Use generics, predicates, Result and callbacks. Learn Partial/Pick/Omit/Record, promises, async/await, overloads and ambient declarations.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 214 | [B9.1 — Partial updates](sources/typescript-training/exercises/stage3/09_utility_types.ts#L39) | Partial updates. Complete the named task and retain its assertions. |
| 215 | [B9.2 — Pick and Omit views](sources/typescript-training/exercises/stage3/09_utility_types.ts#L54) | Pick and Omit views. Complete the named task and retain its assertions. |
| 216 | [B9.3 — Record of role labels](sources/typescript-training/exercises/stage3/09_utility_types.ts#L67) | Record of role labels. Complete the named task and retain its assertions. |
| 217 | [E05 — Flexible user filtering](sources/typescript-exercises/src/exercises/5/index.ts) | Accept partial user criteria without duplicating fields; include the bonus that excludes the type discriminator. |
| 218 | [E08 — Compose a power-user type](sources/typescript-exercises/src/exercises/8/index.ts) | Combine user and administrator fields while replacing their incompatible discriminator. **Review:** Replace the discriminant using Omit and intersection; this is placed before the dependent overload exercise. |
| 219 | [E06 — Overload a person filter](sources/typescript-exercises/src/exercises/6/index.ts) | Tie the discriminator, allowed criteria, and result array together; also implement the typed-keys bonus. Prerequisites: E07. **Review:** Overloads preserve the dependent user/admin result; supplied tests do not exhaustively reject invalid calls. |
| 220 | [E09 — Generic API responses](sources/typescript-exercises/src/exercises/9/index.ts) | Replace duplicate callback response shapes with one reusable tagged ApiResponse<T>. |
| 221 | [B12.1 — Promise<void>](sources/typescript-training/exercises/stage3/12_async.ts#L25) | Promise<void>. Complete the named task and retain its assertions. |
| 222 | [B12.2 — Async profile lookup](sources/typescript-training/exercises/stage3/12_async.ts#L35) | Async profile lookup. Complete the named task and retain its assertions. |
| 223 | [B12.3 — Promise.all and map](sources/typescript-training/exercises/stage3/12_async.ts#L49) | Promise.all and map. Complete the named task and retain its assertions. |
| 224 | [B12.4 — Async Result wrapper](sources/typescript-training/exercises/stage3/12_async.ts#L60) | Async Result wrapper. Complete the named task and retain its assertions. Prerequisites: B8.4. **Review:** The intended Result wrapper still needs runtime exception reasoning; a type signature alone cannot guarantee a promise never rejects. |
| 225 | [E10 — Promisify callbacks](sources/typescript-exercises/src/exercises/10/index.ts) | Convert success/error callbacks into typed promises; include the object-wide promisifyAll bonus after the mapped-type introduction in B9. Prerequisites: B12.3. **Review:** The promisifyAll bonus additionally requires mapped object types; reference code uses any despite learner guidance. Revisit after module 12 if needed. |
| 226 | [E11 — Declare a JavaScript string library](sources/typescript-exercises/src/exercises/11/index.ts) | Inspect the bundled str-utils implementation and write its ambient declarations with a shared function alias. |
| 227 | [E12 — Declare generic statistics operations](sources/typescript-exercises/src/exercises/12/index.ts) | Type comparator-based index/element operations and averaging, retaining empty-input nullability and shared aliases. |
| 228 | [E13 — Augment an existing module](sources/typescript-exercises/src/exercises/13/index.ts) | Extend date-wizard with time fields and pad while preserving its existing callable namespace API. **Review:** Edit the tracked module-augmentations/date-wizard/index.ts file; the UI maps it to a virtual .d.ts path. |
| 229 | [E15 — Type an object-manipulation class](sources/typescript-exercises/src/exercises/15/index.ts) | Track set, get, delete, and getObject through generic instances, mapped properties, and Omit. **Review:** The reference uses intersection for updates; a conflicting existing-key replacement can become never although runtime spread overwrites it. Tests add fresh keys. This task precedes E14. |

### 10 — Type operators and basic tuple transformations

**Entry requirements and bridge:** Use generics and keyof. Read indexed access, typeof, as const, mapped types, conditional types and infer before rebuilding utilities.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 230 | [C13 — Hello World](sources/type-challenges/questions/00013-warm-hello-world/README.md) | Replace the placeholder with string and learn how Equal, Expect, and NotAny enforce a type contract. |
| 231 | [B4.4 — Derive a union using as const](sources/typescript-training/exercises/stage1/04_tuples_enums_const.ts#L49) | Derive a union using as const. Complete the named task and retain its assertions. |
| 232 | [C18 — Length of Tuple](sources/type-challenges/questions/00018-easy-tuple-length/README.md) | Read a readonly tuple's literal length and reject unsupported inputs. |
| 233 | [C14 — First of Array](sources/type-challenges/questions/00014-easy-first/README.md) | Extract the first element and return never for an empty tuple. |
| 234 | [C533 — Concat](sources/type-challenges/questions/00533-easy-concat/README.md) | Concatenate tuple types, preserving left-to-right positions and readonly input compatibility. |
| 235 | [C3057 — Push](sources/type-challenges/questions/03057-easy-push/README.md) | Append a new element to a tuple without widening the existing positions. |
| 236 | [C3060 — Unshift](sources/type-challenges/questions/03060-easy-unshift/README.md) | Prepend a new element to a tuple. |
| 237 | [C10 — Tuple to Union](sources/type-challenges/questions/00010-medium-tuple-to-union/README.md) | Convert a tuple's element types into a union. |
| 238 | [C11 — Tuple to Object](sources/type-challenges/questions/00011-easy-tuple-to-object/README.md) | Turn a readonly tuple of legal property keys into a key-to-itself object type. |
| 239 | [C268 — If](sources/type-challenges/questions/00268-easy-if/README.md) | Choose between two types from a boolean condition and reject invalid conditions. |
| 240 | [C43 — Exclude](sources/type-challenges/questions/00043-easy-exclude/README.md) | Remove assignable members from a union with a distributive conditional. |
| 241 | [B9.4 — Implement Partial with a mapped type](sources/typescript-training/exercises/stage3/09_utility_types.ts#L84) | Implement Partial with a mapped type. Complete the named task and retain its assertions. |
| 242 | [C4 — Pick](sources/type-challenges/questions/00004-easy-pick/README.md) | Select specified object keys and reject invalid key selections. Prerequisites: B7.4. |
| 243 | [B11.1 — Implement Readonly](sources/typescript-training/exercises/stage3/11_mapped_conditional.ts#L24) | Implement Readonly. Complete the named task and retain its assertions. |
| 244 | [C7 — Readonly](sources/type-challenges/questions/00007-easy-readonly/README.md) | Make every top-level property readonly while preserving its value type. |
| 245 | [B11.2 — Remove readonly modifiers](sources/typescript-training/exercises/stage3/11_mapped_conditional.ts#L33) | Remove readonly modifiers. Complete the named task and retain its assertions. |
| 246 | [C2793 — Mutable](sources/type-challenges/questions/02793-medium-mutable/README.md) | Remove readonly from objects and tuples while rejecting primitive inputs. |
| 247 | [B11.3 — Distributive non-nullable type](sources/typescript-training/exercises/stage3/11_mapped_conditional.ts#L43) | Distributive non-nullable type. Complete the named task and retain its assertions. |
| 248 | [B11.4 — Infer array element types](sources/typescript-training/exercises/stage3/11_mapped_conditional.ts#L56) | Infer array element types. Complete the named task and retain its assertions. |
| 249 | [C3312 — Parameters](sources/type-challenges/questions/03312-easy-parameters/README.md) | Infer a function's parameter tuple, including a function with no parameters. |
| 250 | [C2 — Get Return Type](sources/type-challenges/questions/00002-medium-return-type/README.md) | Infer a function's result type without invoking the built-in ReturnType. Prerequisites: B11.4. |
| 251 | [C62 — Type Lookup](sources/type-challenges/questions/00062-medium-type-lookup/README.md) | Select a discriminated-union member by its type field. |
| 252 | [C33763 — Union to Object from key](sources/type-challenges/questions/33763-hard-union-to-object-from-key/README.md) | Select every object-union member that contains a requested key. |

### 11 — Equality, distribution and special types

**Entry requirements and bridge:** Use conditional types and inference. Learn distributive versus wrapped conditionals, never/any/unknown and strict type equality.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 253 | [C1042 — IsNever](sources/type-challenges/questions/01042-medium-isnever/README.md) | Recognize never without accidentally distributing over an empty union. |
| 254 | [C223 — IsAny](sources/type-challenges/questions/00223-hard-isany/README.md) | Distinguish any from unknown, never, and ordinary types. |
| 255 | [C1097 — IsUnion](sources/type-challenges/questions/01097-medium-isunion/README.md) | Detect a union while handling unions absorbed by any, unknown, or broader members. |
| 256 | [C4484 — IsTuple](sources/type-challenges/questions/04484-medium-istuple/README.md) | Distinguish tuples from arrays, readonly tuples, and non-array objects. |
| 257 | [C19749 — IsEqual](sources/type-challenges/questions/19749-medium-isequal/README.md) | Implement exact type equality, including comparisons involving any and unions. |
| 258 | [C898 — Includes](sources/type-challenges/questions/00898-easy-includes/README.md) | Check tuple membership by exact type identity, not mere assignability. **Review:** Strict equality distinguishes broad and literal types, readonly shapes, unions and special types. |
| 259 | [C18142 — All](sources/type-challenges/questions/18142-medium-all/README.md) | Require every tuple element to equal a target type, including special-type cases. |
| 260 | [C949 — AnyOf](sources/type-challenges/questions/00949-medium-anyof/README.md) | Implement the challenge's Python-like truthiness rules, including empty arrays and objects. **Review:** Uses the specified empty-value convention (including empty arrays/objects), which differs from JavaScript truthiness. |

### 12 — Object type transformations and fluent state

**Entry requirements and bridge:** Use mapped types, keyof, conditional selection and equality. Learn modifier preservation, optional keys, key remapping and accumulated generic state.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 261 | [C527 — Append to object](sources/type-challenges/questions/00527-medium-append-to-object/README.md) | Add one named property with the supplied value type. |
| 262 | [C3 — Omit](sources/type-challenges/questions/00003-medium-omit/README.md) | Remove selected keys while preserving remaining property modifiers. |
| 263 | [C8 — Readonly 2](sources/type-challenges/questions/00008-medium-readonly-2/README.md) | Apply readonly to selected keys, with all keys as the default. |
| 264 | [C2757 — PartialByKeys](sources/type-challenges/questions/02757-medium-partialbykeys/README.md) | Make selected properties optional and default to all properties. |
| 265 | [C2759 — RequiredByKeys](sources/type-challenges/questions/02759-medium-requiredbykeys/README.md) | Make selected optional properties required and reject invalid keys. |
| 266 | [C2595 — PickByType](sources/type-challenges/questions/02595-medium-pickbytype/README.md) | Keep properties whose values are assignable to a requested type. |
| 267 | [C2852 — OmitByType](sources/type-challenges/questions/02852-medium-omitbytype/README.md) | Remove properties whose values are assignable to a requested type. |
| 268 | [C599 — Merge](sources/type-challenges/questions/00599-medium-merge/README.md) | Merge objects with the second object's property types winning collisions. |
| 269 | [C645 — Diff](sources/type-challenges/questions/00645-medium-diff/README.md) | Retain keys found in only one of two object types. |
| 270 | [C1130 — ReplaceKeys](sources/type-challenges/questions/01130-medium-replacekeys/README.md) | Replace selected property types across an object union and use never when a replacement is absent. |
| 271 | [C5821 — MapTypes](sources/type-challenges/questions/05821-medium-maptypes/README.md) | Map property values through one or more conversion rules while leaving unmatched types unchanged. |
| 272 | [C1367 — Remove Index Signature](sources/type-challenges/questions/01367-medium-remove-index-signature/README.md) | Remove broad string, number, and symbol index signatures while retaining named members. |
| 273 | [C2828 — ClassPublicKeys](sources/type-challenges/questions/02828-hard-classpublickeys/README.md) | Extract the public keys visible on a class instance. |
| 274 | [C57 — Get Required](sources/type-challenges/questions/00057-hard-get-required/README.md) | Keep required properties, distinguishing required undefined from optional undefined. |
| 275 | [C59 — Get Optional](sources/type-challenges/questions/00059-hard-get-optional/README.md) | Keep optional properties without losing their optional modifier. |
| 276 | [C89 — Required Keys](sources/type-challenges/questions/00089-hard-required-keys/README.md) | Produce a union of required keys. |
| 277 | [C90 — Optional Keys](sources/type-challenges/questions/00090-hard-optional-keys/README.md) | Produce a union of optional keys. |
| 278 | [C2857 — IsRequiredKey](sources/type-challenges/questions/02857-hard-isrequiredkey/README.md) | Check that every requested key is required, including union-key requests. |
| 279 | [C5181 — Mutable Keys](sources/type-challenges/questions/05181-hard-mutable-keys/README.md) | Produce a union of mutable keys using modifier-sensitive comparison. |
| 280 | [C5 — Get Readonly Keys](sources/type-challenges/questions/00005-extreme-readonly-keys/README.md) | Produce a union of readonly keys; compare with the preceding mutable-key task. Prerequisites: C19749. **Review:** Needs modifier-sensitive equality; ordinary assignability cannot reliably identify readonly keys. |
| 281 | [C12 — Chainable Options](sources/type-challenges/questions/00012-medium-chainable-options/README.md) | Accumulate option keys and values through a fluent interface and enforce duplicate-key errors from the tests. Prerequisites: C599. **Review:** Duplicate keys are tested despite no-repeat wording; preserve expected diagnostics and the downstream replacement shape. |
| 282 | [C4179 — Flip](sources/type-challenges/questions/04179-medium-flip/README.md) | Swap object keys and supported primitive values, converting values to valid property-key forms. |
| 283 | [C28333 — Public Type](sources/type-challenges/questions/28333-medium-public-type/README.md) | Remove underscore-prefixed keys while preserving modifiers on public members. |
| 284 | [C29650 — ExtractToObject](sources/type-challenges/questions/29650-medium-extracttoobject/README.md) | Lift a selected object-valued property's fields into the containing object and reject an invalid selection. |
| 285 | [C2946 — ObjectEntries](sources/type-challenges/questions/02946-medium-objectentries/README.md) | Turn object properties into entry tuples, including optional-property undefined in this snapshot's tests. **Review:** Pinned expectations retain undefined for optional entries; do not substitute a different snapshot contract. |
| 286 | [C2949 — ObjectFromEntries](sources/type-challenges/questions/02949-hard-objectfromentries/README.md) | Rebuild an object from a union of key/value entry tuples. |
| 287 | [C27932 — MergeAll](sources/type-challenges/questions/27932-medium-mergeall/README.md) | Merge multiple objects by unioning overlapping property values, rather than overwriting them. **Review:** Overlapping keys accumulate value unions. Assign below instead uses last-write precedence. |
| 288 | [C9160 — Assign](sources/type-challenges/questions/09160-hard-assign/README.md) | Apply ordered Object.assign-style overwrites from a source tuple and ignore non-object sources as tested. **Review:** Later object values overwrite earlier ones; non-object sources are ignored. |
| 289 | [C28143 — OptionalUndefined](sources/type-challenges/questions/28143-hard-optionalundefined/README.md) | Make undefined-capable properties optional, optionally restricting the affected key set. |

### 13 — Recursive tuples, collections and matrices

**Entry requirements and bridge:** Use tuple inference, conditional termination and strict equality. Learn recursive decomposition and bounded accumulation; do not allocate enormous tuples unnecessarily.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 290 | [C15 — Last of Array](sources/type-challenges/questions/00015-medium-last/README.md) | Extract the last element, returning never for an empty tuple. |
| 291 | [C16 — Pop](sources/type-challenges/questions/00016-medium-pop/README.md) | Remove the last tuple element; its Shift, Push, and Unshift extras are already covered as separate units. |
| 292 | [C3062 — Shift](sources/type-challenges/questions/03062-medium-shift/README.md) | Remove the first element and reject non-array input. |
| 293 | [C3192 — Reverse](sources/type-challenges/questions/03192-medium-reverse/README.md) | Reverse tuple positions recursively. |
| 294 | [C34007 — Compare Array Length](sources/type-challenges/questions/34007-medium-compare-array-length/README.md) | Compare tuple lengths and return 1, 0, or -1. |
| 295 | [C18220 — Filter](sources/type-challenges/questions/18220-medium-filter/README.md) | Keep elements assignable to a predicate type or union of primitive types. |
| 296 | [C399 — Tuple Filter](sources/type-challenges/questions/00399-hard-tuple-filter/README.md) | Filter whole tuple elements out by type without splitting union-valued elements. **Review:** Use a non-distributive membership decision, including never cases. |
| 297 | [C5117 — Without](sources/type-challenges/questions/05117-medium-without/README.md) | Remove a single excluded value or a list of excluded values from a tuple. |
| 298 | [C25170 — Replace First](sources/type-challenges/questions/25170-medium-replace-first/README.md) | Replace only the first matching tuple element, leaving unmatched tuples unchanged. |
| 299 | [C5153 — IndexOf](sources/type-challenges/questions/05153-medium-indexof/README.md) | Find the first exact match and return its index or -1. |
| 300 | [C5317 — LastIndexOf](sources/type-challenges/questions/05317-medium-lastindexof/README.md) | Find the last exact match and return its index or -1. |
| 301 | [C5360 — Unique](sources/type-challenges/questions/05360-medium-unique/README.md) | Deduplicate while preserving order and distinctions among any, unknown, never, and literals. **Review:** Uniqueness must use the tested strict equality for any, unknown and never. |
| 302 | [C27958 — CheckRepeatedTuple](sources/type-challenges/questions/27958-medium-checkrepeatedtuple/README.md) | Detect repeated tuple members using exact equality; do not confuse a literal with its primitive supertype. |
| 303 | [C9898 — Find elements occurring once](sources/type-challenges/questions/09898-medium-zhao-chu-mu-biao-shu-zu-zhong-zhi-chu-xian-guo-yi-ci-de-yuan-su/README.md) | Keep only elements appearing exactly once; distinguish broad number from numeric literals. |
| 304 | [C9896 — GetMiddleElement](sources/type-challenges/questions/09896-medium-get-middle-element/README.md) | Return one or two middle elements as a tuple, depending on input length parity. |
| 305 | [C4471 — Zip](sources/type-challenges/questions/04471-medium-zip/README.md) | Zip two tuples until the shorter input is exhausted. |
| 306 | [C4499 — Chunk](sources/type-challenges/questions/04499-medium-chunk/README.md) | Split a tuple into fixed-size chunks and retain a final short chunk. |
| 307 | [C4518 — Fill](sources/type-challenges/questions/04518-medium-fill/README.md) | Fill only the requested nonnegative index interval, respecting defaults and out-of-range boundaries. |
| 308 | [C34286 — Take Elements](sources/type-challenges/questions/34286-hard-take-elements/README.md) | Take the first N tuple elements, or the last absolute-N elements for a negative count, with clipping at array boundaries. **Review:** Negative counts take elements from the end; learn this before full Slice. |
| 309 | [C216 — Slice](sources/type-challenges/questions/00216-extreme-slice/README.md) | Slice a tuple with optional start/end arguments, negative indices, and invalid or out-of-range intervals. Prerequisites: C34286. **Review:** Tests omit bounds although the starter makes them look required; handle defaults and negative indices. |
| 310 | [C459 — Flatten](sources/type-challenges/questions/00459-medium-flatten/README.md) | Flatten nested tuple arrays recursively while retaining non-array values. |
| 311 | [C3243 — FlattenDepth](sources/type-challenges/questions/03243-medium-flattendepth/README.md) | Flatten to a requested depth and stop when no further nesting remains. |
| 312 | [C3188 — Tuple to Nested Object](sources/type-challenges/questions/03188-medium-tuple-to-nested-object/README.md) | Build a nested object from a tuple of property names and a terminal value type. |
| 313 | [C25270 — Transpose](sources/type-challenges/questions/25270-medium-transpose/README.md) | Transpose a matrix by exchanging row and column positions. |
| 314 | [C35191 — Trace](sources/type-challenges/questions/35191-medium-trace/README.md) | Return a union of the main-diagonal elements rather than a numeric trace sum. **Review:** Trace means the union of diagonal entries, not their numeric sum. |
| 315 | [C9989 — Count nested-array elements](sources/type-challenges/questions/09989-medium-tong-ji-shu-zu-zhong-de-yuan-su-ge-shu/README.md) | Flatten nested inputs and produce an object of occurrence counts, including the never input case. |
| 316 | [C7544 — Construct Tuple](sources/type-challenges/questions/07544-medium-construct-tuple/README.md) | Construct a tuple of a requested length and observe the supplied compiler-depth boundary case. **Review:** 999 elements are tested; a 1000-element invocation deliberately expects a compiler-depth error in the source environment. |

### 14 — Template literals and string transformations

**Entry requirements and bridge:** Use conditional recursion. Read template literal inference and intrinsic case conversion; distinguish character sequences from unions of characters.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 317 | [B11.5 — Template literal event names](sources/typescript-training/exercises/stage3/11_mapped_conditional.ts#L70) | Template literal event names. Complete the named task and retain its assertions. **Review:** Called a bonus, but its assertions are included in the file and must pass. |
| 318 | [C2688 — StartsWith](sources/type-challenges/questions/02688-medium-startswith/README.md) | Test a string prefix, including the empty-prefix case. |
| 319 | [C2693 — EndsWith](sources/type-challenges/questions/02693-medium-endswith/README.md) | Test a string suffix, including the empty-suffix case. |
| 320 | [C110 — Capitalize](sources/type-challenges/questions/00110-medium-capitalize/README.md) | Capitalize only the first character while preserving the remainder. |
| 321 | [C35991 — MyUppercase](sources/type-challenges/questions/35991-medium-myuppercase/README.md) | Uppercase the complete string while preserving non-letter characters and whitespace. |
| 322 | [C35252 — IsAlphabet](sources/type-challenges/questions/35252-medium-isalphabet/README.md) | Determine whether a character is alphabetic under the supplied cases. |
| 323 | [C106 — Trim Left](sources/type-challenges/questions/00106-medium-trimleft/README.md) | Trim leading spaces, tabs, and newlines. |
| 324 | [C4803 — Trim Right](sources/type-challenges/questions/04803-medium-trim-right/README.md) | Trim trailing spaces, tabs, and newlines. |
| 325 | [C108 — Trim](sources/type-challenges/questions/00108-medium-trim/README.md) | Trim both ends while retaining internal whitespace. |
| 326 | [C116 — Replace](sources/type-challenges/questions/00116-medium-replace/README.md) | Replace the first substring occurrence and handle an empty search string safely. |
| 327 | [C119 — ReplaceAll](sources/type-challenges/questions/00119-medium-replaceall/README.md) | Replace every substring occurrence without looping indefinitely on an empty pattern. |
| 328 | [C529 — Absolute](sources/type-challenges/questions/00529-medium-absolute/README.md) | Convert signed string, number, or bigint literals into an unsigned decimal string. |
| 329 | [C5140 — Trunc](sources/type-challenges/questions/05140-medium-trunc/README.md) | Remove the fractional part and return a string, including leading-dot and negative-zero cases. **Review:** The expected result is a string, including negative-zero text cases. |
| 330 | [C10969 — Integer](sources/type-challenges/questions/10969-medium-integer/README.md) | Retain integer literals and reject fractional or broad number types. |
| 331 | [C300 — String to Number](sources/type-challenges/questions/00300-hard-string-to-number/README.md) | Convert valid numeric text into a numeric literal and return never for the tested invalid text; do not use JavaScript parseInt prefix acceptance as the contract. |
| 332 | [C531 — String to Union](sources/type-challenges/questions/00531-medium-string-to-union/README.md) | Collect a string's characters into a union. |
| 333 | [C2070 — Drop Char](sources/type-challenges/questions/02070-medium-drop-char/README.md) | Remove occurrences of a specified character and retain the negative test for an empty removal string. |
| 334 | [C2059 — Drop String](sources/type-challenges/questions/02059-hard-drop-string/README.md) | Remove a set of characters from a string regardless of the order in the removal set. |
| 335 | [C298 — Length of String](sources/type-challenges/questions/00298-medium-length-of-string/README.md) | Count characters with a tuple accumulator. |
| 336 | [C1978 — Percentage Parser](sources/type-challenges/questions/01978-medium-percentage-parser/README.md) | Parse optional sign, numeric text, and percent suffix into a three-element tuple. |
| 337 | [C5310 — Join](sources/type-challenges/questions/05310-medium-join/README.md) | Join a tuple with a string/number delimiter, including the tested comma default. **Review:** Tests include an omitted separator, whose default is a comma. |
| 338 | [C612 — KebabCase](sources/type-challenges/questions/00612-medium-kebabcase/README.md) | Convert camelCase or PascalCase text into kebab-case using the supplied boundary rules. |
| 339 | [C114 — CamelCase](sources/type-challenges/questions/00114-hard-camelcase/README.md) | Convert snake_case to camelCase while matching repeated/trailing underscore behavior. |
| 340 | [C19458 — SnakeCase](sources/type-challenges/questions/19458-hard-snakecase/README.md) | Convert camelCase strings and string unions into snake_case. |
| 341 | [C112 — Capitalize Words](sources/type-challenges/questions/00112-hard-capitalizewords/README.md) | Capitalize words across punctuation boundaries rather than splitting only on spaces. |
| 342 | [C3326 — BEM style string](sources/type-challenges/questions/03326-medium-bem-style-string/README.md) | Generate BEM class-name unions from a block and optional element/modifier lists. |

### 15 — Function transformations and higher-order APIs

**Entry requirements and bridge:** Use tuple transformations, generics, overloads and template literals. Learn parameter-list inference, recursive callable returns and higher-order inference.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 343 | [C191 — Append Argument](sources/type-challenges/questions/00191-medium-append-argument/README.md) | Append a parameter to a function signature while retaining its return type. |
| 344 | [C3196 — Flip Arguments](sources/type-challenges/questions/03196-medium-flip-arguments/README.md) | Reverse function parameters while preserving the result type and rejecting non-functions. |
| 345 | [C189 — Awaited](sources/type-challenges/questions/00189-easy-awaited/README.md) | Recursively extract promise or thenable results, including nested wrappers. **Review:** Includes recursive Promise and thenable cases despite the upstream easy label. |
| 346 | [C20 — Promise.all](sources/type-challenges/questions/00020-medium-promise-all/README.md) | Infer PromiseAll results for readonly tuples, plain values, mixed promises, and arrays. |
| 347 | [C32427 — Unbox](sources/type-challenges/questions/32427-hard-unbox/README.md) | Unbox functions, arrays, tuples, and promises; include recursion and the tested depth parameter. **Review:** Recursive and bounded bonuses are tested. A depth of zero means unlimited unboxing. |
| 348 | [C17 — Currying 1](sources/type-challenges/questions/00017-hard-currying-1/README.md) | Curry a function into one-argument stages while preserving each argument and the final return type. |
| 349 | [C462 — Currying 2](sources/type-challenges/questions/00462-extreme-currying-2/README.md) | Extend currying to accept one or more remaining arguments at each stage and reject an empty intermediate call. Prerequisites: C17. |
| 350 | [C847 — String Join](sources/type-challenges/questions/00847-hard-string-join/README.md) | Infer an exact string-literal result from a curried join function. Prerequisites: C5310. |
| 351 | [E14 — Type a functional utility library](sources/typescript-exercises/src/exercises/14/index.ts) | Type map, filter, reduce, arithmetic, property access, and pipe across direct, partial, and empty calls; validate composition through at least five functions. **Review:** Supplied prop runtime is object-first, but tests and reference signature are key-first. The cast hides a runtime mismatch. Pipe asks for at least five stages; supplied tests cover at most three. |

### 16 — Deep objects, paths and schemas

**Entry requirements and bridge:** Use mapped recursion, optional fields, unions/intersections and template literals. Distinguish paths represented by tuples from serialized path strings.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 352 | [C9 — Deep Readonly](sources/type-challenges/questions/00009-medium-deep-readonly/README.md) | Make nested properties and tuples readonly while preserving functions and object-union behavior in the tests. **Review:** Tests include arrays, tuples and functions even where the prose downplays them. |
| 353 | [C17973 — DeepMutable](sources/type-challenges/questions/17973-medium-deepmutable/README.md) | Remove readonly recursively, including nested tuples, while preserving callable values. Prerequisites: C9. **Review:** Tests include arrays, tuples and functions; recursive object-only handling is insufficient. |
| 354 | [C16259 — ToPrimitive](sources/type-challenges/questions/16259-medium-to-primitive/README.md) | Widen literal leaves into primitive types while preserving array structure and handling functions as specified. **Review:** Functions become Function; readonly tuple structure matters. |
| 355 | [C472 — Tuple to Enum Object](sources/type-challenges/questions/00472-hard-tuple-to-enum-object/README.md) | Derive a readonly PascalCase enum-like object from a tuple, using either string values or numeric positions. |
| 356 | [C9775 — Capitalize Nest Object Keys](sources/type-challenges/questions/09775-hard-capitalize-nest-object-keys/README.md) | Capitalize object keys recursively, including objects inside tuples. |
| 357 | [C1383 — Camelize](sources/type-challenges/questions/01383-hard-camelize/README.md) | Convert snake_case object keys into camelCase across nested objects and tuples. |
| 358 | [C270 — Typed Get](sources/type-challenges/questions/00270-hard-typed-get/README.md) | Resolve a dotted property path, respecting literal dotted keys and returning never for missing paths. **Review:** A literal dotted key takes precedence over recursively traversing its segments; missing paths yield never. |
| 359 | [C29785 — Deep Omit](sources/type-challenges/questions/29785-medium-deep-omit/README.md) | Remove a nested property selected by a dotted path without changing objects for missing paths. |
| 360 | [C15260 — Tree path array](sources/type-challenges/questions/15260-hard-tree-path-array/README.md) | Represent valid tree paths as tuples of keys rather than dotted strings. |
| 361 | [C7258 — Object Key Paths](sources/type-challenges/questions/07258-hard-object-key-paths/README.md) | Enumerate nested object and array access paths with the tested dot/bracket forms. Prerequisites: C15260. |
| 362 | [C956 — DeepPick](sources/type-challenges/questions/00956-hard-deeppick/README.md) | Pick several nested paths and combine the resulting object fragments. |
| 363 | [C26401 — JSON Schema to TypeScript](sources/type-challenges/questions/26401-medium-json-schema-to-typescript/README.md) | Translate primitive, enum, array, object, and required-field schemas into TypeScript; retain the upstream additional schema features as extensions. **Review:** Do not claim full JSON Schema support from this limited task and test suite. |

### 17 — String algorithms and structured parsers

**Entry requirements and bridge:** Use recursive string decomposition and state accumulation. Learn overlapping matches, unique-character state, delimiters and nested grammar parsing.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 364 | [C2822 — Split](sources/type-challenges/questions/02822-hard-split/README.md) | Split literal strings by a separator, including omitted/empty separators and broad string input. |
| 365 | [C4037 — IsPalindrome](sources/type-challenges/questions/04037-hard-ispalindrome/README.md) | Check whether a string or numeric literal reads the same forward and backward. |
| 366 | [C9142 — CheckRepeatedChars](sources/type-challenges/questions/09142-medium-checkrepeatedchars/README.md) | Detect repeated characters with accumulated state. |
| 367 | [C9286 — FirstUniqueCharIndex](sources/type-challenges/questions/09286-medium-firstuniquecharindex/README.md) | Find the first non-repeating character's index or -1. |
| 368 | [C21104 — FindAll](sources/type-challenges/questions/21104-medium-findall/README.md) | Return every starting index of a substring, including overlapping matches. **Review:** Matches can overlap; an empty pattern yields an empty result. |
| 369 | [C35045 — Longest Common Prefix](sources/type-challenges/questions/35045-medium-longest-common-prefix/README.md) | Find the longest common prefix of a tuple of strings. |
| 370 | [C9616 — Parse URL Params](sources/type-challenges/questions/09616-medium-parse-url-params/README.md) | Collect colon-prefixed URL parameter names into a union. |
| 371 | [C147 — C-printf Parser](sources/type-challenges/questions/00147-hard-c-printf-parser/README.md) | Parse recognized printf controls into a tuple and skip escaped percent signs. |
| 372 | [C545 — printf](sources/type-challenges/questions/00545-hard-printf/README.md) | Turn printf string/number controls into a curried function type, preserving escape behavior. |
| 373 | [C14188 — Run-length encoding](sources/type-challenges/questions/14188-hard-run-length-encoding/README.md) | Implement both run-length encoding and decoding. **Review:** Only one example is asserted; passing it does not prove robust general run-length encoding. |
| 374 | [C9155 — ValidDate](sources/type-challenges/questions/09155-hard-validdate/README.md) | Validate a four-character month/day value without leap-year support. |
| 375 | [C33345 — Dynamic Route](sources/type-challenges/questions/33345-extreme-dynamic-route/README.md) | Infer route parameters, required/optional catch-alls, and invalid ambiguous combinations. **Review:** Adjacent catch-all segments are ambiguous without a static delimiter, including cases separated by optional/dynamic segments. |
| 376 | [C151 — Query String Parser](sources/type-challenges/questions/00151-extreme-query-string-parser/README.md) | Parse query strings into objects with flags, repeated keys, distinct-value tuples, and duplicate-value deduplication. **Review:** Deduplicate query values in order and distinguish flags. This is not a URL-decoding exercise. |
| 377 | [C6228 — JSON Parser](sources/type-challenges/questions/06228-extreme-json-parser/README.md) | Parse the supported JSON subset into nested types; reject invalid input and unsupported numbers rather than claiming a full JSON parser. **Review:** This grammar accepts no numbers or Unicode escapes; do not assume it is a complete JSON implementation. |

### 18 — Numeric predicates and bounded arithmetic

**Entry requirements and bridge:** Use tuple construction, recursion and numeric string representations. Separate magnitude-bounded tuple arithmetic from digit-by-digit arithmetic.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 378 | [C30301 — IsOdd](sources/type-challenges/questions/30301-medium-isodd/README.md) | Detect odd numeric literals while handling fractional, scientific-notation, and broad-number cases. **Review:** Broad numbers, decimals and exponent-format edge cases are included. |
| 379 | [C25747 — IsNegativeNumber](sources/type-challenges/questions/25747-hard-isnegativenumber/README.md) | Detect a negative numeric literal and reject broad number or union inputs with never. Prerequisites: C1097. **Review:** Reject broad number and numeric unions; union detection is a prerequisite. |
| 380 | [C7561 — Subtract](sources/type-challenges/questions/07561-extreme-subtract/README.md) | Subtract tuple-sized nonnegative integers and return never for a negative result; preserve the compiler-depth error case. Prerequisites: C7544. **Review:** Includes a deliberate 1000-depth expected-error case. Its core operation is simpler than the upstream extreme label suggests. |
| 381 | [C4182 — Fibonacci Sequence](sources/type-challenges/questions/04182-medium-fibonacci-sequence/README.md) | Compute the Fibonacci value using the source's one-based sequence. |
| 382 | [C27152 — Triangular number](sources/type-challenges/questions/27152-medium-triangular-number/README.md) | Compute triangular numbers by accumulating the sequence from zero to N. |
| 383 | [C27133 — Square](sources/type-challenges/questions/27133-medium-square/README.md) | Square positive and negative literals while accounting for tuple-size growth. |
| 384 | [C8640 — Number Range](sources/type-challenges/questions/08640-medium-number-range/README.md) | Produce an inclusive union of integer literals in a range. |
| 385 | [C734 — Inclusive Range](sources/type-challenges/questions/00734-extreme-inclusive-range/README.md) | Produce an inclusive ordered range tuple and return an empty tuple when the lower bound exceeds the upper. |
| 386 | [C9384 — Maximum](sources/type-challenges/questions/09384-hard-maximum/README.md) | Find a tuple's maximum, returning never for empty input; retain Minimum as the upstream extension. **Review:** Negative-number extension is not fully certified by the supplied base tests. |
| 387 | [C8804 — Two Sum](sources/type-challenges/questions/08804-hard-two-sum/README.md) | Determine whether two distinct array positions add to a target. |
| 388 | [C6141 — Binary to Decimal](sources/type-challenges/questions/06141-hard-binary-to-decimal/README.md) | Convert a nonempty binary string of at most eight bits into a numeric literal. |
| 389 | [C30575 — BitwiseXOR](sources/type-challenges/questions/30575-hard-bitwisexor/README.md) | XOR binary strings, aligning unequal lengths as required by the tests. |
| 390 | [C32532 — Binary Addition](sources/type-challenges/questions/32532-hard-binary-addition/README.md) | Add equal-length binary tuples using binary carry without conversion to decimal. **Review:** Binary addition forbids conversion outside binary; include the final carry. |
| 391 | [C2257 — MinusOne](sources/type-challenges/questions/02257-medium-minusone/README.md) | Decrement a positive integer, including the large decimal literal in the supplied tests. |
| 392 | [C4425 — Greater Than](sources/type-challenges/questions/04425-medium-greater-than/README.md) | Compare nonnegative integers, including large literals that cannot be represented as one tuple per unit. |
| 393 | [C274 — Integers Comparator](sources/type-challenges/questions/00274-extreme-integers-comparator/README.md) | Compare signed numeric literals with the supplied comparison enum; note the extra decimal tests. **Review:** Decimal cases are compiled tests even though presented as extra work; includes large magnitudes. |
| 394 | [C476 — Sum](sources/type-challenges/questions/00476-extreme-sum/README.md) | Add nonnegative string, number, or bigint inputs and return a decimal string with carry handling. |
| 395 | [C517 — Multiply](sources/type-challenges/questions/00517-extreme-multiply/README.md) | Multiply the same input forms, building on the preceding arbitrary-length addition task. Prerequisites: C476. **Review:** Explicitly builds on Sum; digit multiplication follows digit addition. |
| 396 | [C741 — Sort](sources/type-challenges/questions/00741-extreme-sort/README.md) | Sort natural-number tuples in ascending or descending order; retain large-number/float support as extensions. **Review:** Treat decimal/very large-number extensions separately from the core tested integer sorting. |
| 397 | [C31447 — CountReversePairs](sources/type-challenges/questions/31447-extreme-countreversepairs/README.md) | Count inverted index pairs with comparison and accumulation, including the supplied negative cases. |
| 398 | [C14080 — FizzBuzz](sources/type-challenges/questions/14080-hard-fizzbuzz/README.md) | Generate a string-literal FizzBuzz sequence efficiently for the tested bounds. |
| 399 | [C30958 — Pascal's triangle](sources/type-challenges/questions/30958-medium-pascals-triangle/README.md) | Construct Pascal's triangle with the requested number of rows. **Review:** Build Pascal rows with tuple arithmetic; keep recursion termination explicit. |

### 19 — Union algebra and combinatorial generation

**Entry requirements and bridge:** Use distributive conditionals, intersections, recursive state and equality. Expect branching and combinatorial growth; compare unions semantically rather than relying on display order.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 400 | [C13580 — Replace Union](sources/type-challenges/questions/13580-hard-replace-union/README.md) | Apply an ordered list of type replacements to an input union. |
| 401 | [C5423 — Intersection](sources/type-challenges/questions/05423-hard-intersection/README.md) | Find values common to every supplied array, union, or individual type, returning a union or never. |
| 402 | [C55 — Union to Intersection](sources/type-challenges/questions/00055-hard-union-to-intersection/README.md) | Convert a union into an intersection, including callable members. |
| 403 | [C730 — Union to Tuple](sources/type-challenges/questions/00730-hard-union-to-tuple/README.md) | Convert a union to a single tuple without assuming an order or returning a union of permutations. |
| 404 | [C27862 — CartesianProduct](sources/type-challenges/questions/27862-medium-cartesianproduct/README.md) | Generate the Cartesian product of two unions as tuple alternatives. |
| 405 | [C21106 — Ordered modifier-key pairs](sources/type-challenges/questions/21106-medium-zu-he-jian-lei-xing-combination-key-type/README.md) | Generate the tested two-key combinations in source priority order without reversing pairs. |
| 406 | [C8987 — Subsequence](sources/type-challenges/questions/08987-medium-subsequence/README.md) | Generate subsequences while preserving the relative order of surviving tuple elements. |
| 407 | [C296 — Permutation](sources/type-challenges/questions/00296-medium-permutation/README.md) | Generate tuple permutations from union members, handling never as the empty case. |
| 408 | [C21220 — Permutations of Tuple](sources/type-challenges/questions/21220-medium-permutations-of-tuple/README.md) | Generate tuple permutations without collapsing overlapping or special element types into a union first. **Review:** Retain absorbing any/unknown/never tuple entries rather than collapsing them through a union. |
| 409 | [C4260 — AllCombinations](sources/type-challenges/questions/04260-medium-nomiwase/README.md) | Generate all strings that use each source character at most once, including the empty result. |
| 410 | [C8767 — Combination](sources/type-challenges/questions/08767-medium-combination/README.md) | Generate nonempty ordered combinations of words separated by spaces. |
| 411 | [C34857 — Defined Partial Record](sources/type-challenges/questions/34857-medium-defined-partial-record/README.md) | Generate the union of nonempty defined-property subsets, rather than a conventional optional-property record. |
| 412 | [C869 — DistributeUnions](sources/type-challenges/questions/00869-extreme-distributeunions/README.md) | Distribute unions through nested tuples and objects into complete structural alternatives. |

### 20 — Contextual this and constrained APIs

**Entry requirements and bridge:** Use deep mapped types, callable inference, intersections and contextual typing. Learn ThisType and contextual object APIs before brands and diagnostic design.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 413 | [C6 — Simple Vue](sources/type-challenges/questions/00006-hard-simple-vue/README.md) | Type a Vue-like data/computed/methods API with the correct accessible this context in each section. |
| 414 | [C213 — Vue Basic Props](sources/type-challenges/questions/00213-hard-vue-basic-props/README.md) | Extend Simple Vue with constructor-based props and constructor unions accessible in each context. Prerequisites: C6. |
| 415 | [C1290 — Pinia](sources/type-challenges/questions/01290-hard-pinia/README.md) | Type a store with readonly getter contexts, mutable action state, and preserved method arguments/results. Prerequisites: C213. |
| 416 | [C553 — Deep object to unique](sources/type-challenges/questions/00553-hard-deep-object-to-unique/README.md) | Distinguish nested structurally equal objects with type identity markers while preserving required assignability. |
| 417 | [C30178 — Unique Items](sources/type-challenges/questions/30178-hard-unique-items/README.md) | Constrain an identity function to unique literal tuples and include the supplied element-level error diagnostics. **Review:** Element-specific error diagnostics appear as a bonus in prose but are required by supplied expected-error tests. |
| 418 | [C697 — Tag](sources/type-challenges/questions/00697-extreme-tag/README.md) | Attach, inspect, compare, and remove ordered tags without breaking the required mutual assignability. **Review:** Tag utilities require ordered contiguous tags and consensus across unions, including any, unknown, never and nullable inputs. |
| 419 | [C925 — Assert Array Index](sources/type-challenges/questions/00925-extreme-assert-array-index/README.md) | Design branded array indices and assertion narrowing with noUncheckedIndexedAccess enabled, rejecting tuples and indices from other arrays. **Review:** Use the metadata compiler override noUncheckedIndexedAccess: true; shared base config alone is insufficient. Branding is not runtime bounds validation. |

### 21 — Recursive algorithm applications

**Entry requirements and bridge:** Use recursive tuples, arithmetic state and nested data transformations. Translate algorithm invariants into types and verify all supplied cases.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 420 | [C3376 — InorderTraversal](sources/type-challenges/questions/03376-medium-inordertraversal/README.md) | Return a binary tree's inorder traversal tuple, including a null tree. **Review:** Folder label and metadata difficulty differ; placement follows the traversal requirements. |
| 421 | [C30430 — Tower of hanoi](sources/type-challenges/questions/30430-medium-tower-of-hanoi/README.md) | Generate legal Tower of Hanoi moves for the requested ring count. |
| 422 | [C31797 — Sudoku](sources/type-challenges/questions/31797-hard-sudoku/README.md) | Validate a completed Sudoku in the source's grouped-row representation, checking rows, columns, and boxes. **Review:** This Sudoku representation groups rows into triples; the later task uses an ordinary 9-by-9 matrix. |
| 423 | [C35314 — Valid Sudoku](sources/type-challenges/questions/35314-hard-valid-sudoku/README.md) | Validate the flat 9-by-9 Sudoku representation as a separate implementation and representation exercise. **Review:** Check boxes as well as rows and columns; a Latin square is not sufficient. |

### 22 — Compiler scale and advanced parameter constraints

**Entry requirements and bridge:** Use all prior type foundations. Study recursion shape, broad versus fixed template patterns and optional/rest tuple intersections.

| Order | Task and source | Assigned work / review note |
| ---: | --- | --- |
| 424 | [C651 — Length of String 2](sources/type-challenges/questions/00651-hard-length-of-string-2/README.md) | Count long strings with an approach that scales beyond a naive non-tail recursive character scan. Prerequisites: C298. |
| 425 | [C31824 — Length of String 3](sources/type-challenges/questions/31824-hard-length-of-string-3/README.md) | Scale string-length computation to the supplied multi-million-character generated cases. Prerequisites: C651. **Review:** Generated long-string fixtures reach approximately 8.4 million characters; this is a scaling capstone, not ordinary character recursion. |
| 426 | [C30970 — IsFixedStringLiteralType](sources/type-challenges/questions/30970-medium-shitariteraru/README.md) | Recognize a single fixed string literal and reject broad strings, never, unions, and unresolved template placeholders. **Review:** Reject broad/open template patterns and unions, while accepting fixed boolean/null/undefined textual literals. |
| 427 | [C31997 — Parameter Intersection](sources/type-challenges/questions/31997-extreme-parameter-intersection/README.md) | Intersect parameter tuples while retaining optional positions, variadic tails, and the longer input's remaining parameters. Prerequisites: C4471. **Review:** Optional and variadic parameters plus unmatched trailing positions make this substantially harder than Zip. |

## Review findings and execution limits

### What was actually reviewed

All **2,288 tracked source paths** are accounted for: 1,240 imported files and 1,048 restricted files reviewed at source. The curricular text—canonical and translated instructions, starter code, supplied tests, metadata, and available reference solutions—was read. Repeated content was sometimes presented as a diff against previously read text or verified identical content; this is recorded per path. Supporting authored scripts/configuration were read as well.

Generated dependency lockfiles were parsed in full and their structure, compiler pins and dependency catalogues inspected; **not every dependency record was manually read line by line**. Generated root challenge indexes had their authored prose read and navigation validated against all 190 question directories. Raster branding assets were decoded and visually inspected; SVG assets were read or structurally inspected as specified in the file ledger. A byte/hash traversal proves preservation, not human comprehension. The report does not treat one as the other.

The earlier structural ledger did not by itself substantiate exhaustive manual review. This report and the [file ledger](FILE_REVIEW.md) distinguish the subsequent text review from generated-data and visual checks. Review is not a translation-quality certification, security audit, proof that every reference is correct, or certification that all upstream applications run.

### Important source behavior

- **TypeScript Training:** its 12 files contain 52 numbered tasks and paired reference files. Assertions primarily verify static shapes and signatures; they do not prove requested runtime behavior. The package declares TypeScript ^5.6.0 and its lock pins 5.9.3. Use its per-file checking command from its README. A const without a widening annotation can fail an exact number assertion. The dictionary lesson’s unchecked-access claim exceeds its shared compiler configuration.
- **TypeScript Exercises:** 15 tasks; folder 16 is completion/credits, not a task. The project declares TypeScript ~3.7.2, with 3.7.7 in the retained lockfile. Its React/Monaco interface constructs isolated virtual projects; compiler success is not a runtime test. Deliberately tracked exercise libraries under node_modules are essential fixtures. E13’s editable .ts file becomes a virtual .d.ts. E14’s getter argument-order mismatch and E15’s conflicting-key update typing need independent runtime/type reasoning.
- **Type Challenges:** all 190 question directories are represented. The source pins TypeScript 5.3.3 in its lockfile and pnpm 8.12.1 in package metadata. Question-specific compiler overrides matter, especially C925. The base ESNext library excludes DOM; isolated examples using alert/setTimeout need appropriate environment libraries. Upstream folder difficulty labels are not a prerequisite graph.
- **4Geeks:** 170 task directories plus a welcome directory. App TypeScript can be transpiled over stale tracked JavaScript. Syntax transpilation is not semantic typechecking; the signature-generation helper uses heuristics and cannot establish the intended type contract. Several starter annotations conflict with fixtures, and some reference implementations fail edge cases. Those problems are identified at the relevant rows rather than silently repaired. Its preview image’s 150-exercise claim is outdated.

### Rules for interpreting contradictory materials

Read the complete linked prompt, tests and reference before choosing a contract. Preserve explicit negative tests and expected diagnostics. A bonus exercised by the supplied assertions is required for a full source-test pass (for example B11.5, C32427 and C30178). A suggested extension without adequate tests is still extension work, not certified coverage. Where prose, starter, runtime and reference disagree, the row reports the disagreement; no single artifact is automatically treated as infallible.

High-impact examples include negative remainder behavior (G18/G19), fixed sentinels (G83/G84), equal interval bounds (G94), nonterminating negative-divisor reference logic (G102), repeated index use (G109), stale/misnamed functions (G122), incompatible property return types (G136), falsy-value losses (G149/G151), invalid array guards (G152), palindrome tie disagreement (G162), and inventory annotations/partial assertions (G164–G166). These are reasons to review behavior rather than copy a supplied solution.

Type-level contracts also differ from familiar runtime meanings: C35191 returns a diagonal union, C949 defines its own falsy set, C2946 retains optional undefined in this snapshot, C27932 unions colliding values while C9160 overwrites them, and C6228 intentionally implements a restricted JSON grammar. These distinctions influence both placement and completion.

## Coverage, verification and complete file ledger

- Exactly 427 unique sequence entries: 170 G + 52 B + 15 E + 190 C. Every numbered B subtask, actionable E folder, C question directory and G task directory is represented once.
- Folder E16 and 4Geeks welcome are accounted for as supporting material. Translations, reference solutions and test files belong to existing tasks rather than inflating the count.
- All local instruction/editable/test paths and Markdown source links were checked. Explicit prerequisite edges point from an earlier row to a later row.
- All 1,240 permitted files retain the pinned path, byte content, hash and mode; no submodules or restricted source copies were added.
- The curriculum verifier checks sequence coverage, links, file-ledger coverage/hashes and prerequisite order. The import verifier checks exact source preservation. It does not solve or execute learner tasks.

Reproduce the checks from the repository root:

```sh
python3 scripts/verify_import.py
python3 scripts/verify_curriculum.py
```

See [FILE_REVIEW.md](FILE_REVIEW.md) for the complete per-path inspection ledger and detailed review notes. [CURRICULUM_REVIEW.md](CURRICULUM_REVIEW.md) provides a shorter review index. [sequence.json](curriculum/sequence.json) contains the same order and prerequisite edges for tooling. [SOURCE_MANIFEST.json](SOURCE_MANIFEST.json) and [manifests](manifests) record pinned source inventories.

The source snapshots—not the current upstream branches—define this review. Updating them requires repeating preservation, coverage and contract review.
