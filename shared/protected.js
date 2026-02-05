import { supabase } from "./auth.js";

(async () => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    location.href = "/login.html";
  }
  const { data: { user } } = await supabase.auth.getUser();
  console.log(user); // optional

})();
