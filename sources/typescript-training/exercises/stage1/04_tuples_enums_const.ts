export {};

// ============================================================
// Stage 1 — Exercise 4: Tuples, readonly Arrays, Enums,
//                       `as const`
// ============================================================
//
// GOAL: Fixed-length arrays (tuples), immutability at the type
//       level, enums, and deriving types FROM values.
//
// Rules:
//   - No `any`, no `!`. The ONLY `as` allowed is `as const`
//     (it's not a cast — it just makes literals immutable).
//   - Check: npm run check -- exercises/stage1/04_tuples_enums_const.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// --- Task 4.1 — Tuple ------------------------------------------
// Define a type alias `Point` for a tuple of exactly two numbers
// (x and y). Then declare `origin: Point` as [0, 0].
//
// WHY: unlike number[], a tuple fixes the LENGTH and the type of
// each position — [1, 2, 3] must not be a valid Point.

// TODO: your code here


// --- Task 4.2 — Working with tuples ------------------------------
// Write `distance(a: Point, b: Point): number` returning the
// Euclidean distance between the two points.
// (Hint: Math.hypot(dx, dy) or Math.sqrt.)

// TODO: your code here


// --- Task 4.3 — readonly arrays ----------------------------------
// Write `total(prices: readonly number[]): number` that sums the
// array WITHOUT modifying it.
//
// WHY `readonly number[]`: the caller can pass an immutable array,
// and inside the function TS forbids push/pop/sort — a promise to
// your caller that you won't mutate their data.

// TODO: your code here


// --- Task 4.4 — `as const` + deriving a type from a value --------
// Declare:
//   const DIRECTIONS = ['north', 'south', 'east', 'west'] as const;
//
// Then derive a type from it:
//   type CompassDirection = (typeof DIRECTIONS)[number];
//
// WHY: ONE source of truth. The value exists for runtime (looping,
// validation), and the type is computed from it — add a direction
// to the array and the type updates automatically.

// TODO: your code here


// --- Task 4.5 — Enum ---------------------------------------------
// Define a numeric enum `LogLevel` with members, in this order:
//   Debug, Info, Warn, Error     (auto-numbered 0..3)
//
// Then write `shouldLog(level: LogLevel, minimum: LogLevel): boolean`
// that returns true when `level` is at or above `minimum`.
// (Numeric enum members can be compared with >=.)

// TODO: your code here


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// ---- Point / origin ----
type _t1 = Expect<Equal<Point, [number, number]>>;
const _o: Point = origin;
// @ts-expect-error — a tuple fixes the length: 3 elements must be rejected
const _p3: Point = [1, 2, 3];
// @ts-expect-error — both positions must be numbers
const _ps: Point = [1, 'two'];

// ---- distance ----
const _d: number = distance([0, 0], [3, 4]);
// @ts-expect-error — plain number[] has unknown length, not a valid Point
distance([0, 0], [1, 2, 3]);

// ---- total ----
const _sum1: number = total([1, 2, 3]);
const frozenPrices: readonly number[] = [9.99, 19.99];
const _sum2: number = total(frozenPrices); // must accept a readonly array

// ---- DIRECTIONS / CompassDirection ----
type _t2 = Expect<Equal<CompassDirection, 'north' | 'south' | 'east' | 'west'>>;
const _c1: CompassDirection = 'north';
// @ts-expect-error — not a member of DIRECTIONS
const _c2: CompassDirection = 'up';
// @ts-expect-error — `as const` must make the array readonly
DIRECTIONS.push('up');

// ---- LogLevel / shouldLog ----
const _b1: boolean = shouldLog(LogLevel.Error, LogLevel.Warn);
const _b2: boolean = shouldLog(LogLevel.Debug, LogLevel.Info);
// @ts-expect-error — 99 is not a LogLevel member
shouldLog(99, LogLevel.Warn);
type _t3 = Expect<Equal<ReturnType<typeof shouldLog>, boolean>>;
