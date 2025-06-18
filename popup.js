document.getElementById('btn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'buttonClicked' });
});