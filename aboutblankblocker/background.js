chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url === 'about:blank') {
    chrome.tabs.remove(tabId);
  }
});
