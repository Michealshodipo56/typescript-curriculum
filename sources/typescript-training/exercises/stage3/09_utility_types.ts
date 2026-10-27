export {};

// ============================================================
// Stage 3 — Exercise 9: Built-in Utility Types
// ============================================================
//
// TypeScript ships a rich library of "utility types" that
// transform existing types. They eliminate huge amounts of
// duplication. The most important ones:
//
//   Partial<T>   — every field becomes optional
//   Required<T>  — every field becomes required
//   Pick<T, K>   — keep only the listed keys
//   Omit<T, K>   — remove the listed keys
//   Record<K, V> — build an object type from a key union
//
// Plus the inference utilities you've already met:
//   ReturnType<F>, Parameters<F>
//
// Rules:
//   - No `any`, no `as`, no `!`.
//   - Build your types FROM the base interface — don't redeclare
//     fields by hand. That's the whole point of utility types.
//   - Check: npm run check -- exercises/stage3/09_utility_types.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// Base interface — used by all tasks. Don't change this.
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}


// --- Task 9.1 — Partial<T> for updates ------------------------
// Define a type alias `UserUpdate` that has the same fields
// as `User`, but ALL OPTIONAL.
//
// Then write a function:
//   function applyUpdate(user: User, update: UserUpdate): User
// that returns a NEW user object with the update merged in.
// (Hint: object spread.)
//
// You must derive `UserUpdate` from `User` using `Partial`.
// Do NOT redeclare the fields by hand.

// TODO: your code here


// --- Task 9.2 — Pick & Omit -----------------------------------
// `PublicUser` should contain ONLY the fields a frontend would
// receive — everything except `email` and `isAdmin`.
//
// Build it TWO ways:
//   - `PublicUserPick` using Pick<User, ...>
//   - `PublicUserOmit` using Omit<User, ...>
//
// They must end up identical. Both contain only `id` and `name`.

// TODO: your code here


// --- Task 9.3 — Record<K, V> ----------------------------------
// Define a literal-string union:
//   type Role = 'admin' | 'editor' | 'viewer';
//
// Then build `RolePermissions` such that every Role maps to a
// `string[]` (an array of permission strings).
//
// Use `Record<...>`. Don't write each role by hand.
//
// Then create a value `defaultPermissions: RolePermissions`:
//   admin   -> ['read', 'write', 'delete']
//   editor  -> ['read', 'write']
//   viewer  -> ['read']

// TODO: your code here


// --- Task 9.4 — Build your own Partial ------------------------
// Now we step into MAPPED TYPES. Define `MyPartial<T>` from
// scratch — it should produce the SAME thing as TS's built-in
// `Partial<T>`.
//
// Use the mapped type syntax:
//   type MyType<T> = { [K in keyof T]?: T[K] };
//
// `keyof T` is the union of T's keys. `[K in keyof T]` iterates
// over every key. Adding `?` makes that key optional. `T[K]` is
// the indexed-access type — the type of T's value at key K.
//
// You wrote `getProp` in Exercise 7 using exactly the same
// `T[K]` pattern. Now you're using it to construct a TYPE.

// TODO: your code here


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// ---- Task 9.1: UserUpdate + applyUpdate ----
type _t1 = Expect<Equal<UserUpdate, Partial<User>>>;
// applyUpdate accepts an empty patch
const _u1: User = applyUpdate(
  { id: 1, name: 'a', email: 'a@b.c', isAdmin: false },
  {}
);
// applyUpdate accepts a partial patch
const _u2: User = applyUpdate(
  { id: 1, name: 'a', email: 'a@b.c', isAdmin: false },
  { name: 'b' }
);
// @ts-expect-error — unknown field in patch
applyUpdate({ id: 1, name: 'a', email: 'a@b.c', isAdmin: false }, { nickname: 'foo' });

// ---- Task 9.2: Pick / Omit must agree ----
type _t2 = Expect<Equal<PublicUserPick, { id: number; name: string }>>;
type _t3 = Expect<Equal<PublicUserOmit, PublicUserPick>>;

// ---- Task 9.3: Record ----
type _t4 = Expect<Equal<RolePermissions, Record<'admin' | 'editor' | 'viewer', string[]>>>;
const _rp: RolePermissions = defaultPermissions;
// @ts-expect-error — unknown role key
const _rp_bad: RolePermissions = { admin: [], editor: [], viewer: [], spy: [] };
// @ts-expect-error — values must be string[]
const _rp_wrong: RolePermissions = { admin: 1, editor: 2, viewer: 3 };

// ---- Task 9.4: MyPartial must match Partial ----
type _t5 = Expect<Equal<MyPartial<User>, Partial<User>>>;
type _t6 = Expect<Equal<MyPartial<{ a: number; b: string }>, { a?: number; b?: string }>>;
