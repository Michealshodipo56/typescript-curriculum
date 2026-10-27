export {};

// ============================================================
// Stage 2 — Exercise 7: Generics (basics)
// ============================================================
//
// Generics let a function/type work with MANY types while still
// preserving the relationship between input and output types.
//
// Rules:
//   - No `any`, no `as`, no `!` non-null assertions.
//   - No type-parameter "leakage": do NOT use `unknown` or `object`
//     as a stand-in for a generic.
//   - Check: npm run check -- exercises/stage2/07_generics.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// --- Task 7.1 — Identity -------------------------------------
// Write a generic function `identity<T>(value: T): T` that
// returns exactly what it was given.
//
// WHY: the simplest generic. It's the "hello world" of generics —
// one type parameter T, same type on the way in and out.

// TODO: your code here


// --- Task 7.2 — First element of an array --------------------
// Write `first<T>(arr: T[]): T | undefined` that returns the
// first element, or `undefined` for an empty array.
//
// WHY: generic over the ELEMENT type. If you call first([1,2,3])
// you should get number | undefined — not `any | undefined`.

// TODO: your code here


// --- Task 7.3 — Generic constraint ---------------------------
// Write `longer<T extends { length: number }>(a: T, b: T): T`
// that returns whichever argument has the greater `.length`
// (ties → return `a`).
//
// WHY: without the `extends { length: number }` constraint you
// couldn't safely read `.length` off a generic T. The constraint
// tells TS "T is guaranteed to have a numeric `length`".

// TODO: your code here


// --- Task 7.4 — Indexing with keyof --------------------------
// Write `getProp<T, K extends keyof T>(obj: T, key: K): T[K]`
// that returns obj[key].
//
// WHY: when you index an object by a key, the return type should
// depend on WHICH key you asked for. This is where `keyof` and
// indexed-access types (`T[K]`) shine.

// TODO: your code here


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

// ---- identity ----
const _id_num: number = identity(5);
const _id_str: string = identity('hello');
// @ts-expect-error — returning a string can't flow into a number var
const _id_bad: number = identity('hello');

// ---- first ----
const _f_num: number | undefined = first([1, 2, 3]);
const _f_str: string | undefined = first(['a', 'b']);
// @ts-expect-error — return is `T | undefined`, not plain `T`
const _f_bad: number = first([1, 2, 3]);
// @ts-expect-error — element types must match array element type
const _f_wrong: string | undefined = first([1, 2, 3]);

// ---- longer ----
const _lg_arr: number[] = longer([1, 2], [3, 4, 5]);
const _lg_str: string = longer('hi', 'hello');
// @ts-expect-error — plain numbers don't have a `.length`
longer(1, 2);
// @ts-expect-error — T must be the SAME for both args
longer('hello', [1, 2]);

// ---- getProp ----
const obj = { a: 1, b: 'two', c: true };
const _gp_num: number = getProp(obj, 'a');
const _gp_str: string = getProp(obj, 'b');
const _gp_bool: boolean = getProp(obj, 'c');
// @ts-expect-error — "b" is a string, not a number
const _gp_mismatch: number = getProp(obj, 'b');
// @ts-expect-error — 'z' is not a key of obj
getProp(obj, 'z');
