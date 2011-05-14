function setUnreadCount() {
    var stored = localStorage["ReadItLater"];
    var storedLength = 0;
    if(!stored == "") {
	storedLength = stored.split("\n").length;
	storedLength = (storedLength) / 2;
    }
    chrome.browserAction.setBadgeText({text: String(storedLength)});
}

function saveLink() {
    var stored = localStorage["ReadItLater"];
    if(stored == "") {
	stored = "";
    }
    else {
	stored += "\n";
    }
    
    stored += $("#newTitle").val() + "\n" + $("#newLink").val();
    localStorage["ReadItLater"] = stored;

    setUnreadCount();
    window.close();
}
