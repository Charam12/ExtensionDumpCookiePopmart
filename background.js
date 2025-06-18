chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'buttonClicked') {
    chrome.cookies.getAll({ domain: "popmartth.rocket-booking.app" }, function(cookies) {
        console.log("Cookies: ", cookies);
    });
  }
});