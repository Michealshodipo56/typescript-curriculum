export {};

// ============================================================
// Stage 2 — Exercise 8: Discriminated Unions — REFERENCE SOLUTION
// ============================================================


// --- Task 8.1 — Model a shape as a discriminated union --------

type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; size: number }
  | { kind: 'rectangle'; width: number; height: number };


// --- Task 8.2 — Exhaustive switch over the discriminant -------

function area(s: Shape): number {
  switch (s.kind) {
    case 'circle':
      return Math.PI * s.radius ** 2;
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.width * s.height;
  }
}


// --- Task 8.3 — The `assertNever` exhaustiveness helper -------

function assertNever(x: never): never {
  throw new Error('unreachable: ' + JSON.stringify(x));
}

function describeShape(s: Shape): string {
  switch (s.kind) {
    case 'circle':
      return `a circle of radius ${s.radius}`;
    case 'square':
      return `a square of size ${s.size}`;
    case 'rectangle':
      return `a ${s.width}×${s.height} rectangle`;
    default:
      return assertNever(s);
  }
}


// --- Task 8.4 — A Result<T> type (ok / err) -------------------

type Result<T> = { ok: true; value: T } | { ok: false; error: string };

function unwrap<T>(r: Result<T>): T {
  if (r.ok) {
    return r.value;
  }
  throw new Error(r.error);
}


// ============================================================
// Assertions — do not modify below this line.
//
// NOTE: while tasks are unsolved you may see "Unused
// '@ts-expect-error' directive" below. That's normal — those
// checks are waiting for your types to exist. They disappear
// once the exercise is complete.
// ============================================================

// ---- Shape shape ----
const _c: Shape = { kind: 'circle', radius: 3 };
const _s: Shape = { kind: 'square', size: 4 };
const _r: Shape = { kind: 'rectangle', width: 2, height: 5 };
// @ts-expect-error — unknown kind
const _bad: Shape = { kind: 'triangle', base: 3, height: 4 };
// @ts-expect-error — circle needs radius
const _noRadius: Shape = { kind: 'circle' };
// @ts-expect-error — rectangle's fields don't match square
const _mixed: Shape = { kind: 'square', width: 1, height: 1 };

// ---- area ----
const _a_num: number = area({ kind: 'circle', radius: 1 });

// ---- describeShape ----
const _d_str: string = describeShape({ kind: 'square', size: 2 });

// ---- Result<T> + unwrap ----
const okResult: Result<number> = { ok: true, value: 42 };
const errResult: Result<number> = { ok: false, error: 'nope' };
const _u: number = unwrap(okResult);
// `unwrap` must preserve the generic: string in -> string out
const _u2: string = unwrap<string>({ ok: true, value: 'hi' });

// Branches must be properly discriminated:
// @ts-expect-error — `value` must not exist on the error branch
const _v_on_err: unknown = errResult.value;
// @ts-expect-error — `error` must not exist on the ok branch
const _e_on_ok: unknown = okResult.error;
