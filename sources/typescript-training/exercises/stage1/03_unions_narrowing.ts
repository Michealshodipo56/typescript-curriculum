export {};

// ============================================================
// Stage 1 — Exercise 3: Union & Literal Types + Narrowing
// ============================================================
//
// GOAL: Use union types, literal-string unions, and learn how
//       TypeScript narrows a union inside an `if`/`switch`.
//
// Rules:
//   - No `any`, no `as`, no `!` non-null assertions.
//   - Check: npm run check -- exercises/stage1/03_unions_narrowing.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// --- Task 3.1 ---------------------------------------------------
// Declare a variable `id` whose type is "either a number OR a string".
// Assign a string to it initially.

// TODO: your code here


// --- Task 3.2 ---------------------------------------------------
// Define a type alias `Status` that allows EXACTLY one of these
// three string values: "idle", "loading", "success".
// Then declare a variable `currentStatus: Status` and set it to "idle".
//
// Hint: literal-string union — `type Foo = "a" | "b";`

// TODO: your code here


// --- Task 3.3 ---------------------------------------------------
// Write a function `formatId(id: number | string): string` that:
//   - if id is a number, returns `"#" + id.toFixed(0)`
//   - if id is a string, returns `id.trim().toUpperCase()`
//
// IMPORTANT: inside the function body you MUST narrow the union with
// `typeof`. Do NOT use `as`. TypeScript must KNOW which branch you're
// in — you should be able to call `.toFixed(0)` and `.trim()` without
// any type errors.

// TODO: your code here


// --- Task 3.4 ---------------------------------------------------
// Define a type alias `Direction` = "up" | "down" | "left" | "right".
// Then write a function `move(dir: Direction): { x: number; y: number }`
// that returns:
//   "up"    -> { x: 0,  y: 1  }
//   "down"  -> { x: 0,  y: -1 }
//   "left"  -> { x: -1, y: 0  }
//   "right" -> { x: 1,  y: 0  }
//
// Use a `switch` statement. If you handle all four cases, TS will
// be satisfied that the function always returns a value.

// TODO: your code here


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// Assignability checks for `id` — `typeof id` can't be used here because
// control-flow analysis narrows it to `string` after the initial assignment.
id = 42;               // must accept a number
id = 'another string'; // must accept a string
// @ts-expect-error — must reject anything else
id = true;

type _t2 = Expect<Equal<Status, 'idle' | 'loading' | 'success'>>;
// Assignability check: currentStatus must be a Status.
const _t3a: Status = currentStatus;
// @ts-expect-error — Status must reject values outside the union
const _t3b: Status = 'not-a-status';

type _t4 = Expect<Equal<Parameters<typeof formatId>, [id: number | string]>>;
type _t5 = Expect<Equal<ReturnType<typeof formatId>, string>>;

type _t6 = Expect<Equal<Direction, 'up' | 'down' | 'left' | 'right'>>;
type _t7 = Expect<Equal<Parameters<typeof move>, [dir: Direction]>>;
type _t8 = Expect<Equal<ReturnType<typeof move>, { x: number; y: number }>>;
