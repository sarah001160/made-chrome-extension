// 自動注入 JS
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // 網址要跟manifest.json內的 "host_permissions": ["https://law.moj.gov.tw/"] 一樣
  if (changeInfo.status === 'complete' && tab.url.includes("https://law.moj.gov.tw/")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"]
    });
  }
});
