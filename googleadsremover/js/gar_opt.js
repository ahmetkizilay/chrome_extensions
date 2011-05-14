
function loadExclusionList() {
    var excludedList = localStorage["GAR_ExcList"];
    if(excludedList && excludedList != "") {
	var excludedArray = excludedList.split("\n");
	for(var i = 0; i < excludedArray.length; i++) {
	    $('#spanExc').append("<li><a href='" + excludedArray[i] + "'>"+ excludedArray[i] + "</a><a onclick='removeUrl(" + i + ")'><img src='img/cross_16.png'/></a></li>");
	}
    }
}

function addNewUrl() {
    if($('#txtNewUrl').hasClass('empty')){
	return false;
    }

    var excludedList = localStorage["GAR_ExcList"];
    if(!excludedList) excludedList = "";
    var inputUrl = $('#txtNewUrl').val();
    if(excludedList != "") {
	excludedList += "\n";
    }

    excludedList += inputUrl;
    localStorage["GAR_ExcList"] = excludedList;
    window.location.reload();
}

function removeUrl(index) {
    var excludedList = localStorage["GAR_ExcList"];
    var newList = "";
    if(excludedList && excludedList != "") {
	var excludedArray = excludedList.split("\n");
	for(var i = 0; i < excludedArray.length; i++) {
	    if(i != index) {
		if(newList != "") newList += "\n";
		newList += excludedArray[i];
	    }
	}
    }
    
    localStorage["GAR_ExcList"] = newList;
    window.location.reload();
}

$(document).ready(function() {
    loadExclusionList();
    $('#txtNewUrl').focus(function() {
	if($(this).hasClass('empty')){
	    $(this).removeClass('empty');
	    $(this).val('');
	}
    });

    $('#txtNewUrl').blur(function(){
	if($(this).val() == '') {
	    $(this).addClass('empty');
	    $(this).val('Add Url Here');
	}
    });
});

