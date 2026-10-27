export {};

// ============================================================
// Stage 1 — Exercise 3: Union & Literal Types — REFERENCE SOLUTION
// ============================================================


// --- Task 3.1 ---------------------------------------------------

let id: string | number = 'abc-123';


// --- Task 3.2 ---------------------------------------------------

type Status = 'idle' | 'loading' | 'success';
let currentStatus: Status = 'idle';


// --- Task 3.3 ---------------------------------------------------

function formatId(id: number | string): string {
  if (typeof id === 'number') {
    return '#' + id.toFixed(0);
  }
  return id.trim().toUpperCase();
}


// --- Task 3.4 ---------------------------------------------------

type Direction = 'up' | 'down' | 'left' | 'right';

function move(dir: Direction): { x: number; y: number } {
  switch (dir) {
    case 'up':
      return { x: 0, y: 1 };
    case 'down':
      return { x: 0, y: -1 };
    case 'left':
      return { x: -1, y: 0 };
    case 'right':
      return { x: 1, y: 0 };
  }
}


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// Assignability checks for `id` — `typeof id` can't be used here because
// control-flow analysis narrows it to `string` after the initial assignment.
id = 42;               // must accept a number
id = 'another string'; // must accept a string
// @ts-expect-error — must reject anything else
id = true;

type _t2 = Expect<Equal<Status, 'idle' | 'loading' | 'success'>>;
// Assignability check: currentStatus must be a Status.
const _t3a: Status = currentStatus;
// @ts-expect-error — Status must reject values outside the union
const _t3b: Status = 'not-a-status';

type _t4 = Expect<Equal<Parameters<typeof formatId>, [id: number | string]>>;
type _t5 = Expect<Equal<ReturnType<typeof formatId>, string>>;

type _t6 = Expect<Equal<Direction, 'up' | 'down' | 'left' | 'right'>>;
type _t7 = Expect<Equal<Parameters<typeof move>, [dir: Direction]>>;
type _t8 = Expect<Equal<ReturnType<typeof move>, { x: number; y: number }>>;
