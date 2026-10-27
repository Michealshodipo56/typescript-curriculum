export {};

// ============================================================
// Stage 2 — Exercise 8: Discriminated Unions + Exhaustiveness
// ============================================================
//
// A "discriminated union" (aka tagged union, sum type) is a union
// where every member has a COMMON literal field — the "tag" or
// "discriminant". TypeScript uses that tag to narrow automatically:
//
//   type Animal = { kind: 'cat'; purrs: boolean }
//               | { kind: 'dog'; barks: boolean };
//
//   if (a.kind === 'cat') { a.purrs; /* narrowed to Cat */ }
//
// This is the #1 pattern for modeling state machines, API results,
// parser ASTs, Redux actions, and most domain logic.
//
// Rules:
//   - No `any`, no `as`, no `!` non-null assertions.
//   - You must rely on DISCRIMINANT narrowing — do not use
//     `instanceof` or property probes like `'radius' in s`.
//   - Check: npm run check -- exercises/stage2/08_discriminated_unions.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// --- Task 8.1 — Model a shape as a discriminated union --------
// Define a type alias `Shape` that is a union of three members:
//
//   Circle:    { kind: 'circle';    radius: number }
//   Square:    { kind: 'square';    size: number }
//   Rectangle: { kind: 'rectangle'; width: number; height: number }
//
// `kind` is the discriminant. The literal string values are
// what TypeScript uses to narrow.

// TODO: your code here


// --- Task 8.2 — Exhaustive switch over the discriminant -------
// Write `area(s: Shape): number` that returns the area:
//   circle    -> Math.PI * radius^2
//   square    -> size * size
//   rectangle -> width * height
//
// Use a `switch (s.kind)`. If you handle all 3 kinds, TS will
// confirm every path returns a number — no trailing fallback
// needed.

// TODO: your code here


// --- Task 8.3 — The `assertNever` exhaustiveness helper -------
// Write a function:
//
//   function assertNever(x: never): never {
//     throw new Error('unreachable: ' + JSON.stringify(x));
//   }
//
// Then write `describeShape(s: Shape): string` that:
//   circle    -> `"a circle of radius ${radius}"`
//   square    -> `"a square of size ${size}"`
//   rectangle -> `"a ${width}×${height} rectangle"`
//
// Use a switch with an exhaustive `default: return assertNever(s);`
//
// WHY: if a future teammate adds a new shape (say Triangle) but
// forgets to update this switch, `s` in the default will no longer
// be `never` — `assertNever` will emit a compile-time error pointing
// at this function. This is how TS protects you against drift.

// TODO: your code here


// --- Task 8.4 — A Result<T> type (ok / err) -------------------
// Define a GENERIC discriminated union:
//
//   Result<T> = { ok: true;  value: T }
//             | { ok: false; error: string };
//
// Then write `unwrap<T>(r: Result<T>): T` that:
//   - if r.ok, returns r.value
//   - otherwise throws new Error(r.error)
//
// No `as`. TypeScript must narrow `r` for you so `r.value` and
// `r.error` are each only accessible on the correct branch.

// TODO: your code here


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
