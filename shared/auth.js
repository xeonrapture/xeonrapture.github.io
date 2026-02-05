window.supabaseClient = window.supabase.createClient(
  "https://tustchcydbvipwcxeqfq.supabase.co",
  "sb_publishable_ce_C2Te3RZZKszXfn91OSA_kpUalPnB"
);

async function signIn(email, password) {
  const { error } = await window.supabaseClient.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;
}

/*
async function signUp(email, password) {
  const { error } = await window.supabaseClient.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: window.location.origin + "/dashboard.html"
    }
  });
  if (error) throw error;
}*/

async function signUp(email, password) {
  const { data, error } = await window.supabaseClient.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://xeonrapture.github.io/dashboard.html"
    }
  });

  console.log("Signup response:", data, error);

  if (error) throw error;
}


async function signOut() {
  await window.supabaseClient.auth.signOut();
}

async function getUser() {
  const { data: { session } } =
    await window.supabaseClient.auth.getSession();

  if (!session) return null;

  const { data: { user }, error } =
    await window.supabaseClient.auth.getUser();

  if (error) throw error;
  return user;
}
