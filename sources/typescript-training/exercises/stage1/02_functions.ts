export {};

// ============================================================
// Stage 1 — Exercise 2: Typing Functions
// ============================================================
//
// GOAL: Function type expressions, optional/default/rest
//       parameters, `void`, and `never`.
//
// Rules:
//   - No `any`, no `as`, no `!` non-null assertions.
//   - Check: npm run check -- exercises/stage1/02_functions.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// --- Task 2.1 — Function type expression -----------------------
// Define a type alias `MathOp` describing a function that takes
// two numbers and returns a number:
//
//   type MathOp = (a: number, b: number) => number;
//
// Then declare TWO consts of that type: `add` and `multiply`,
// implemented as arrow functions. Note that you don't need to
// annotate the parameters again — the type alias does it for you.

// TODO: your code here


// --- Task 2.2 — Optional & default parameters ------------------
// Write `buildUrl(path: string, query?: string): string`:
//   - without query -> returns path unchanged
//   - with query    -> returns `${path}?${query}`
//   You MUST check for the optional param — no `!`.
//
// Then write `repeat(text: string, times = 2): string` that
// repeats `text` that many times (Hint: String.prototype.repeat).
// `times` should have a DEFAULT value of 2, so `repeat("ab")`
// returns "abab".

// TODO: your code here


// --- Task 2.3 — Rest parameters ---------------------------------
// Write `sum(...nums: number[]): number` that adds up all the
// numbers it receives. `sum()` with no arguments returns 0.
// (Hint: Array.prototype.reduce.)

// TODO: your code here


// --- Task 2.4 — Callbacks & void --------------------------------
// Write `forEachChar(text: string, callback: (char: string,
// index: number) => void): void` that calls the callback once per
// character of `text`.
//
// WHY `void`: it tells the caller "I don't care what your callback
// returns" — the classic type for event handlers and iterators.

// TODO: your code here


// --- Task 2.5 — never ------------------------------------------
// Write `fail(message: string): never` that ALWAYS throws
// `new Error(message)`.
//
// WHY `never`: the return type of a function that can't return at
// all. TypeScript uses it to understand unreachable code — you'll
// meet it again with exhaustive switches in exercise 8.

// TODO: your code here


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// ---- MathOp / add / multiply ----
type _t1 = Expect<Equal<MathOp, (a: number, b: number) => number>>;
const _add: MathOp = add;
const _mul: MathOp = multiply;
const _six: number = add(2, multiply(2, 2));
// @ts-expect-error — MathOp takes numbers, not strings
add('2', '3');

// ---- buildUrl ----
const _u1: string = buildUrl('/users');
const _u2: string = buildUrl('/users', 'page=2');
// @ts-expect-error — path is required
buildUrl();

// ---- repeat ----
const _r1: string = repeat('ab');       // default kicks in
const _r2: string = repeat('ab', 3);
// @ts-expect-error — times must be a number
repeat('ab', '3');

// ---- sum ----
const _s0: number = sum();
const _s3: number = sum(1, 2, 3);
// @ts-expect-error — only numbers allowed
sum(1, 'two', 3);

// ---- forEachChar ----
type _t2 = Expect<Equal<ReturnType<typeof forEachChar>, void>>;
forEachChar('hi', (char, index) => {
  const _c: string = char;   // callback param types must flow in
  const _i: number = index;
});

// ---- fail ----
type _t3 = Expect<Equal<ReturnType<typeof fail>, never>>;
function _unreachableDemo(x: number): number {
  if (x > 0) return x;
  fail('x must be positive');
  // no return needed here — TS knows fail() never comes back
}
