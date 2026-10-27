export {};

// ============================================================
// Stage 3 — Exercise 10: unknown, Type Guards &
//                        Assertion Functions — REFERENCE SOLUTION
// ============================================================


// --- Task 10.1 — unknown instead of any -------------------------

function parseJson(text: string): unknown {
  return JSON.parse(text);
}

function getStringLength(value: unknown): number {
  if (typeof value === 'string') {
    return value.length;
  }
  return 0;
}


// --- Task 10.2 — Custom type guard (`x is T`) --------------------

type Fish = { kind: 'fish'; swim: () => void };
type Bird = { kind: 'bird'; fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return pet.kind === 'fish';
}


// --- Task 10.3 — Assertion function ------------------------------

function assertIsNumber(value: unknown): asserts value is number {
  if (typeof value !== 'number') {
    throw new Error('expected a number');
  }
}


// --- Task 10.4 — instanceof & Array.isArray narrowing ------------

function describeValue(value: Date | string[] | string): string {
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (Array.isArray(value)) {
    return `list of ${value.length} items`;
  }
  return value.toUpperCase();
}


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// ---- parseJson ----
type _t1 = Expect<Equal<ReturnType<typeof parseJson>, unknown>>;
// @ts-expect-error — unknown must NOT be freely usable (any would allow this)
parseJson('{}').someProperty;

// ---- getStringLength ----
const _len1: number = getStringLength('hello');
const _len2: number = getStringLength(42);     // unknown accepts anything
const _len3: number = getStringLength(null);

// ---- isFish ----
declare const pet: Fish | Bird;
if (isFish(pet)) {
  pet.swim(); // narrowed to Fish here…
} else {
  pet.fly();  // …and to Bird here. Only a type predicate makes both work.
}

// ---- assertIsNumber ----
function _assertDemo(input: unknown): number {
  assertIsNumber(input);
  return input * 2; // only compiles if `input` was narrowed to number
}

// ---- describeValue ----
const _dv1: string = describeValue(new Date());
const _dv2: string = describeValue(['a', 'b']);
const _dv3: string = describeValue('hi');
// @ts-expect-error — numbers are not part of the union
describeValue(42);
