export {};

// ============================================================
// Stage 1 — Exercise 4: Tuples, readonly Arrays, Enums,
//                       `as const` — REFERENCE SOLUTION
// ============================================================


// --- Task 4.1 — Tuple ------------------------------------------

type Point = [number, number];

const origin: Point = [0, 0];


// --- Task 4.2 — Working with tuples ------------------------------

function distance(a: Point, b: Point): number {
  return Math.hypot(b[0] - a[0], b[1] - a[1]);
}


// --- Task 4.3 — readonly arrays ----------------------------------

function total(prices: readonly number[]): number {
  return prices.reduce((acc, p) => acc + p, 0);
}


// --- Task 4.4 — `as const` + deriving a type from a value --------

const DIRECTIONS = ['north', 'south', 'east', 'west'] as const;

type CompassDirection = (typeof DIRECTIONS)[number];


// --- Task 4.5 — Enum ---------------------------------------------

enum LogLevel {
  Debug,
  Info,
  Warn,
  Error,
}

function shouldLog(level: LogLevel, minimum: LogLevel): boolean {
  return level >= minimum;
}


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
