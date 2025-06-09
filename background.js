chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  chrome.storage.local.get("focusActive", (data) => {
    if (data.focusActive) {
      const blocked = ["youtube.com", "facebook.com", "reddit.com"];
      if (blocked.some(site => details.url.includes(site))) {
        chrome.tabs.update(details.tabId, {
          url: "blocked.html"
        });
      }
    }
  });
});
