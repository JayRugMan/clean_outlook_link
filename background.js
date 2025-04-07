chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cleanLink').addEventListener('click', () => {
    const outlookLink = document.getElementById('outlookLink').value;
    const cleanedLink = cleanLink(outlookLink);
    window.open(cleanedLink, '_blank');
  });
});

function cleanLink(link) {
  return link.replace(/encapsulation-pattern/g, ''); // Adjust the regex pattern as needed
}
