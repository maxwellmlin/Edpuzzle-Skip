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
        redirectUrl: "https://rawcdn.githack.com/maxwellmlin/edpuzzle-skip/1270d3c10875bfbb9b8d76e4d5e53694b1dc3c92/app.js"
      }
    }
  }, {
    urls: ["*://assets.edpuzzle.com/app/app*.js"]
  },
  ["blocking"]);