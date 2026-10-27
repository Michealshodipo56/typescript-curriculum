export {};

// ============================================================
// Stage 3 — Exercise 12: Typing Async Code — REFERENCE SOLUTION
// ============================================================


// Used by tasks 12.2–12.4. Don't change this.
interface Profile {
  id: number;
  name: string;
}


// --- Task 12.1 — Promise<void> -----------------------------------

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


// --- Task 12.2 — async functions ----------------------------------

async function fetchProfile(id: number): Promise<Profile> {
  await delay(10);
  return { id, name: `user-${id}` };
}


// --- Task 12.3 — Promise.all --------------------------------------

function fetchProfiles(ids: number[]): Promise<Profile[]> {
  return Promise.all(ids.map((id) => fetchProfile(id)));
}


// --- Task 12.4 — async + Result (no exceptions) --------------------

type Result<T> = { ok: true; value: T } | { ok: false; error: string };

async function safeFetchProfile(id: number): Promise<Result<Profile>> {
  if (id > 0) {
    const profile = await fetchProfile(id);
    return { ok: true, value: profile };
  }
  return { ok: false, error: 'invalid id' };
}


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
