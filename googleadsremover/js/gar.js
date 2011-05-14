chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if(info.status == "complete") {
	var tabUrl = tab.url;
	var run = false;
	chrome.tabs.get(tabId, function(tab) {
	    tabUrl = tab.url;
	});
	var storedList = localStorage["GAR_ExcList"];
	if(!storedList) storedList = "";
	var storedListArray = storedList.split("\n");
	for(var i = 0; i < storedListArray.length; i++) {
	    var ind = tabUrl.indexOf(storedListArray[i]);
	    //console.log("for " + i + " index is " + ind);
	    if(ind != -1) {
		//console.log("Running");
		run = true;
		break;
	    }
	}
	
	if(run) {
	    chrome.tabs.executeScript(tabId, { file: "js/jquery-1.6.1.min.js" }, function() {
		chrome.tabs.executeScript(tabId, { file: "js/inject.js"});
	    });
	}
	else {
	    //console.log("excluding");
	}
    }
});