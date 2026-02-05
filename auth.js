import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const supabase = createClient(
  "https://tustchcydbvipwcxeqfq.supabase.co",
  "sb_publishable_ce_C2Te3RZZKszXfn91OSA_kpUalPnB"
);

export async function signIn(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;
}

export async function signUp(email, password) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { emailRedirectTo: window.location.origin + '/dashboard.html' }
  });
  if (error) throw error;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getUser() {
  // 1️⃣ Check if there's a session
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null; // no session → no user

  // 2️⃣ Get user info
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
}

