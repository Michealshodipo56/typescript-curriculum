export {};

// ============================================================
// Stage 3 — Exercise 11: Mapped & Conditional Types
// ============================================================
//
// You've USED utility types — now you'll build them. Two tools:
//
//   Mapped types:      { [K in keyof T]: ... }
//     iterate over keys, transforming each property.
//
//   Conditional types: T extends U ? X : Y
//     an if/else that runs on TYPES — and when T is a union, it
//     DISTRIBUTES over each member.
//
// Rules:
//   - No `any`.
//   - Check: npm run check -- exercises/stage3/11_mapped_conditional.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// --- Task 11.1 — MyReadonly<T> -----------------------------------
// Build `MyReadonly<T>` — like the built-in Readonly<T>: every
// property keeps its type but becomes `readonly`.
//
// Hint: put the `readonly` modifier before the `[K in keyof T]`.

// TODO: your code here


// --- Task 11.2 — Mutable<T> (remove a modifier) -------------------
// Build `Mutable<T>` — the REVERSE of Readonly: strip `readonly`
// from every property.
//
// Hint: modifiers can be REMOVED with a minus sign: `-readonly`.
// (The same trick works for optionality: `-?`.)

// TODO: your code here


// --- Task 11.3 — MyNonNullable<T> (conditional type) --------------
// Build `MyNonNullable<T>` — like the built-in NonNullable<T>:
// removes `null` and `undefined` from a union.
//
//   MyNonNullable<string | null | undefined>  -->  string
//
// Hint: `T extends null | undefined ? never : T`. Because
// conditional types DISTRIBUTE over unions, each member is tested
// separately, and `never` members vanish from the result.

// TODO: your code here


// --- Task 11.4 — ElementType<T> with `infer` ----------------------
// Build `ElementType<T>` that extracts the element type of an
// array — and produces `never` for non-arrays:
//
//   ElementType<number[]>  -->  number
//   ElementType<string>    -->  never
//
// Hint: `T extends (infer E)[] ? ... : ...` — `infer` asks the
// compiler to FIGURE OUT the type in that position and give it
// a name you can use.

// TODO: your code here


// --- Task 11.5 — Template literal types (bonus) --------------------
// Build `EventName<T>` that turns a string literal into an
// "on"-prefixed, capitalized handler name:
//
//   EventName<'click'>  -->  'onClick'
//   EventName<'focus'>  -->  'onFocus'
//
// Hint: template literal type + the built-in `Capitalize<S>`:
//   `on${Capitalize<T>}`
// You'll need to constrain T: `T extends string`.

// TODO: your code here


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
