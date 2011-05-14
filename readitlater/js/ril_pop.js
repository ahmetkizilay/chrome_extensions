function createItemArea(title, link) {
    $('#storedItems').append("<div class='item'><a href='" + link + "'>" + title + "</a><br/></div>");
}

function createItems() {
    
    var storedItems = localStorage["ReadItLater"];
    if(storedItems != "") {
	var storedList = storedItems.split('\n');
	for(var i = 0; i < storedList.length; i = i + 2) {
	    createItemArea(storedList[i], storedList[i + 1]);
	}
    }
}

$(document).ready(function(){
    chrome.tabs.getSelected(null, function(tab) {
	$("#newTitle").val(tab.title);
	$("#newLink").val(tab.url);
    });

    createItems();
});

