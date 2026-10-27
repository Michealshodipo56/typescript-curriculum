export {};

// ============================================================
// Stage 2 — Exercise 5: Interfaces — REFERENCE SOLUTION
// ============================================================


// --- Task 5.1 — Interface with optional & readonly fields ------

interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

const book: Product = {
  id: 1,
  name: 'Thinking, Fast and Slow',
  price: 19.99,
};


// --- Task 5.2 — Work with an optional field -------------------

function describe(p: Product): string {
  if (p.description === undefined) {
    return `${p.name} ($${p.price})`;
  }
  return `${p.name} — ${p.description} ($${p.price})`;
}


// --- Task 5.3 — Interface extension ---------------------------

interface DiscountedProduct extends Product {
  discountPercent: number;
}

const sale: DiscountedProduct = {
  id: 2,
  name: 'Sapiens',
  price: 25,
  discountPercent: 20,
};

function finalPrice(p: DiscountedProduct): number {
  return Number((p.price * (1 - p.discountPercent / 100)).toFixed(2));
}


// --- Task 5.4 — Index signature -------------------------------

interface StringDictionary {
  [key: string]: string;
}

const translations: StringDictionary = {
  one: 'uno',
  two: 'due',
};

function lookup(dict: StringDictionary, key: string): string | undefined {
  return dict[key];
}


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
