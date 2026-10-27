export {};

// ============================================================
// Stage 2 — Exercise 6: Classes
// ============================================================
//
// GOAL: Class members, access modifiers, parameter properties,
//       getters, `implements`, and abstract classes.
//
// Rules:
//   - No `any`, no `as`, no `!` non-null assertions.
//   - Check: npm run check -- exercises/stage2/06_classes.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// --- Task 6.1 — private state + getter --------------------------
// Write a class `Counter`:
//   - a PRIVATE field `count`, starting at 0
//   - a method `increment(): void` that adds 1
//   - a GETTER `value` that returns the current count as a number
//
// WHY: `private` hides implementation details; a getter exposes a
// read-only computed view (`c.value`, no parentheses — and it can't
// be assigned to from outside).

// TODO: your code here


// --- Task 6.2 — Parameter properties ----------------------------
// Write a class `Rectangle` whose constructor uses PARAMETER
// PROPERTIES to declare and assign in one step:
//
//   constructor(public readonly width: number,
//               public readonly height: number) {}
//
// Add a method `area(): number`.
//
// WHY: parameter properties remove the classic boilerplate of
// "declare field, take param, assign field" — one line instead
// of three per field.

// TODO: your code here


// --- Task 6.3 — implements an interface -------------------------
// Given this interface (already provided — don't change it):

interface Shape2D {
  area(): number;
  perimeter(): number;
}

// Write a class `Circle` that `implements Shape2D`:
//   - constructor takes a public readonly `radius: number`
//   - area()      -> Math.PI * radius²
//   - perimeter() -> 2 * Math.PI * radius
//
// WHY: `implements` makes the compiler verify the class satisfies
// the contract — remove a method and TS points at the class head.

// TODO: your code here


// --- Task 6.4 — abstract class + inheritance --------------------
// Write an ABSTRACT class `Animal`:
//   - constructor takes a public `name: string`
//   - an ABSTRACT method `speak(): string` (no body!)
//   - a CONCRETE method `describe(): string` returning
//     `"${name} says ${speak()}"`
//
// Then write `class Dog extends Animal` implementing
// `speak()` to return "Woof".
//
// WHY: abstract = "here's shared behavior (describe), but each
// subclass must fill in its own speak()". You can never
// instantiate `new Animal(...)` directly.

// TODO: your code here


// ============================================================
// Assertions — do not modify below this line.
//
// NOTE: while tasks are unsolved you may see "Unused
// '@ts-expect-error' directive" below. That's normal — those
// checks are waiting for your types to exist. They disappear
// once the exercise is complete.
// ============================================================

// ---- Counter ----
const counter = new Counter();
counter.increment();
counter.increment();
const _cv: number = counter.value;
// @ts-expect-error — count must be private
counter.count;
// @ts-expect-error — value is a getter, not writable from outside
counter.value = 100;

// ---- Rectangle ----
const rect = new Rectangle(3, 4);
const _ra: number = rect.area();
const _rw: number = rect.width;
// @ts-expect-error — width is readonly
rect.width = 10;

// ---- Circle ----
const circle: Shape2D = new Circle(2); // must satisfy the interface
const _ca: number = circle.area();
const _cp: number = circle.perimeter();
// @ts-expect-error — radius is a required constructor arg
new Circle();

// ---- Animal / Dog ----
const dog = new Dog('Rex');
const _dd: string = dog.describe(); // inherited from Animal
const _ds: string = dog.speak();
const _dn: string = dog.name;
// @ts-expect-error — cannot instantiate an abstract class
new Animal('Generic');
