$(document).ready(function(){
    chrome.tabs.getSelected(null, function(tab) {
	$("#newTitle").val(tab.title);
	$("#newLink").val(tab.url);
    });
});
