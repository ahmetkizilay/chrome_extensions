function setUnreadCount() {
    var stored = localStorage["ReadItLater"];
    if(!stored) stored = "";
    var storedLength = stored.split("\n").length;
    if(storedLength) {
	storedLength = (storedLength - 1) / 2;
    }
    chrome.browserAction.setBadgeText({text: String(storedLength)});
}

function saveLink() {
    var stored = localStorage["ReadItLater"];
    if(!stored) stored = "";
    stored += $("#newTitle").val() + "\n" + $("#newLink").val() + "\n";
    localStorage["ReadItLater"] = stored;

    setUnreadCount();
    window.close();
}
