export {};

// ============================================================
// Stage 3 — Exercise 10: unknown, Type Guards &
//                        Assertion Functions
// ============================================================
//
// `any` switches the type checker OFF. `unknown` is its safe
// sibling: it accepts every value, but you can't USE it until
// you've narrowed it. This exercise is about the tools for
// narrowing: typeof/instanceof checks, custom type guards
// (`x is T`), and assertion functions (`asserts x is T`).
//
// Rules:
//   - No `any`, no `as`, no `!` non-null assertions.
//   - Check: npm run check -- exercises/stage3/10_type_guards.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// --- Task 10.1 — unknown instead of any -------------------------
// Write `parseJson(text: string): unknown` that returns
// JSON.parse(text) — but with the return type `unknown`, NOT the
// `any` that JSON.parse gives you.
//
// Then write `getStringLength(value: unknown): number`:
//   - if value is a string, return its length
//   - otherwise return 0
// You must narrow with `typeof` — with `unknown` the compiler
// FORCES you to check before touching the value. That's the point.

// TODO: your code here


// --- Task 10.2 — Custom type guard (`x is T`) --------------------
// Given these two types (already provided — don't change them):

type Fish = { kind: 'fish'; swim: () => void };
type Bird = { kind: 'bird'; fly: () => void };

// Write a function `isFish(pet: Fish | Bird): pet is Fish`.
//
// WHY the `pet is Fish` return type: a plain `boolean` return
// tells the compiler nothing. The type predicate lets your check
// TRAVEL — `if (isFish(p))` narrows `p` at every call site.

// TODO: your code here


// --- Task 10.3 — Assertion function ------------------------------
// Write:
//   function assertIsNumber(value: unknown): asserts value is number
// that throws `new Error('expected a number')` when `value` is
// not a number, and returns normally otherwise.
//
// WHY: after calling `assertIsNumber(x)`, the compiler knows `x`
// is a number for the REST of the scope — perfect for validating
// inputs at a boundary once, instead of checking everywhere.

// TODO: your code here


// --- Task 10.4 — instanceof & Array.isArray narrowing ------------
// Write `describeValue(value: Date | string[] | string): string`:
//   - Date     -> its ISO string        (value.toISOString())
//   - string[] -> `"list of ${length} items"`
//   - string   -> the string itself, uppercased
//
// Narrow with `instanceof Date` and `Array.isArray(...)` — after
// those two checks, TS knows the rest must be a string.

// TODO: your code here


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// ---- parseJson ----
type _t1 = Expect<Equal<ReturnType<typeof parseJson>, unknown>>;
// @ts-expect-error — unknown must NOT be freely usable (any would allow this)
parseJson('{}').someProperty;

// ---- getStringLength ----
const _len1: number = getStringLength('hello');
const _len2: number = getStringLength(42);     // unknown accepts anything
const _len3: number = getStringLength(null);

// ---- isFish ----
declare const pet: Fish | Bird;
if (isFish(pet)) {
  pet.swim(); // narrowed to Fish here…
} else {
  pet.fly();  // …and to Bird here. Only a type predicate makes both work.
}

// ---- assertIsNumber ----
function _assertDemo(input: unknown): number {
  assertIsNumber(input);
  return input * 2; // only compiles if `input` was narrowed to number
}

// ---- describeValue ----
const _dv1: string = describeValue(new Date());
const _dv2: string = describeValue(['a', 'b']);
const _dv3: string = describeValue('hi');
// @ts-expect-error — numbers are not part of the union
describeValue(42);
