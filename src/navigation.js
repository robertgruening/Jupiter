function GetDatabaseName() {
	return "jupiter";
}

function GetPageUrl(pageName) {
	return "http://localhost:5984/" + GetDatabaseName() + "/app/" + pageName + ".html";
}

function LoadNavigation(activePageName) {
	var navigationElements = new Array();
	navigationElements.push("Elemente");
	navigationElements.push("Element");
	navigationElements.push("Formular");
	navigationElements.push("Import");
	navigationElements.push("Export");
	
	$("#navigation").append("<ul></ul>");
	
	for (var i = 0; i < navigationElements.length; i++)
	{	
		$("#navigation ul").append("<li><a href='" + GetPageUrl(navigationElements[i]) + "' title=" + navigationElements[i] + ">" + navigationElements[i] + "</a></li>");
	}
	
	$("#navigation ul li a[title='" + activePageName + "']").addClass("active");
}
