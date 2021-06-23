// Enable extension on install
let enabled = true

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    enabled
  });
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if ("enabled" in changes) {
    enabled = changes.enabled.newValue
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (!enabled) {
      return {
        redirectUrl: details.url
      }
    }
    if (enabled) {
      return {
        redirectUrl: "https://raw.githack.com/maxwellmlin/edpuzzle-skip/main/app.js"
      }
    }
  }, {
    urls: ["*://assets.edpuzzle.com/app/app*.js"]
  },
  ["blocking"]);