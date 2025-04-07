chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

chrome.action.onClicked.addListener(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: cleanLink,
  });
});

function cleanLink() {
  navigator.clipboard.readText().then(text => {
    const cleanedLink = text.replace(/encapsulation-pattern/g, ''); // Adjust the regex pattern as needed
    navigator.clipboard.writeText(cleanedLink).then(() => {
      alert('Link cleaned and copied to clipboard!');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cleanLink').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'cleanLink' });
  });
});
