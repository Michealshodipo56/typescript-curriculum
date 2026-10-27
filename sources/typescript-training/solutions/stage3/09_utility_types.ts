export {};

// ============================================================
// Stage 3 — Exercise 9: Built-in Utility Types — REFERENCE SOLUTION
// ============================================================


// Base interface — used by all tasks. Don't change this.
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}


// --- Task 9.1 — Partial<T> for updates ------------------------

type UserUpdate = Partial<User>;

function applyUpdate(user: User, update: UserUpdate): User {
  return { ...user, ...update };
}


// --- Task 9.2 — Pick & Omit -----------------------------------

type PublicUserPick = Pick<User, 'id' | 'name'>;
type PublicUserOmit = Omit<User, 'email' | 'isAdmin'>;


// --- Task 9.3 — Record<K, V> ----------------------------------

type Role = 'admin' | 'editor' | 'viewer';

type RolePermissions = Record<Role, string[]>;

const defaultPermissions: RolePermissions = {
  admin: ['read', 'write', 'delete'],
  editor: ['read', 'write'],
  viewer: ['read'],
};


// --- Task 9.4 — Build your own Partial ------------------------

type MyPartial<T> = { [K in keyof T]?: T[K] };


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
