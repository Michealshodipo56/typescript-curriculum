export {};

// ============================================================
// Stage 1 — Exercise 2: Typing Functions — REFERENCE SOLUTION
// ============================================================


// --- Task 2.1 — Function type expression -----------------------

type MathOp = (a: number, b: number) => number;

const add: MathOp = (a, b) => a + b;
const multiply: MathOp = (a, b) => a * b;


// --- Task 2.2 — Optional & default parameters ------------------

function buildUrl(path: string, query?: string): string {
  if (query === undefined) {
    return path;
  }
  return `${path}?${query}`;
}

function repeat(text: string, times = 2): string {
  return text.repeat(times);
}


// --- Task 2.3 — Rest parameters ---------------------------------

function sum(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}


// --- Task 2.4 — Callbacks & void --------------------------------

function forEachChar(
  text: string,
  callback: (char: string, index: number) => void
): void {
  for (let i = 0; i < text.length; i++) {
    callback(text[i], i);
  }
}


// --- Task 2.5 — never ------------------------------------------

function fail(message: string): never {
  throw new Error(message);
}


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
