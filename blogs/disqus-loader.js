(function () {
  const mount = document.getElementById("disqus_thread");
  if (!mount) return;

  const config = window.ESSAY_DISQUS_CONFIG || {};

  const showFallback = (message) => {
    mount.innerHTML = "";
    const note = document.createElement("div");
    note.className = "discussion-fallback";
    note.textContent = message;
    mount.appendChild(note);
  };

  if (!config.shortname) {
    showFallback(config.fallbackText || "Disqus is ready to be enabled after a shortname is configured.");
    return;
  }

  const pageUrl = mount.dataset.pageUrl || window.location.href;
  const pageIdentifier = mount.dataset.pageIdentifier || window.location.pathname;
  const pageTitle = mount.dataset.pageTitle || document.title;

  window.disqus_config = function () {
    this.page.url = pageUrl;
    this.page.identifier = pageIdentifier;
    this.page.title = pageTitle;
  };

  const script = document.createElement("script");
  script.src = "https://" + config.shortname + ".disqus.com/embed.js";
  script.async = true;
  script.setAttribute("data-timestamp", String(+new Date()));
  (document.head || document.body).appendChild(script);
})();
