export {};

// ============================================================
// Stage 2 — Exercise 5: Interfaces, Optional & Readonly,
//                       Interface Extension, Index Signatures
// ============================================================
//
// Rules:
//   - No `any`, no `as`, no `!` non-null assertions.
//   - Shape the data using `interface` (not `type`) unless the
//     task explicitly says otherwise — you'll compare them later.
//   - Check: npm run check -- exercises/stage2/05_interfaces.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// --- Task 5.1 — Interface with optional & readonly fields ------
// Define an interface `Product` with EXACTLY these members:
//   - readonly id:  number    // must not be reassignable
//   - name:         string
//   - price:        number
//   - description?: string    // optional
//
// Then create a value `book: Product` with:
//   id: 1, name: "Thinking, Fast and Slow", price: 19.99
//   (do NOT provide a description — it's optional)

// TODO: your code here


// --- Task 5.2 — Work with an optional field -------------------
// Write a function `describe(p: Product): string` that:
//   - returns `"${name} ($${price})"` when description is missing
//   - returns `"${name} — ${description} ($${price})"` when present
//
// You MUST check for the presence of `description` — no `!`, no `as`.

// TODO: your code here


// --- Task 5.3 — Interface extension ---------------------------
// Define an interface `DiscountedProduct` that `extends Product`
// and adds:
//   - discountPercent: number    // e.g. 15 means 15% off
//
// Then create a value `sale: DiscountedProduct`:
//   id: 2, name: "Sapiens", price: 25, discountPercent: 20
//
// Then write a function `finalPrice(p: DiscountedProduct): number`
// that returns the price after discount (rounded to 2 decimals
// using Number(x.toFixed(2))).

// TODO: your code here


// --- Task 5.4 — Index signature -------------------------------
// Define an interface `StringDictionary` whose shape is
// "any string key maps to a string value".
//
// Then create a value `translations: StringDictionary` with at
// least two entries (your choice of keys/values).
//
// Finally, write a function `lookup(dict: StringDictionary,
// key: string): string | undefined` that returns dict[key].
// Notice that TS will tell you the return must include `undefined`
// — that's the safety you want with index signatures.

// TODO: your code here


// ============================================================
// Assertions — do not modify below this line.
//
// NOTE: while tasks are unsolved you may see "Unused
// '@ts-expect-error' directive" below. That's normal — those
// checks are waiting for your types to exist. They disappear
// once the exercise is complete.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// ---- Product shape ----
// @ts-expect-error — description must be a string, not a number
const _p1: Product = { id: 1, name: 'x', price: 1, description: 42 };
// @ts-expect-error — missing required `name`
const _p2: Product = { id: 1, price: 1 };
// valid minimal product (no description — it must be optional)
const _p3: Product = { id: 1, name: 'x', price: 1 };
// valid with description
const _p4: Product = { id: 1, name: 'x', price: 1, description: 'hi' };
// `id` must be readonly
// @ts-expect-error
_p3.id = 99;

// `book` must be a Product
const _bookCheck: Product = book;

// ---- describe signature ----
type _t1 = Expect<Equal<Parameters<typeof describe>, [p: Product]>>;
type _t2 = Expect<Equal<ReturnType<typeof describe>, string>>;

// ---- DiscountedProduct extension ----
const _salePlusProduct: Product = sale; // DiscountedProduct must be assignable to Product
// @ts-expect-error — missing discountPercent
const _dp1: DiscountedProduct = { id: 1, name: 'x', price: 1 };

// ---- finalPrice signature ----
type _t3 = Expect<Equal<Parameters<typeof finalPrice>, [p: DiscountedProduct]>>;
type _t4 = Expect<Equal<ReturnType<typeof finalPrice>, number>>;

// ---- StringDictionary ----
const _sd1: StringDictionary = { a: 'alpha', b: 'beta' };
// @ts-expect-error — value must be string, not number
const _sd2: StringDictionary = { a: 1 };
const _trCheck: StringDictionary = translations;

// lookup return type MUST include undefined
type _t5 = Expect<Equal<ReturnType<typeof lookup>, string | undefined>>;
