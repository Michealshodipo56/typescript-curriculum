export {}; // make this file a module so its identifiers don't leak globally

// ============================================================
// Stage 1 — Exercise 1: Basic Types
// ============================================================
//
// GOAL: Practice annotating primitives, arrays, and simple objects.
//
// Rules:
//   - Do NOT use `any`.
//   - Complete each TODO below.
//   - The file must compile: npm run check -- exercises/stage1/01_basics.ts
//     (it will show errors until every task is done — that's the game)
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// --- Task 1.1 ---------------------------------------------------
// Declare a variable `username` that holds a name as a string.
// Add an explicit type annotation.

// TODO: your code here


// --- Task 1.2 ---------------------------------------------------
// Declare a constant `birthYear` that is a number.
// Then declare `ageIn2026` as a number computed from birthYear.

// TODO: your code here


// --- Task 1.3 ---------------------------------------------------
// Declare an array `hobbies` of strings with at least 3 entries.
// Use the array-of-string type (your choice of syntax).

// TODO: your code here


// --- Task 1.4 ---------------------------------------------------
// Declare an object `user` with EXACTLY these fields and types:
//   - id:        number
//   - name:      string
//   - isActive:  boolean
// Annotate the variable with an inline object type.

// TODO: your code here


// --- Task 1.5 ---------------------------------------------------
// Write a function `greet` that takes a string `name` and returns
// a string like "Hello, Alice!". Annotate BOTH the parameter and
// the return type.

// TODO: your code here


// ============================================================
// Assertions — do not modify below this line.
// These use TypeScript's type system to check your work.
// When the file compiles with zero errors, you passed.
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
