export {};

// ============================================================
// Stage 3 — Exercise 11: Mapped & Conditional Types
//                        — REFERENCE SOLUTION
// ============================================================


// --- Task 11.1 — MyReadonly<T> -----------------------------------

type MyReadonly<T> = { readonly [K in keyof T]: T[K] };


// --- Task 11.2 — Mutable<T> (remove a modifier) -------------------

type Mutable<T> = { -readonly [K in keyof T]: T[K] };


// --- Task 11.3 — MyNonNullable<T> (conditional type) --------------

type MyNonNullable<T> = T extends null | undefined ? never : T;


// --- Task 11.4 — ElementType<T> with `infer` ----------------------

type ElementType<T> = T extends (infer E)[] ? E : never;


// --- Task 11.5 — Template literal types (bonus) --------------------

type EventName<T extends string> = `on${Capitalize<T>}`;


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// ---- MyReadonly ----
type _t1 = Expect<Equal<MyReadonly<{ a: number; b: string }>, { readonly a: number; readonly b: string }>>;
type _t2 = Expect<Equal<MyReadonly<{ a: number }>, Readonly<{ a: number }>>>;

// ---- Mutable ----
type _t3 = Expect<Equal<Mutable<{ readonly a: number; readonly b: string }>, { a: number; b: string }>>;
// round trip: freezing then thawing gives back the original
type _t4 = Expect<Equal<Mutable<MyReadonly<{ x: boolean }>>, { x: boolean }>>;

// ---- MyNonNullable ----
type _t5 = Expect<Equal<MyNonNullable<string | null | undefined>, string>>;
type _t6 = Expect<Equal<MyNonNullable<number | null>, number>>;
type _t7 = Expect<Equal<MyNonNullable<'a' | 'b' | undefined>, 'a' | 'b'>>;

// ---- ElementType ----
type _t8 = Expect<Equal<ElementType<number[]>, number>>;
type _t9 = Expect<Equal<ElementType<{ id: number }[]>, { id: number }>>;
type _t10 = Expect<Equal<ElementType<string>, never>>;

// ---- EventName ----
type _t11 = Expect<Equal<EventName<'click'>, 'onClick'>>;
type _t12 = Expect<Equal<EventName<'focus' | 'blur'>, 'onFocus' | 'onBlur'>>;
