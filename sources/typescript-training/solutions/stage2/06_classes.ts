export {};

// ============================================================
// Stage 2 — Exercise 6: Classes — REFERENCE SOLUTION
// ============================================================


// --- Task 6.1 — private state + getter --------------------------

class Counter {
  private count = 0;

  increment(): void {
    this.count += 1;
  }

  get value(): number {
    return this.count;
  }
}


// --- Task 6.2 — Parameter properties ----------------------------

class Rectangle {
  constructor(
    public readonly width: number,
    public readonly height: number
  ) {}

  area(): number {
    return this.width * this.height;
  }
}


// --- Task 6.3 — implements an interface -------------------------

interface Shape2D {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape2D {
  constructor(public readonly radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}


// --- Task 6.4 — abstract class + inheritance --------------------

abstract class Animal {
  constructor(public name: string) {}

  abstract speak(): string;

  describe(): string {
    return `${this.name} says ${this.speak()}`;
  }
}

class Dog extends Animal {
  speak(): string {
    return 'Woof';
  }
}


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
