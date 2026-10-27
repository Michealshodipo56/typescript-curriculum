export {};

// ============================================================
// Stage 3 — Exercise 12: Typing Async Code
// ============================================================
//
// GOAL: Promise<T>, async functions, Promise.all, and combining
//       async code with the Result pattern from exercise 8.
//
// Rules:
//   - No `any`, no `as`, no `!` non-null assertions.
//   - Check: npm run check -- exercises/stage3/12_async.ts
//
// When you're done, ask Claude to review this exercise.
// ============================================================


// Used by tasks 12.2–12.4. Don't change this.
interface Profile {
  id: number;
  name: string;
}


// --- Task 12.1 — Promise<void> -----------------------------------
// Write `delay(ms: number): Promise<void>` that resolves after
// `ms` milliseconds. Wrap setTimeout in a `new Promise(...)`.
//
// WHY `Promise<void>`: the promise carries no value — callers just
// `await delay(100)` for the side effect of waiting.

// TODO: your code here


// --- Task 12.2 — async functions ----------------------------------
// Write an ASYNC function `fetchProfile(id: number)` that:
//   - awaits `delay(10)` (simulating network latency)
//   - returns `{ id, name: `user-${id}` }`
//
// Annotate the return type explicitly: Promise<Profile>.
//
// WHY: an `async` function ALWAYS returns a Promise — even
// `return 42` inside one produces Promise<number>. `await`
// unwraps one layer of Promise.

// TODO: your code here


// --- Task 12.3 — Promise.all --------------------------------------
// Write `fetchProfiles(ids: number[]): Promise<Profile[]>` that
// fetches all profiles CONCURRENTLY using Promise.all + map.
//
// WHY: note the type transformation — you build a
// Promise<Profile>[] (array of promises), and Promise.all turns
// it inside-out into a Promise<Profile[]> (promise of an array).

// TODO: your code here


// --- Task 12.4 — async + Result (no exceptions) --------------------
// Reuse the Result pattern from exercise 8 (already provided):

type Result<T> = { ok: true; value: T } | { ok: false; error: string };

// Write `safeFetchProfile(id: number): Promise<Result<Profile>>`:
//   - if id > 0:  fetch the profile and return { ok: true, value }
//   - otherwise:  return { ok: false, error: 'invalid id' }
//     (do NOT throw — invalid input is a value, not an exception)
//
// WHY: async functions that never reject are far easier to call
// correctly — the compiler forces every caller to handle the
// error branch, unlike try/catch which is easy to forget.

// TODO: your code here


// ============================================================
// Assertions — do not modify below this line.
// ============================================================

type Expect<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

// ---- delay ----
type _t1 = Expect<Equal<ReturnType<typeof delay>, Promise<void>>>;

// ---- fetchProfile ----
type _t2 = Expect<Equal<ReturnType<typeof fetchProfile>, Promise<Profile>>>;
type _t3 = Expect<Equal<Awaited<ReturnType<typeof fetchProfile>>, Profile>>;

// ---- fetchProfiles ----
type _t4 = Expect<Equal<ReturnType<typeof fetchProfiles>, Promise<Profile[]>>>;

// ---- safeFetchProfile ----
type _t5 = Expect<Equal<ReturnType<typeof safeFetchProfile>, Promise<Result<Profile>>>>;

// `await` must produce the right types end to end:
async function _demo(): Promise<void> {
  await delay(1);

  const profile: Profile = await fetchProfile(1);
  const _name: string = profile.name;

  const profiles: Profile[] = await fetchProfiles([1, 2, 3]);
  const _count: number = profiles.length;

  const result = await safeFetchProfile(-1);
  if (result.ok) {
    const _p: Profile = result.value; // narrowed to the ok branch
  } else {
    const _e: string = result.error;  // narrowed to the error branch
  }
}
