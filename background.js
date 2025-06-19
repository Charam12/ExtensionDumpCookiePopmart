chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'buttonClicked') {
    console.log(message.cookies)
  }
});