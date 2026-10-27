export {}; // make this file a module so its identifiers don't leak globally

// ============================================================
// Stage 1 — Exercise 1: Basic Types — REFERENCE SOLUTION
// ============================================================


// --- Task 1.1 ---------------------------------------------------

const username: string = 'Ada';


// --- Task 1.2 ---------------------------------------------------

const birthYear: number = 1990;
const ageIn2026 = 2026 - birthYear;


// --- Task 1.3 ---------------------------------------------------

const hobbies = ['Football', 'Games', 'Reading'];
// Also valid: const hobbies: string[] = [...] or Array<string>


// --- Task 1.4 ---------------------------------------------------

let user: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'Ada',
  isActive: true,
};


// --- Task 1.5 ---------------------------------------------------

function greet(name: string): string {
  return `Hello, ${name}!`;
}


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type _t1 = Expect<Equal<typeof username, string>>;
type _t2 = Expect<Equal<typeof birthYear, number>>;
type _t3 = Expect<Equal<typeof ageIn2026, number>>;
type _t4 = Expect<Equal<typeof hobbies, string[]>>;
type _t5 = Expect<Equal<typeof user, { id: number; name: string; isActive: boolean }>>;
type _t6 = Expect<Equal<ReturnType<typeof greet>, string>>;
type _t7 = Expect<Equal<Parameters<typeof greet>, [name: string]>>;
