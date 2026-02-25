const SUPABASE_URL = "https://tustchcydbvipwcxeqfq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ce_C2Te3RZZKszXfn91OSA_kpUalPnB";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    global: {
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY
      }
    }
  }
);


(function initGlobalLoadingOverlay() {
  if (window.__xrGlobalLoadingInitialized) return;
  window.__xrGlobalLoadingInitialized = true;

  let pendingCount = 0;
  let showTimer = null;
  let visibleSince = 0;
  const SHOW_DELAY_MS = 140;
  const MIN_VISIBLE_MS = 180;

  function ensureOverlay() {
    let overlay = document.getElementById('globalLoadingOverlay');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.id = 'globalLoadingOverlay';
    overlay.className = 'xr-loading-overlay hidden';
    overlay.setAttribute('aria-live', 'polite');
    overlay.setAttribute('aria-busy', 'true');
    overlay.innerHTML = '<div class="xr-loading-spinner" aria-hidden="true"></div><div id="globalLoadingOverlayText" class="mono">Loading…</div>';
    document.body.appendChild(overlay);
    return overlay;
  }

  function setText(message) {
    const text = document.getElementById('globalLoadingOverlayText');
    if (text) text.textContent = message || 'Loading…';
  }

  function showNow(message) {
    if (window.__useLocalLoadingOverlay) return;
    const overlay = ensureOverlay();
    setText(message);
    overlay.classList.remove('hidden');
    visibleSince = Date.now();
  }

  function hideNow() {
    const overlay = document.getElementById('globalLoadingOverlay');
    if (!overlay) return;
    overlay.classList.add('hidden');
    visibleSince = 0;
  }

  function begin(message = 'Loading…') {
    if (window.__useLocalLoadingOverlay) return;
    pendingCount += 1;
    if (pendingCount > 1) return;
    if (showTimer) window.clearTimeout(showTimer);
    showTimer = window.setTimeout(() => {
      showTimer = null;
      if (pendingCount > 0) showNow(message);
    }, SHOW_DELAY_MS);
  }

  function end() {
    if (window.__useLocalLoadingOverlay) return;
    pendingCount = Math.max(0, pendingCount - 1);
    if (pendingCount > 0) return;

    if (showTimer) {
      window.clearTimeout(showTimer);
      showTimer = null;
      return;
    }

    if (!visibleSince) {
      hideNow();
      return;
    }

    const elapsed = Date.now() - visibleSince;
    const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
    if (wait) {
      window.setTimeout(() => {
        if (pendingCount === 0) hideNow();
      }, wait);
    } else {
      hideNow();
    }
  }

  window.showGlobalLoading = function showGlobalLoading(message = 'Loading…') {
    begin(message);
  };

  window.hideGlobalLoading = function hideGlobalLoading() {
    end();
  };

  window.withGlobalLoading = async function withGlobalLoading(message, task) {
    begin(message || 'Loading…');
    try {
      return await task();
    } finally {
      end();
    }
  };

  const nativeFetch = window.fetch.bind(window);
  window.fetch = async function xrLoadingFetch(input, init = undefined) {
    const skipLoading = window.__useLocalLoadingOverlay || !!(init && init.xrSkipGlobalLoading);
    if (!skipLoading) begin('Loading…');
    try {
      return await nativeFetch(input, init);
    } finally {
      if (!skipLoading) end();
    }
  };
})();

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
      emailRedirectTo: "https://app.xeonrapture.com/dashboard.html"
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
