# Unified TypeScript Curriculum

Reviewed: 28 October 2026. Source snapshot: [`d54bc0729477`](https://github.com/Michealshodipo56/typescript-curriculum/tree/d54bc07294775a1428fbd57cef67a9ed16f420e7).

This is one prescribed learning sequence of **217 exercise units in 17 modules**, assembled from all actual exercises in the three imported, permitted curricula. It includes **52 individually listed subtasks** inside the 12 TypeScript Training units. Original files, tests, licenses, and reference solutions remain in place.

The fourth requested source, 4Geeks Academy, remains **link-only** because redistribution permission was not established. Its 170 advertised exercises are not copied, counted, or silently substituted. See the [source manifest](SOURCE_MANIFEST.json) and [review report](CURRICULUM_REVIEW.md).

## How to follow the sequence

Start with module 01 and work downward. Complete each row before the next; the global numbers are the recommended order, not upstream exercise numbers. Within a TypeScript Training unit, complete every numbered subtask in order; the full list is in [the subtask appendix](#typescript-training-subtasks). Other units can contain several required functions, all covered by the linked source instructions and tests.

You should already be able to write basic JavaScript expressions, functions, objects, loops, callbacks, and array operations. The sources do not provide a complete JavaScript-from-zero course. New type-system concepts are introduced by the linked exercises; where the sources assume extra background, the module entry requirements identify the reading bridge.

| Code | Source | Exercise units |
| --- | --- | ---: |
| B01–B12 | birsi/typescript-training | 12 |
| E01–E15 | typescript-exercises/typescript-exercises | 15 |
| C + upstream number | type-challenges/type-challenges | 190 |

A translated prompt, test file, solution, library fixture, or UI component is part of its exercise/supporting material, not an additional task. TypeScript Exercises folder 16 is a congratulations page and is excluded from the exercise count. Similar topics across sources are retained as guided introduction followed by independent practice; only alternate files for the same exercise are collapsed.

## Module overview

| Module | Focus | Global units | Count |
| --- | --- | --- | ---: |
| 01 | Values, functions, unions, and tuples | 001–004 | 4 |
| 02 | Object models and class contracts | 005–009 | 5 |
| 03 | Generics, state, and input safety | 010–014 | 5 |
| 04 | Utility types, async APIs, and declarations | 015–024 | 10 |
| 05 | Building types from types | 025–042 | 18 |
| 06 | Equality and special types | 043–050 | 8 |
| 07 | Object transformations and fluent builders | 051–072 | 22 |
| 08 | Recursive tuples and matrices | 073–097 | 25 |
| 09 | Template literals and string transformations | 098–122 | 25 |
| 10 | Function transformations and higher-order APIs | 123–131 | 9 |
| 11 | Deep objects and schema-driven types | 132–151 | 20 |
| 12 | String algorithms and parsers | 152–166 | 15 |
| 13 | Type-level arithmetic and numeric algorithms | 167–189 | 23 |
| 14 | Union algebra and combinatorial generation | 190–203 | 14 |
| 15 | Contextual this and constrained APIs | 204–210 | 7 |
| 16 | Recursive algorithm applications | 211–214 | 4 |
| 17 | Compiler limits and advanced parameter shapes | 215–217 | 3 |

## Ordered tasks

### 01 — Values, functions, unions, and tuples

**Entry requirements:** Basic JavaScript variables, functions, arrays, objects, conditions, and loops.

Learn to annotate working JavaScript before transforming types.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 001 | [B01 — Basic types](sources/typescript-training/exercises/stage1/01_basics.ts) | Annotate a name, birth year, computed age, string array, object, and greeting function. Complete tasks 1.1–1.5. |
| 002 | [B02 — Function contracts](sources/typescript-training/exercises/stage1/02_functions.ts) | Type arithmetic functions, optional/default/rest parameters, callbacks, void, and functions that never return. Complete tasks 2.1–2.5. |
| 003 | [B03 — Unions and narrowing](sources/typescript-training/exercises/stage1/03_unions_narrowing.ts) | Model identifiers and literal states; narrow with typeof and an exhaustive direction switch. Complete tasks 3.1–3.4. |
| 004 | [B04 — Tuples, readonly arrays, enums, and const assertions](sources/typescript-training/exercises/stage1/04_tuples_enums_const.ts) | Model coordinates, calculate distance, sum readonly prices, derive a direction union, and use a numeric enum. Complete tasks 4.1–4.5. |

### 02 — Object models and class contracts

**Entry requirements:** Complete module 01; distinguish values from their annotations.

Use interfaces and narrowing on concrete data before generic abstractions.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 005 | [B05 — Interfaces and dictionaries](sources/typescript-training/exercises/stage2/05_interfaces.ts) | Model products, optional and readonly properties, interface extension, and string-keyed lookup. Complete tasks 5.1–5.4. |
| 006 | [E01 — Type the community user model](sources/typescript-exercises/src/exercises/1/index.ts) | Define User from the supplied data and consistently type the array and logging function. |
| 007 | [E02 — Unite users and administrators](sources/typescript-exercises/src/exercises/2/index.ts) | Define Person as a union and update consumers to accept both member shapes. |
| 008 | [E03 — Narrow by property presence](sources/typescript-exercises/src/exercises/3/index.ts) | Repair logging so occupation and role are accessed only on the correct union branch. |
| 009 | [B06 — Classes and inheritance](sources/typescript-training/exercises/stage2/06_classes.ts) | Implement private state, getters, constructor properties, interface contracts, and an abstract base class. Complete tasks 6.1–6.4. |

### 03 — Generics, state, and input safety

**Entry requirements:** Complete module 02; functions, tuple positions, and interface contracts.

Preserve input/output relationships, then model tagged results and reusable guards.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 010 | [B07 — Generic functions and indexed access](sources/typescript-training/exercises/stage2/07_generics.ts) | Write identity, safe first-element access, constrained comparison, and a key-dependent property getter. Complete tasks 7.1–7.4. |
| 011 | [E07 — Swap a generic pair](sources/typescript-exercises/src/exercises/7/index.ts) | Type swap so unrelated inputs return a correctly reversed tuple without losing either type. |
| 012 | [B08 — Discriminated unions and exhaustive handling](sources/typescript-training/exercises/stage2/08_discriminated_unions.ts) | Model shapes, compute areas, enforce exhaustive switches, and define and unwrap Result<T>. Complete tasks 8.1–8.4. |
| 013 | [B10 — Unknown, predicates, and assertion functions](sources/typescript-training/exercises/stage3/10_type_guards.ts) | Wrap JSON parsing as unknown, narrow inputs, write a custom guard, assert numbers, and distinguish dates, lists, and strings. Complete tasks 10.1–10.4. |
| 014 | [E04 — Carry narrowing across function calls](sources/typescript-exercises/src/exercises/4/index.ts) | Give isUser and isAdmin explicit predicate contracts and use them in filtering and logging. |

### 04 — Utility types, async APIs, and declarations

**Entry requirements:** Complete module 03; generics, predicates, tagged unions, and callbacks.

Apply reusable types to realistic API and library boundaries before rebuilding those types.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 015 | [B09 — Built-in utilities and a first mapped type](sources/typescript-training/exercises/stage3/09_utility_types.ts) | Derive update and public-user shapes, build a role-permission record, and implement MyPartial. Complete tasks 9.1–9.4. |
| 016 | [E05 — Flexible user filtering](sources/typescript-exercises/src/exercises/5/index.ts) | Accept partial user criteria without duplicating fields; include the bonus that excludes the type discriminator. |
| 017 | [E06 — Overload a person filter](sources/typescript-exercises/src/exercises/6/index.ts) | Tie the discriminator, allowed criteria, and result array together; also implement the typed-keys bonus. |
| 018 | [E08 — Compose a power-user type](sources/typescript-exercises/src/exercises/8/index.ts) | Combine user and administrator fields while replacing their incompatible discriminator. |
| 019 | [E09 — Generic API responses](sources/typescript-exercises/src/exercises/9/index.ts) | Replace duplicate callback response shapes with one reusable tagged ApiResponse<T>. |
| 020 | [B12 — Typed asynchronous code](sources/typescript-training/exercises/stage3/12_async.ts) | Implement delay, fetch one or many profiles, and return a typed Result from an async boundary. Complete tasks 12.1–12.4. |
| 021 | [E10 — Promisify callbacks](sources/typescript-exercises/src/exercises/10/index.ts) | Convert success/error callbacks into typed promises; include the object-wide promisifyAll bonus after the mapped-type introduction in B9. |
| 022 | [E11 — Declare a JavaScript string library](sources/typescript-exercises/src/exercises/11/index.ts) | Inspect the bundled str-utils implementation and write its ambient declarations with a shared function alias. |
| 023 | [E12 — Declare generic statistics operations](sources/typescript-exercises/src/exercises/12/index.ts) | Type comparator-based index/element operations and averaging, retaining empty-input nullability and shared aliases. |
| 024 | [E13 — Augment an existing module](sources/typescript-exercises/src/exercises/13/index.ts) | Extend date-wizard with time fields and pad while preserving its existing callable namespace API. |

### 05 — Building types from types

**Entry requirements:** Complete module 04; keyof, indexed access, generic constraints, and utility-type use.

Move from using utilities to implementing them; simple tuple operations precede recursive ones.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 025 | [B11 — Mapped, conditional, inferred, and template types](sources/typescript-training/exercises/stage3/11_mapped_conditional.ts) | Implement readonly and mutable mappings, non-nullable filtering, element inference, and the EventName bonus. Complete tasks 11.1–11.5. |
| 026 | [C00013 — Hello World](sources/type-challenges/questions/00013-warm-hello-world/README.md) | Replace the placeholder with string and learn how Equal, Expect, and NotAny enforce a type contract. |
| 027 | [C00018 — Length of Tuple](sources/type-challenges/questions/00018-easy-tuple-length/README.md) | Read a readonly tuple's literal length and reject unsupported inputs. |
| 028 | [C00014 — First of Array](sources/type-challenges/questions/00014-easy-first/README.md) | Extract the first element and return never for an empty tuple. |
| 029 | [C00533 — Concat](sources/type-challenges/questions/00533-easy-concat/README.md) | Concatenate tuple types, preserving left-to-right positions and readonly input compatibility. |
| 030 | [C03057 — Push](sources/type-challenges/questions/03057-easy-push/README.md) | Append a new element to a tuple without widening the existing positions. |
| 031 | [C03060 — Unshift](sources/type-challenges/questions/03060-easy-unshift/README.md) | Prepend a new element to a tuple. |
| 032 | [C00010 — Tuple to Union](sources/type-challenges/questions/00010-medium-tuple-to-union/README.md) | Convert a tuple's element types into a union. |
| 033 | [C00011 — Tuple to Object](sources/type-challenges/questions/00011-easy-tuple-to-object/README.md) | Turn a readonly tuple of legal property keys into a key-to-itself object type. |
| 034 | [C00268 — If](sources/type-challenges/questions/00268-easy-if/README.md) | Choose between two types from a boolean condition and reject invalid conditions. |
| 035 | [C00043 — Exclude](sources/type-challenges/questions/00043-easy-exclude/README.md) | Remove assignable members from a union with a distributive conditional. |
| 036 | [C00004 — Pick](sources/type-challenges/questions/00004-easy-pick/README.md) | Select specified object keys and reject invalid key selections. |
| 037 | [C00007 — Readonly](sources/type-challenges/questions/00007-easy-readonly/README.md) | Make every top-level property readonly while preserving its value type. |
| 038 | [C02793 — Mutable](sources/type-challenges/questions/02793-medium-mutable/README.md) | Remove readonly from objects and tuples while rejecting primitive inputs. |
| 039 | [C03312 — Parameters](sources/type-challenges/questions/03312-easy-parameters/README.md) | Infer a function's parameter tuple, including a function with no parameters. |
| 040 | [C00002 — Get Return Type](sources/type-challenges/questions/00002-medium-return-type/README.md) | Infer a function's result type without invoking the built-in ReturnType. |
| 041 | [C00062 — Type Lookup](sources/type-challenges/questions/00062-medium-type-lookup/README.md) | Select a discriminated-union member by its type field. |
| 042 | [C33763 — Union to Object from key](sources/type-challenges/questions/33763-hard-union-to-object-from-key/README.md) | Select every object-union member that contains a requested key. |

### 06 — Equality and special types

**Entry requirements:** Complete module 05; conditional types and the never result of filtering.

Establish exact comparison and distribution behavior before membership, uniqueness, and modifier analysis.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 043 | [C01042 — IsNever](sources/type-challenges/questions/01042-medium-isnever/README.md) | Recognize never without accidentally distributing over an empty union. |
| 044 | [C00223 — IsAny](sources/type-challenges/questions/00223-hard-isany/README.md) | Distinguish any from unknown, never, and ordinary types. |
| 045 | [C01097 — IsUnion](sources/type-challenges/questions/01097-medium-isunion/README.md) | Detect a union while handling unions absorbed by any, unknown, or broader members. |
| 046 | [C04484 — IsTuple](sources/type-challenges/questions/04484-medium-istuple/README.md) | Distinguish tuples from arrays, readonly tuples, and non-array objects. |
| 047 | [C19749 — IsEqual](sources/type-challenges/questions/19749-medium-isequal/README.md) | Implement exact type equality, including comparisons involving any and unions. |
| 048 | [C00898 — Includes](sources/type-challenges/questions/00898-easy-includes/README.md) | Check tuple membership by exact type identity, not mere assignability. |
| 049 | [C18142 — All](sources/type-challenges/questions/18142-medium-all/README.md) | Require every tuple element to equal a target type, including special-type cases. |
| 050 | [C00949 — AnyOf](sources/type-challenges/questions/00949-medium-anyof/README.md) | Implement the challenge's Python-like truthiness rules, including empty arrays and objects. |

### 07 — Object transformations and fluent builders

**Entry requirements:** Complete module 06; mapped types, exact equality, object intersections, and generic defaults.

Progress from adding/removing fields through selective modifiers to stateful type accumulation.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 051 | [C00527 — Append to object](sources/type-challenges/questions/00527-medium-append-to-object/README.md) | Add one named property with the supplied value type. |
| 052 | [C00003 — Omit](sources/type-challenges/questions/00003-medium-omit/README.md) | Remove selected keys while preserving remaining property modifiers. |
| 053 | [C00008 — Readonly 2](sources/type-challenges/questions/00008-medium-readonly-2/README.md) | Apply readonly to selected keys, with all keys as the default. |
| 054 | [C02757 — PartialByKeys](sources/type-challenges/questions/02757-medium-partialbykeys/README.md) | Make selected properties optional and default to all properties. |
| 055 | [C02759 — RequiredByKeys](sources/type-challenges/questions/02759-medium-requiredbykeys/README.md) | Make selected optional properties required and reject invalid keys. |
| 056 | [C02595 — PickByType](sources/type-challenges/questions/02595-medium-pickbytype/README.md) | Keep properties whose values are assignable to a requested type. |
| 057 | [C02852 — OmitByType](sources/type-challenges/questions/02852-medium-omitbytype/README.md) | Remove properties whose values are assignable to a requested type. |
| 058 | [C00599 — Merge](sources/type-challenges/questions/00599-medium-merge/README.md) | Merge objects with the second object's property types winning collisions. |
| 059 | [C00645 — Diff](sources/type-challenges/questions/00645-medium-diff/README.md) | Retain keys found in only one of two object types. |
| 060 | [C01130 — ReplaceKeys](sources/type-challenges/questions/01130-medium-replacekeys/README.md) | Replace selected property types across an object union and use never when a replacement is absent. |
| 061 | [C05821 — MapTypes](sources/type-challenges/questions/05821-medium-maptypes/README.md) | Map property values through one or more conversion rules while leaving unmatched types unchanged. |
| 062 | [C01367 — Remove Index Signature](sources/type-challenges/questions/01367-medium-remove-index-signature/README.md) | Remove broad string, number, and symbol index signatures while retaining named members. |
| 063 | [C02828 — ClassPublicKeys](sources/type-challenges/questions/02828-hard-classpublickeys/README.md) | Extract the public keys visible on a class instance. |
| 064 | [C00057 — Get Required](sources/type-challenges/questions/00057-hard-get-required/README.md) | Keep required properties, distinguishing required undefined from optional undefined. |
| 065 | [C00059 — Get Optional](sources/type-challenges/questions/00059-hard-get-optional/README.md) | Keep optional properties without losing their optional modifier. |
| 066 | [C00089 — Required Keys](sources/type-challenges/questions/00089-hard-required-keys/README.md) | Produce a union of required keys. |
| 067 | [C00090 — Optional Keys](sources/type-challenges/questions/00090-hard-optional-keys/README.md) | Produce a union of optional keys. |
| 068 | [C02857 — IsRequiredKey](sources/type-challenges/questions/02857-hard-isrequiredkey/README.md) | Check that every requested key is required, including union-key requests. |
| 069 | [C05181 — Mutable Keys](sources/type-challenges/questions/05181-hard-mutable-keys/README.md) | Produce a union of mutable keys using modifier-sensitive comparison. |
| 070 | [C00005 — Get Readonly Keys](sources/type-challenges/questions/00005-extreme-readonly-keys/README.md) | Produce a union of readonly keys; compare with the preceding mutable-key task. |
| 071 | [C00012 — Chainable Options](sources/type-challenges/questions/00012-medium-chainable-options/README.md) | Accumulate option keys and values through a fluent interface and enforce duplicate-key errors from the tests. |
| 072 | [E15 — Type an object-manipulation class](sources/typescript-exercises/src/exercises/15/index.ts) | Track set, get, delete, and getObject through generic instances, mapped properties, and Omit. |

**Source details to retain:**

- C00012: The prose says keys will not repeat; the tests require duplicate-key diagnostics and specify recovery types.

### 08 — Recursive tuples and matrices

**Entry requirements:** Complete module 07; variadic tuple syntax, conditional inference, and exact equality.

Learn shrinking-input recursion, accumulators, counters, and exact element handling.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 073 | [C07544 — Construct Tuple](sources/type-challenges/questions/07544-medium-construct-tuple/README.md) | Construct a tuple of a requested length and observe the supplied compiler-depth boundary case. |
| 074 | [C00015 — Last of Array](sources/type-challenges/questions/00015-medium-last/README.md) | Extract the last element, returning never for an empty tuple. |
| 075 | [C00016 — Pop](sources/type-challenges/questions/00016-medium-pop/README.md) | Remove the last tuple element; its Shift, Push, and Unshift extras are already covered as separate units. |
| 076 | [C03062 — Shift](sources/type-challenges/questions/03062-medium-shift/README.md) | Remove the first element and reject non-array input. |
| 077 | [C03192 — Reverse](sources/type-challenges/questions/03192-medium-reverse/README.md) | Reverse tuple positions recursively. |
| 078 | [C18220 — Filter](sources/type-challenges/questions/18220-medium-filter/README.md) | Keep elements assignable to a predicate type or union of primitive types. |
| 079 | [C00399 — Tuple Filter](sources/type-challenges/questions/00399-hard-tuple-filter/README.md) | Filter whole tuple elements out by type without splitting union-valued elements. |
| 080 | [C05117 — Without](sources/type-challenges/questions/05117-medium-without/README.md) | Remove a single excluded value or a list of excluded values from a tuple. |
| 081 | [C25170 — Replace First](sources/type-challenges/questions/25170-medium-replace-first/README.md) | Replace only the first matching tuple element, leaving unmatched tuples unchanged. |
| 082 | [C05153 — IndexOf](sources/type-challenges/questions/05153-medium-indexof/README.md) | Find the first exact match and return its index or -1. |
| 083 | [C05317 — LastIndexOf](sources/type-challenges/questions/05317-medium-lastindexof/README.md) | Find the last exact match and return its index or -1. |
| 084 | [C05360 — Unique](sources/type-challenges/questions/05360-medium-unique/README.md) | Deduplicate while preserving order and distinctions among any, unknown, never, and literals. |
| 085 | [C27958 — CheckRepeatedTuple](sources/type-challenges/questions/27958-medium-checkrepeatedtuple/README.md) | Detect repeated tuple members using exact equality; do not confuse a literal with its primitive supertype. |
| 086 | [C09898 — Find elements occurring once](sources/type-challenges/questions/09898-medium-zhao-chu-mu-biao-shu-zu-zhong-zhi-chu-xian-guo-yi-ci-de-yuan-su/README.md) | Keep only elements appearing exactly once; distinguish broad number from numeric literals. |
| 087 | [C09896 — GetMiddleElement](sources/type-challenges/questions/09896-medium-get-middle-element/README.md) | Return one or two middle elements as a tuple, depending on input length parity. |
| 088 | [C04471 — Zip](sources/type-challenges/questions/04471-medium-zip/README.md) | Zip two tuples until the shorter input is exhausted. |
| 089 | [C04499 — Chunk](sources/type-challenges/questions/04499-medium-chunk/README.md) | Split a tuple into fixed-size chunks and retain a final short chunk. |
| 090 | [C04518 — Fill](sources/type-challenges/questions/04518-medium-fill/README.md) | Fill only the requested nonnegative index interval, respecting defaults and out-of-range boundaries. |
| 091 | [C00459 — Flatten](sources/type-challenges/questions/00459-medium-flatten/README.md) | Flatten nested tuple arrays recursively while retaining non-array values. |
| 092 | [C03243 — FlattenDepth](sources/type-challenges/questions/03243-medium-flattendepth/README.md) | Flatten to a requested depth and stop when no further nesting remains. |
| 093 | [C03188 — Tuple to Nested Object](sources/type-challenges/questions/03188-medium-tuple-to-nested-object/README.md) | Build a nested object from a tuple of property names and a terminal value type. |
| 094 | [C34007 — Compare Array Length](sources/type-challenges/questions/34007-medium-compare-array-length/README.md) | Compare tuple lengths and return 1, 0, or -1. |
| 095 | [C25270 — Transpose](sources/type-challenges/questions/25270-medium-transpose/README.md) | Transpose a matrix by exchanging row and column positions. |
| 096 | [C35191 — Trace](sources/type-challenges/questions/35191-medium-trace/README.md) | Return a union of the main-diagonal elements rather than a numeric trace sum. |
| 097 | [C09989 — Count nested-array elements](sources/type-challenges/questions/09989-medium-tong-ji-shu-zu-zhong-de-yuan-su-ge-shu/README.md) | Flatten nested inputs and produce an object of occurrence counts, including the never input case. |

**Source details to retain:**

- C07544: The 1000-depth case is deliberately annotated as an expected error. Compiler limits depend on the selected toolchain.

### 09 — Template literals and string transformations

**Entry requirements:** Complete module 08; infer, tuple counters, unions, and accumulators.

Start with local character changes, then add recursive scans, case conversion, and joins.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 098 | [C00110 — Capitalize](sources/type-challenges/questions/00110-medium-capitalize/README.md) | Capitalize only the first character while preserving the remainder. |
| 099 | [C35991 — MyUppercase](sources/type-challenges/questions/35991-medium-myuppercase/README.md) | Uppercase the complete string while preserving non-letter characters and whitespace. |
| 100 | [C35252 — IsAlphabet](sources/type-challenges/questions/35252-medium-isalphabet/README.md) | Determine whether a character is alphabetic under the supplied cases. |
| 101 | [C02688 — StartsWith](sources/type-challenges/questions/02688-medium-startswith/README.md) | Test a string prefix, including the empty-prefix case. |
| 102 | [C02693 — EndsWith](sources/type-challenges/questions/02693-medium-endswith/README.md) | Test a string suffix, including the empty-suffix case. |
| 103 | [C00106 — Trim Left](sources/type-challenges/questions/00106-medium-trimleft/README.md) | Trim leading spaces, tabs, and newlines. |
| 104 | [C04803 — Trim Right](sources/type-challenges/questions/04803-medium-trim-right/README.md) | Trim trailing spaces, tabs, and newlines. |
| 105 | [C00108 — Trim](sources/type-challenges/questions/00108-medium-trim/README.md) | Trim both ends while retaining internal whitespace. |
| 106 | [C00116 — Replace](sources/type-challenges/questions/00116-medium-replace/README.md) | Replace the first substring occurrence and handle an empty search string safely. |
| 107 | [C00119 — ReplaceAll](sources/type-challenges/questions/00119-medium-replaceall/README.md) | Replace every substring occurrence without looping indefinitely on an empty pattern. |
| 108 | [C02070 — Drop Char](sources/type-challenges/questions/02070-medium-drop-char/README.md) | Remove occurrences of a specified character and retain the negative test for an empty removal string. |
| 109 | [C00529 — Absolute](sources/type-challenges/questions/00529-medium-absolute/README.md) | Convert signed string, number, or bigint literals into an unsigned decimal string. |
| 110 | [C05140 — Trunc](sources/type-challenges/questions/05140-medium-trunc/README.md) | Remove the fractional part and return a string, including leading-dot and negative-zero cases. |
| 111 | [C10969 — Integer](sources/type-challenges/questions/10969-medium-integer/README.md) | Retain integer literals and reject fractional or broad number types. |
| 112 | [C00300 — String to Number](sources/type-challenges/questions/00300-hard-string-to-number/README.md) | Convert valid numeric text into a numeric literal and return never for the tested invalid text; do not use JavaScript parseInt prefix acceptance as the contract. |
| 113 | [C30301 — IsOdd](sources/type-challenges/questions/30301-medium-isodd/README.md) | Detect odd numeric literals while handling fractional, scientific-notation, and broad-number cases. |
| 114 | [C00531 — String to Union](sources/type-challenges/questions/00531-medium-string-to-union/README.md) | Collect a string's characters into a union. |
| 115 | [C00298 — Length of String](sources/type-challenges/questions/00298-medium-length-of-string/README.md) | Count characters with a tuple accumulator. |
| 116 | [C01978 — Percentage Parser](sources/type-challenges/questions/01978-medium-percentage-parser/README.md) | Parse optional sign, numeric text, and percent suffix into a three-element tuple. |
| 117 | [C05310 — Join](sources/type-challenges/questions/05310-medium-join/README.md) | Join a tuple with a string/number delimiter, including the tested comma default. |
| 118 | [C00612 — KebabCase](sources/type-challenges/questions/00612-medium-kebabcase/README.md) | Convert camelCase or PascalCase text into kebab-case using the supplied boundary rules. |
| 119 | [C00114 — CamelCase](sources/type-challenges/questions/00114-hard-camelcase/README.md) | Convert snake_case to camelCase while matching repeated/trailing underscore behavior. |
| 120 | [C19458 — SnakeCase](sources/type-challenges/questions/19458-hard-snakecase/README.md) | Convert camelCase strings and string unions into snake_case. |
| 121 | [C00112 — Capitalize Words](sources/type-challenges/questions/00112-hard-capitalizewords/README.md) | Capitalize words across punctuation boundaries rather than splitting only on spaces. |
| 122 | [C03326 — BEM style string](sources/type-challenges/questions/03326-medium-bem-style-string/README.md) | Generate BEM class-name unions from a block and optional element/modifier lists. |

**Source details to retain:**

- C05140: The example comment suggests a number; actual assertions require a string result.
- C00300: The prompt compares behavior to parseInt, but invalid trailing text is expected to produce never.
- C05310: The tests exercise a default comma separator even though the initial template has no default.

### 10 — Function transformations and higher-order APIs

**Entry requirements:** Complete module 09; parameter inference, tuple reversal, promises, literal inference, and string joins.

Reuse tuple/string operations at typed function boundaries, then tackle currying.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 123 | [C00191 — Append Argument](sources/type-challenges/questions/00191-medium-append-argument/README.md) | Append a parameter to a function signature while retaining its return type. |
| 124 | [C03196 — Flip Arguments](sources/type-challenges/questions/03196-medium-flip-arguments/README.md) | Reverse function parameters while preserving the result type and rejecting non-functions. |
| 125 | [C00189 — Awaited](sources/type-challenges/questions/00189-easy-awaited/README.md) | Recursively extract promise or thenable results, including nested wrappers. |
| 126 | [C00020 — Promise.all](sources/type-challenges/questions/00020-medium-promise-all/README.md) | Infer PromiseAll results for readonly tuples, plain values, mixed promises, and arrays. |
| 127 | [C32427 — Unbox](sources/type-challenges/questions/32427-hard-unbox/README.md) | Unbox functions, arrays, tuples, and promises; include recursion and the tested depth parameter. |
| 128 | [C00017 — Currying 1](sources/type-challenges/questions/00017-hard-currying-1/README.md) | Curry a function into one-argument stages while preserving each argument and the final return type. |
| 129 | [E14 — Type a functional utility library](sources/typescript-exercises/src/exercises/14/index.ts) | Type map, filter, reduce, arithmetic, property access, and pipe across direct, partial, and empty calls; validate composition through at least five functions. |
| 130 | [C00462 — Currying 2](sources/type-challenges/questions/00462-extreme-currying-2/README.md) | Extend currying to accept one or more remaining arguments at each stage and reject an empty intermediate call. |
| 131 | [C00847 — String Join](sources/type-challenges/questions/00847-hard-string-join/README.md) | Infer an exact string-literal result from a curried join function. |

**Source details to retain:**

- C32427: Recursive behavior and a depth parameter appear in tests. Depth 0 means unlimited unboxing in this snapshot.

### 11 — Deep objects and schema-driven types

**Entry requirements:** Complete module 10; string decomposition, recursive tuples, object merging, and function inference.

Combine recursive mapping, key remapping, tuple transforms, and path parsing.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 132 | [C00009 — Deep Readonly](sources/type-challenges/questions/00009-medium-deep-readonly/README.md) | Make nested properties and tuples readonly while preserving functions and object-union behavior in the tests. |
| 133 | [C17973 — DeepMutable](sources/type-challenges/questions/17973-medium-deepmutable/README.md) | Remove readonly recursively, including nested tuples, while preserving callable values. |
| 134 | [C16259 — ToPrimitive](sources/type-challenges/questions/16259-medium-to-primitive/README.md) | Widen literal leaves into primitive types while preserving array structure and handling functions as specified. |
| 135 | [C04179 — Flip](sources/type-challenges/questions/04179-medium-flip/README.md) | Swap object keys and supported primitive values, converting values to valid property-key forms. |
| 136 | [C28333 — Public Type](sources/type-challenges/questions/28333-medium-public-type/README.md) | Remove underscore-prefixed keys while preserving modifiers on public members. |
| 137 | [C29650 — ExtractToObject](sources/type-challenges/questions/29650-medium-extracttoobject/README.md) | Lift a selected object-valued property's fields into the containing object and reject an invalid selection. |
| 138 | [C02946 — ObjectEntries](sources/type-challenges/questions/02946-medium-objectentries/README.md) | Turn object properties into entry tuples, including optional-property undefined in this snapshot's tests. |
| 139 | [C02949 — ObjectFromEntries](sources/type-challenges/questions/02949-hard-objectfromentries/README.md) | Rebuild an object from a union of key/value entry tuples. |
| 140 | [C27932 — MergeAll](sources/type-challenges/questions/27932-medium-mergeall/README.md) | Merge multiple objects by unioning overlapping property values, rather than overwriting them. |
| 141 | [C09160 — Assign](sources/type-challenges/questions/09160-hard-assign/README.md) | Apply ordered Object.assign-style overwrites from a source tuple and ignore non-object sources as tested. |
| 142 | [C28143 — OptionalUndefined](sources/type-challenges/questions/28143-hard-optionalundefined/README.md) | Make undefined-capable properties optional, optionally restricting the affected key set. |
| 143 | [C00472 — Tuple to Enum Object](sources/type-challenges/questions/00472-hard-tuple-to-enum-object/README.md) | Derive a readonly PascalCase enum-like object from a tuple, using either string values or numeric positions. |
| 144 | [C09775 — Capitalize Nest Object Keys](sources/type-challenges/questions/09775-hard-capitalize-nest-object-keys/README.md) | Capitalize object keys recursively, including objects inside tuples. |
| 145 | [C01383 — Camelize](sources/type-challenges/questions/01383-hard-camelize/README.md) | Convert snake_case object keys into camelCase across nested objects and tuples. |
| 146 | [C00270 — Typed Get](sources/type-challenges/questions/00270-hard-typed-get/README.md) | Resolve a dotted property path, respecting literal dotted keys and returning never for missing paths. |
| 147 | [C29785 — Deep Omit](sources/type-challenges/questions/29785-medium-deep-omit/README.md) | Remove a nested property selected by a dotted path without changing objects for missing paths. |
| 148 | [C00956 — DeepPick](sources/type-challenges/questions/00956-hard-deeppick/README.md) | Pick several nested paths and combine the resulting object fragments. |
| 149 | [C15260 — Tree path array](sources/type-challenges/questions/15260-hard-tree-path-array/README.md) | Represent valid tree paths as tuples of keys rather than dotted strings. |
| 150 | [C07258 — Object Key Paths](sources/type-challenges/questions/07258-hard-object-key-paths/README.md) | Enumerate nested object and array access paths with the tested dot/bracket forms. |
| 151 | [C26401 — JSON Schema to TypeScript](sources/type-challenges/questions/26401-medium-json-schema-to-typescript/README.md) | Translate primitive, enum, array, object, and required-field schemas into TypeScript; retain the upstream additional schema features as extensions. |

**Source details to retain:**

- C00009: The prompt downplays arrays/functions, but the tests include readonly nested tuples, functions, and object unions.
- C02946: Optional fields retain undefined in this pinned snapshot. Do not substitute another version of this exercise.
- C26401: additionalProperties, oneOf/anyOf/allOf, and length constraints are listed extensions beyond the supplied base assertions; keep them as extensions, not already-tested coverage.

### 12 — String algorithms and parsers

**Entry requirements:** Complete module 11; recursive strings, object construction, tuple joins, and optional keys.

Build explicit parsing state and error cases before composing full route and JSON parsers.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 152 | [C02822 — Split](sources/type-challenges/questions/02822-hard-split/README.md) | Split literal strings by a separator, including omitted/empty separators and broad string input. |
| 153 | [C04037 — IsPalindrome](sources/type-challenges/questions/04037-hard-ispalindrome/README.md) | Check whether a string or numeric literal reads the same forward and backward. |
| 154 | [C02059 — Drop String](sources/type-challenges/questions/02059-hard-drop-string/README.md) | Remove a set of characters from a string regardless of the order in the removal set. |
| 155 | [C09142 — CheckRepeatedChars](sources/type-challenges/questions/09142-medium-checkrepeatedchars/README.md) | Detect repeated characters with accumulated state. |
| 156 | [C09286 — FirstUniqueCharIndex](sources/type-challenges/questions/09286-medium-firstuniquecharindex/README.md) | Find the first non-repeating character's index or -1. |
| 157 | [C21104 — FindAll](sources/type-challenges/questions/21104-medium-findall/README.md) | Return every starting index of a substring, including overlapping matches. |
| 158 | [C35045 — Longest Common Prefix](sources/type-challenges/questions/35045-medium-longest-common-prefix/README.md) | Find the longest common prefix of a tuple of strings. |
| 159 | [C09616 — Parse URL Params](sources/type-challenges/questions/09616-medium-parse-url-params/README.md) | Collect colon-prefixed URL parameter names into a union. |
| 160 | [C00147 — C-printf Parser](sources/type-challenges/questions/00147-hard-c-printf-parser/README.md) | Parse recognized printf controls into a tuple and skip escaped percent signs. |
| 161 | [C00545 — printf](sources/type-challenges/questions/00545-hard-printf/README.md) | Turn printf string/number controls into a curried function type, preserving escape behavior. |
| 162 | [C14188 — Run-length encoding](sources/type-challenges/questions/14188-hard-run-length-encoding/README.md) | Implement both run-length encoding and decoding. |
| 163 | [C09155 — ValidDate](sources/type-challenges/questions/09155-hard-validdate/README.md) | Validate a four-character month/day value without leap-year support. |
| 164 | [C33345 — Dynamic Route](sources/type-challenges/questions/33345-extreme-dynamic-route/README.md) | Infer route parameters, required/optional catch-alls, and invalid ambiguous combinations. |
| 165 | [C00151 — Query String Parser](sources/type-challenges/questions/00151-extreme-query-string-parser/README.md) | Parse query strings into objects with flags, repeated keys, distinct-value tuples, and duplicate-value deduplication. |
| 166 | [C06228 — JSON Parser](sources/type-challenges/questions/06228-extreme-json-parser/README.md) | Parse the supported JSON subset into nested types; reject invalid input and unsupported numbers rather than claiming a full JSON parser. |

### 13 — Type-level arithmetic and numeric algorithms

**Entry requirements:** Complete module 12; tuple construction, literal parsing, recursion, counters, and equality.

Distinguish small tuple arithmetic from decimal-digit algorithms needed for large literals.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 167 | [C07561 — Subtract](sources/type-challenges/questions/07561-extreme-subtract/README.md) | Subtract tuple-sized nonnegative integers and return never for a negative result; preserve the compiler-depth error case. |
| 168 | [C34286 — Take Elements](sources/type-challenges/questions/34286-hard-take-elements/README.md) | Take the first N tuple elements, or the last absolute-N elements for a negative count, with clipping at array boundaries. |
| 169 | [C00216 — Slice](sources/type-challenges/questions/00216-extreme-slice/README.md) | Slice a tuple with optional start/end arguments, negative indices, and invalid or out-of-range intervals. |
| 170 | [C08640 — Number Range](sources/type-challenges/questions/08640-medium-number-range/README.md) | Produce an inclusive union of integer literals in a range. |
| 171 | [C00734 — Inclusive Range](sources/type-challenges/questions/00734-extreme-inclusive-range/README.md) | Produce an inclusive ordered range tuple and return an empty tuple when the lower bound exceeds the upper. |
| 172 | [C27152 — Triangular number](sources/type-challenges/questions/27152-medium-triangular-number/README.md) | Compute triangular numbers by accumulating the sequence from zero to N. |
| 173 | [C04182 — Fibonacci Sequence](sources/type-challenges/questions/04182-medium-fibonacci-sequence/README.md) | Compute the Fibonacci value using the source's one-based sequence. |
| 174 | [C27133 — Square](sources/type-challenges/questions/27133-medium-square/README.md) | Square positive and negative literals while accounting for tuple-size growth. |
| 175 | [C02257 — MinusOne](sources/type-challenges/questions/02257-medium-minusone/README.md) | Decrement a positive integer, including the large decimal literal in the supplied tests. |
| 176 | [C04425 — Greater Than](sources/type-challenges/questions/04425-medium-greater-than/README.md) | Compare nonnegative integers, including large literals that cannot be represented as one tuple per unit. |
| 177 | [C25747 — IsNegativeNumber](sources/type-challenges/questions/25747-hard-isnegativenumber/README.md) | Detect a negative numeric literal and reject broad number or union inputs with never. |
| 178 | [C09384 — Maximum](sources/type-challenges/questions/09384-hard-maximum/README.md) | Find a tuple's maximum, returning never for empty input; retain Minimum as the upstream extension. |
| 179 | [C08804 — Two Sum](sources/type-challenges/questions/08804-hard-two-sum/README.md) | Determine whether two distinct array positions add to a target. |
| 180 | [C06141 — Binary to Decimal](sources/type-challenges/questions/06141-hard-binary-to-decimal/README.md) | Convert a nonempty binary string of at most eight bits into a numeric literal. |
| 181 | [C30575 — BitwiseXOR](sources/type-challenges/questions/30575-hard-bitwisexor/README.md) | XOR binary strings, aligning unequal lengths as required by the tests. |
| 182 | [C32532 — Binary Addition](sources/type-challenges/questions/32532-hard-binary-addition/README.md) | Add equal-length binary tuples using binary carry without conversion to decimal. |
| 183 | [C00274 — Integers Comparator](sources/type-challenges/questions/00274-extreme-integers-comparator/README.md) | Compare signed numeric literals with the supplied comparison enum; note the extra decimal tests. |
| 184 | [C00476 — Sum](sources/type-challenges/questions/00476-extreme-sum/README.md) | Add nonnegative string, number, or bigint inputs and return a decimal string with carry handling. |
| 185 | [C00517 — Multiply](sources/type-challenges/questions/00517-extreme-multiply/README.md) | Multiply the same input forms, building on the preceding arbitrary-length addition task. |
| 186 | [C00741 — Sort](sources/type-challenges/questions/00741-extreme-sort/README.md) | Sort natural-number tuples in ascending or descending order; retain large-number/float support as extensions. |
| 187 | [C31447 — CountReversePairs](sources/type-challenges/questions/31447-extreme-countreversepairs/README.md) | Count inverted index pairs with comparison and accumulation, including the supplied negative cases. |
| 188 | [C14080 — FizzBuzz](sources/type-challenges/questions/14080-hard-fizzbuzz/README.md) | Generate a string-literal FizzBuzz sequence efficiently for the tested bounds. |
| 189 | [C30958 — Pascal's triangle](sources/type-challenges/questions/30958-medium-pascals-triangle/README.md) | Construct Pascal's triangle with the requested number of rows. |

**Source details to retain:**

- C07561: Although upstream labels this extreme, its basic contract follows directly from tuple construction; the 1000 case is an expected compiler error.
- C00216: The starter has three required generic parameters; the tests require omitted start/end defaults.

### 14 — Union algebra and combinatorial generation

**Entry requirements:** Complete module 13; distributive conditionals, tuple recursion, exact identity, and set-like operations.

Learn union replacement and intersection, then generate structured alternatives without losing distinct tuple elements.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 190 | [C30970 — IsFixedStringLiteralType](sources/type-challenges/questions/30970-medium-shitariteraru/README.md) | Recognize a single fixed string literal and reject broad strings, never, unions, and unresolved template placeholders. |
| 191 | [C13580 — Replace Union](sources/type-challenges/questions/13580-hard-replace-union/README.md) | Apply an ordered list of type replacements to an input union. |
| 192 | [C05423 — Intersection](sources/type-challenges/questions/05423-hard-intersection/README.md) | Find values common to every supplied array, union, or individual type, returning a union or never. |
| 193 | [C00055 — Union to Intersection](sources/type-challenges/questions/00055-hard-union-to-intersection/README.md) | Convert a union into an intersection, including callable members. |
| 194 | [C00730 — Union to Tuple](sources/type-challenges/questions/00730-hard-union-to-tuple/README.md) | Convert a union to a single tuple without assuming an order or returning a union of permutations. |
| 195 | [C27862 — CartesianProduct](sources/type-challenges/questions/27862-medium-cartesianproduct/README.md) | Generate the Cartesian product of two unions as tuple alternatives. |
| 196 | [C21106 — Ordered modifier-key pairs](sources/type-challenges/questions/21106-medium-zu-he-jian-lei-xing-combination-key-type/README.md) | Generate the tested two-key combinations in source priority order without reversing pairs. |
| 197 | [C08987 — Subsequence](sources/type-challenges/questions/08987-medium-subsequence/README.md) | Generate subsequences while preserving the relative order of surviving tuple elements. |
| 198 | [C00296 — Permutation](sources/type-challenges/questions/00296-medium-permutation/README.md) | Generate tuple permutations from union members, handling never as the empty case. |
| 199 | [C21220 — Permutations of Tuple](sources/type-challenges/questions/21220-medium-permutations-of-tuple/README.md) | Generate tuple permutations without collapsing overlapping or special element types into a union first. |
| 200 | [C04260 — AllCombinations](sources/type-challenges/questions/04260-medium-nomiwase/README.md) | Generate all strings that use each source character at most once, including the empty result. |
| 201 | [C08767 — Combination](sources/type-challenges/questions/08767-medium-combination/README.md) | Generate nonempty ordered combinations of words separated by spaces. |
| 202 | [C34857 — Defined Partial Record](sources/type-challenges/questions/34857-medium-defined-partial-record/README.md) | Generate the union of nonempty defined-property subsets, rather than a conventional optional-property record. |
| 203 | [C00869 — DistributeUnions](sources/type-challenges/questions/00869-extreme-distributeunions/README.md) | Distribute unions through nested tuples and objects into complete structural alternatives. |

**Source details to retain:**

- C30970: The fixed-string task distinguishes resolved literal placeholders from open-ended string/number/bigint/boolean patterns.

### 15 — Contextual this and constrained APIs

**Entry requirements:** Complete module 14; intersections, deep mapping, equality, tuple uniqueness, and assertion functions. Read about contextual this and ThisType before the Vue tasks; read about unique symbols and branded types before the final four units.

Apply type transformations to framework-style APIs and compile-time constraints.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 204 | [C00006 — Simple Vue](sources/type-challenges/questions/00006-hard-simple-vue/README.md) | Type a Vue-like data/computed/methods API with the correct accessible this context in each section. |
| 205 | [C00213 — Vue Basic Props](sources/type-challenges/questions/00213-hard-vue-basic-props/README.md) | Extend Simple Vue with constructor-based props and constructor unions accessible in each context. |
| 206 | [C01290 — Pinia](sources/type-challenges/questions/01290-hard-pinia/README.md) | Type a store with readonly getter contexts, mutable action state, and preserved method arguments/results. |
| 207 | [C00553 — Deep object to unique](sources/type-challenges/questions/00553-hard-deep-object-to-unique/README.md) | Distinguish nested structurally equal objects with type identity markers while preserving required assignability. |
| 208 | [C30178 — Unique Items](sources/type-challenges/questions/30178-hard-unique-items/README.md) | Constrain an identity function to unique literal tuples and include the supplied element-level error diagnostics. |
| 209 | [C00697 — Tag](sources/type-challenges/questions/00697-extreme-tag/README.md) | Attach, inspect, compare, and remove ordered tags without breaking the required mutual assignability. |
| 210 | [C00925 — Assert Array Index](sources/type-challenges/questions/00925-extreme-assert-array-index/README.md) | Design branded array indices and assertion narrowing with noUncheckedIndexedAccess enabled, rejecting tuples and indices from other arrays. |

**Source details to retain:**

- C30178: Element-specific diagnostic behavior is labeled bonus in the prompt but appears in the checked test file.
- C00925: Use the per-question noUncheckedIndexedAccess override; a branded API is not a runtime bounds check.

### 16 — Recursive algorithm applications

**Entry requirements:** Complete module 15; recursive tuples, matrix traversal, comparisons, and uniqueness checks.

Apply recursion and matrix techniques to complete algorithmic contracts.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 211 | [C03376 — InorderTraversal](sources/type-challenges/questions/03376-medium-inordertraversal/README.md) | Return a binary tree's inorder traversal tuple, including a null tree. |
| 212 | [C30430 — Tower of hanoi](sources/type-challenges/questions/30430-medium-tower-of-hanoi/README.md) | Generate legal Tower of Hanoi moves for the requested ring count. |
| 213 | [C31797 — Sudoku](sources/type-challenges/questions/31797-hard-sudoku/README.md) | Validate a completed Sudoku in the source's grouped-row representation, checking rows, columns, and boxes. |
| 214 | [C35314 — Valid Sudoku](sources/type-challenges/questions/35314-hard-valid-sudoku/README.md) | Validate the flat 9-by-9 Sudoku representation as a separate implementation and representation exercise. |

### 17 — Compiler limits and advanced parameter shapes

**Entry requirements:** Complete module 16; accumulator design, string counting, signed literal handling, parameter tuples, and compiler diagnostics.

Finish with scaling constraints and combinations of optional and rest parameter positions.

| Order | Source task | Work to complete |
| ---: | --- | --- |
| 215 | [C00651 — Length of String 2](sources/type-challenges/questions/00651-hard-length-of-string-2/README.md) | Count long strings with an approach that scales beyond a naive non-tail recursive character scan. |
| 216 | [C31824 — Length of String 3](sources/type-challenges/questions/31824-hard-length-of-string-3/README.md) | Scale string-length computation to the supplied multi-million-character generated cases. |
| 217 | [C31997 — Parameter Intersection](sources/type-challenges/questions/31997-extreme-parameter-intersection/README.md) | Intersect parameter tuples while retaining optional positions, variadic tails, and the longer input's remaining parameters. |

**Source details to retain:**

- C31824: Generated test cases include strings of several million characters; this belongs after ordinary recursion practice.
- C31997: This is position-wise parameter composition, not simply the TypeScript intersection l & r. Keep optional and variadic tails.

## TypeScript Training subtasks

These 52 subtasks are already included in their parent units above. They are expanded here so no TODO inside a lesson is lost. The source task numbers are retained even when a lesson moves relative to another source.

### B01 — Basic types (global unit 001)

- [ ] **1.1:** Annotate the username as string.
- [ ] **1.2:** Declare a numeric birth year and calculate the age in 2026.
- [ ] **1.3:** Declare a string array with at least three hobbies.
- [ ] **1.4:** Annotate a user object with id, name, and isActive.
- [ ] **1.5:** Write greet with annotated input and output.

### B02 — Function contracts (global unit 002)

- [ ] **2.1:** Define MathOp and implement add and multiply.
- [ ] **2.2:** Implement an optional-query buildUrl and a default-count repeat.
- [ ] **2.3:** Implement sum with numeric rest parameters and an empty-input result of zero.
- [ ] **2.4:** Invoke a typed callback for each character and its index.
- [ ] **2.5:** Implement fail as a function that always throws and returns never.

### B03 — Unions and narrowing (global unit 003)

- [ ] **3.1:** Declare an identifier accepting number or string and assign a string.
- [ ] **3.2:** Define the exact Status literals and initialize currentStatus.
- [ ] **3.3:** Implement formatId using typeof narrowing.
- [ ] **3.4:** Define four directions and implement move with an exhaustive switch.

### B04 — Tuples, readonly arrays, enums, and const assertions (global unit 004)

- [ ] **4.1:** Define the two-number Point tuple and origin.
- [ ] **4.2:** Implement the distance between two Points.
- [ ] **4.3:** Sum readonly prices without mutation.
- [ ] **4.4:** Declare const directions and derive CompassDirection from the runtime value.
- [ ] **4.5:** Define ordered LogLevel enum members and implement shouldLog.

### B05 — Interfaces and dictionaries (global unit 005)

- [ ] **5.1:** Define Product with readonly id and optional description; create book without a description.
- [ ] **5.2:** Implement describe with an explicit presence check for description.
- [ ] **5.3:** Extend Product with a discount; create sale and implement finalPrice with rounding.
- [ ] **5.4:** Define a string dictionary, translations, and a lookup that returns string or undefined.

### B06 — Classes and inheritance (global unit 009)

- [ ] **6.1:** Implement Counter with private state, increment, and a readonly getter.
- [ ] **6.2:** Implement Rectangle using readonly constructor parameter properties and area.
- [ ] **6.3:** Implement Circle against Shape2D, including area and perimeter.
- [ ] **6.4:** Define abstract Animal behavior and a Dog subclass.

### B07 — Generic functions and indexed access (global unit 010)

- [ ] **7.1:** Implement generic identity without losing the input type.
- [ ] **7.2:** Return the first generic array element or undefined.
- [ ] **7.3:** Constrain longer to values with length and return the first argument on ties.
- [ ] **7.4:** Implement a key-constrained, property-dependent getProp.

### B08 — Discriminated unions and exhaustive handling (global unit 012)

- [ ] **8.1:** Define the tagged circle/square/rectangle Shape union.
- [ ] **8.2:** Compute area with an exhaustive discriminator switch.
- [ ] **8.3:** Implement assertNever and describeShape with an exhaustive default.
- [ ] **8.4:** Define Result<T> and unwrap the success branch or throw for its error branch.

### B10 — Unknown, predicates, and assertion functions (global unit 013)

- [ ] **10.1:** Return parsed JSON as unknown and narrow unknown before reading string length.
- [ ] **10.2:** Implement isFish with a type-predicate return contract.
- [ ] **10.3:** Implement assertIsNumber with an assertion signature and failure exception.
- [ ] **10.4:** Describe a Date, string array, or string using instanceof and Array.isArray.

### B09 — Built-in utilities and a first mapped type (global unit 015)

- [ ] **9.1:** Derive UserUpdate with Partial and apply it through an immutable update.
- [ ] **9.2:** Derive the same public-user shape independently with Pick and Omit.
- [ ] **9.3:** Map every Role to a permission list with Record and create defaultPermissions.
- [ ] **9.4:** Implement MyPartial using a mapped type rather than duplicating fields.

### B12 — Typed asynchronous code (global unit 020)

- [ ] **12.1:** Wrap setTimeout in a typed delay promise.
- [ ] **12.2:** Implement async fetchProfile using delay and an explicit Promise<Profile> result.
- [ ] **12.3:** Fetch profiles concurrently with Promise.all.
- [ ] **12.4:** Implement safeFetchProfile with success/error Result branches for valid/invalid identifiers.

### B11 — Mapped, conditional, inferred, and template types (global unit 025)

- [ ] **11.1:** Implement MyReadonly.
- [ ] **11.2:** Implement Mutable by removing readonly.
- [ ] **11.3:** Implement MyNonNullable.
- [ ] **11.4:** Implement ElementType with infer and a never fallback.
- [ ] **11.5:** Complete the EventName template-literal bonus.

## Upstream extensions and repeated topics

The complete path retains upstream extensions rather than silently dropping them. The exercise files define their exact rules.

| Unit | Additional work retained |
| --- | --- |
| E05 | Exclude the discriminator from partial filter criteria. |
| E06 | Implement a reusable typed getObjectKeys helper; evaluate its assumptions about runtime object keys. |
| E10 | Implement promisifyAll after the single-function adapter. |
| E12 | Reuse generic declaration aliases instead of duplicating signatures. |
| E14 | Refactor duplicated implementation code after completing the typing contract. |
| B11 | Complete EventName (task 11.5), labeled bonus upstream. |
| C00016 | Shift, Push, and Unshift are covered by their own rows; do not count those extras twice. |
| C09384 | Add Minimum after Maximum. |
| C00741 | After the tested sort contract, extend to 15+ digit natural numbers and floating-point inputs. |
| C26401 | Extend the tested schema subset to additionalProperties, composition, and length constraints. These need extra acceptance cases before platform grading. |
| C30178 | Preserve helpful errors on repeated elements, as required by the included bonus cases. |
| C32427 | Complete recursive and depth-controlled unboxing, already exercised by the tests. |

Repeated topics have distinct roles. B09 uses built-in utilities and builds a guided Partial; B11 introduces implementation tools; C00004/C00007/C02793 are independent utility implementations. E15 turns C00012-style accumulation into a class API. C00009 and C17973 are opposite recursive modifier transformations. C31797 and C35314 validate different Sudoku input representations and are both retained.

## Completion and checking

For every unit, read the linked prompt and all accompanying test cases, edit the starter path recorded in [sequence.json](curriculum/sequence.json), and preserve the original assertions. Follow the individual source rules on casts, any, mutation, and permitted built-ins. In early lessons, the supplied generic assertion helpers are checking machinery; implementing those helpers is not a hidden prerequisite. Passing a type check does not prove runtime arithmetic, formatting, or asynchronous behavior: also exercise the requested runtime branches for the B/E lessons. Do not use reference solutions as additional tasks.

- **B units:** the source provides `npm run check -- exercises/stageN/file.ts`; run it from `sources/typescript-training` after installing its dependencies. Check one lesson at a time; untouched lessons intentionally do not compile.
- **E units:** the source UI selects an exercise-specific virtual filesystem and compiles its index and test files. Preserve the bundled fixtures under exercise-local node_modules. For E11/E12 edit the declaration stubs; for E13 edit `module-augmentations/date-wizard/index.ts` on disk, despite the prompt/UI referring to `.d.ts`. Its package uses TypeScript `~3.7.2`; compiler upgrades are a separate migration.
- **C units:** each question has a prompt, `template.ts`, `test-cases.ts`, and metadata. A template alone is not an acceptance check. Use the source playground generator or combine the starter and test cases in an isolated workspace with the local utilities; carry over per-question compiler overrides. Avoid compiling every untouched question together, since identifiers repeat and starters are intentionally incomplete.

Before moving to a new module, explain the input/output relationship, justify the constraints, and describe at least one failing boundary case from its tests. Modules 13–17 are specialist type-system work rather than evidence of full-stack or production engineering experience. This compilation introduces no new projects and makes no claim that the upstream build environments were installed or the unsolved exercises passed.

## Why this order differs from the sources

The practical material comes first so types describe values the learner understands. TypeScript Training supplies the small guided lessons; TypeScript Exercises supplies progressively less guided application tasks; Type Challenges supplies independent implementations and specialist work. E07 moves ahead of E05/E06 because generic tuples are a simpler introduction than overload-specific filtering. B10 moves ahead of E04 so predicates are taught before they are required. E14 waits until tuple recursion and currying are available, while E15 follows fluent type accumulation. Upstream difficulty labels are preserved in the machine-readable sequence but do not dictate the order.

| Prerequisite | Later task | Reason |
| --- | --- | --- |
| B02 | B08 | never and callbacks precede exhaustive tagged-result handling. |
| B05 | B06 | interfaces precede implements. |
| B07 | B08 | generic functions precede Result<T>. |
| B10 | E04 | predicates precede reusable filter guards. |
| B09 | E05 | Partial and Omit precede partial criteria. |
| E05 | E06 | single-branch filtering precedes overloaded filtering. |
| E09 | E10 | callback response contracts precede promisification. |
| B12 | E10 | promise fundamentals precede callback adapters. |
| E11 | E12 | simple ambient declarations precede generic ones. |
| E12 | E13 | declarations precede module augmentation. |
| B11 | C00007 | mapped types precede their independent readonly implementation. |
| C19749 | C00898 | exact equality precedes membership. |
| C00007 | C00008 | full readonly precedes selective readonly. |
| C00008 | C00009 | shallow modifiers precede recursive readonly. |
| C00012 | E15 | fluent type accumulation precedes its class implementation. |
| C03192 | C03196 | tuple reversal precedes parameter reversal. |
| C05310 | C00847 | type-level joining precedes a literal-inferred join API. |
| C00017 | E14 | currying precedes the larger functional API. |
| E14 | C00462 | fixed overload practice precedes dynamic argument grouping. |
| C07544 | C07561 | tuple construction precedes tuple subtraction. |
| C00114 | C01383 | string-key conversion precedes deep key conversion. |
| C00599 | C09160 | pairwise overwrite precedes ordered variadic assignment. |
| C00270 | C00956 | path resolution precedes assembling multiple nested picks. |
| C09616 | C33345 | simple route parameters precede catch-all route inference. |
| C00476 | C00517 | decimal addition precedes decimal multiplication. |
| C00055 | C00730 | union intersections precede extracting union members into one tuple. |
| C00006 | C00213 | Vue Basic Props explicitly extends Simple Vue. |
| C00006 | C01290 | contextual this inference precedes store APIs. |
| C00553 | C00697 | type identity markers precede tag composition. |
| C27958 | C30178 | duplicate detection precedes a constrained public API. |
| C25270 | C35314 | matrix operations precede row/column Sudoku validation. |
| C00298 | C00651 | basic string counting precedes longer-string counting. |
| C00651 | C31824 | long-string design precedes multi-million-character stress cases. |

## Coverage and provenance

All 190 question directories are represented once: 1 warm-up, 13 easy, 104 medium, 55 hard, and 17 extreme. All 12 TypeScript Training exercise files and their 52 subtask markers are represented. All 15 actionable TypeScript Exercises folders are represented. Source links use the preserved repository-relative paths. No task content from the restricted fourth source is reproduced.

See [CURRICULUM_REVIEW.md](CURRICULUM_REVIEW.md) for review findings, [curriculum/file-review.json](curriculum/file-review.json) for the per-file evidence ledger, and [curriculum/sequence.json](curriculum/sequence.json) for stable identifiers, editable/test paths, source levels, and dependency edges. Licenses remain governed by [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
