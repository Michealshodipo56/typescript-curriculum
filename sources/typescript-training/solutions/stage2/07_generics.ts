export {};

// ============================================================
// Stage 2 — Exercise 7: Generics (basics) — REFERENCE SOLUTION
// ============================================================


// --- Task 7.1 — Identity -------------------------------------

function identity<T>(value: T): T {
  return value;
}


// --- Task 7.2 — First element of an array --------------------

function first<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}


// --- Task 7.3 — Generic constraint ---------------------------

function longer<T extends { length: number }>(a: T, b: T): T {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}


// --- Task 7.4 — Indexing with keyof --------------------------

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}


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
