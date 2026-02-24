(async function () {
  const host = document.getElementById("nav");
  if (!host) return;

  // Load nav HTML
  const res = await fetch("/shared/nav.html");
  const html = await res.text();
  host.innerHTML = html;

  const nav = host.querySelector(".xr-nav");
  const btn = host.querySelector(".xr-nav-toggle");

  // Mobile toggle
  if (nav && btn) {
    const closeNav = () => {
      nav.classList.remove("xr-open");
      btn.setAttribute("aria-expanded", "false");
    };

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = nav.classList.toggle("xr-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    host.querySelectorAll(".xr-nav-a").forEach(link => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("xr-open")) return;
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        closeNav();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeNav();
      }
    });

    window.addEventListener("resize", () => {
      closeNav();
    });
  }

  // 🔐 Auth-aware nav
  const sb = window.supabaseClient;
  if (sb) {
    const { data } = await sb.auth.getSession();
    const loggedIn = !!data.session;

    host.querySelectorAll("[data-auth='in']").forEach(el => {
      el.style.display = loggedIn ? "" : "none";
    });

    host.querySelectorAll("[data-auth='out']").forEach(el => {
      el.style.display = loggedIn ? "none" : "";
    });

    const badge = host.querySelector("#nav-notification-count");
    let badgeChannel = null;
    async function refreshNotificationBadge(userId) {
      if (!badge || !userId) return;
      const [friendCountResult, campaignCountResult] = await Promise.all([
        sb.from("friend_requests")
          .select("id", { count: "exact", head: true })
          .eq("target_user_id", userId)
          .eq("status", "pending"),
        sb.from("campaign_invites")
          .select("id", { count: "exact", head: true })
          .eq("invitee_user_id", userId)
          .eq("status", "pending")
      ]);

      if (friendCountResult.error || campaignCountResult.error) return;
      const totalCount = (friendCountResult.count || 0) + (campaignCountResult.count || 0);
      if (totalCount > 0) {
        badge.textContent = String(totalCount > 99 ? "99+" : totalCount);
        badge.classList.remove("hidden");
      } else {
        badge.textContent = "0";
        badge.classList.add("hidden");
      }
    }

    if (loggedIn && badge) {
      const userId = data.session.user.id;
      await refreshNotificationBadge(userId);
      badgeChannel = sb
        .channel(`nav-notifications-${userId}`)
        .on("postgres_changes", { event: "*", schema: "public", table: "friend_requests" }, () => refreshNotificationBadge(userId))
        .on("postgres_changes", { event: "*", schema: "public", table: "campaign_invites" }, () => refreshNotificationBadge(userId))
        .subscribe();

      window.addEventListener("beforeunload", () => {
        if (badgeChannel) {
          sb.removeChannel(badgeChannel);
        }
      });
    }

    // 🚪 Logout
    const logoutBtn = host.querySelector("#logoutBtn");
    if (logoutBtn) {
      logoutBtn.onclick = async () => {
        await sb.auth.signOut();
        window.location.href = "/login.html";
      };
    }

    if (loggedIn) {
      const { data: profile } = await sb
        .from("profiles")
        .select("username")
        .eq("id", data.session.user.id)
        .single();

      const nameEl = host.querySelector("#nav-username");
      if (nameEl && profile?.username) {
        nameEl.textContent = profile.username;
      }
    }

  }
})();
