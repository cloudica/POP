$(document).ready(function() {
	
	$("a[rel='pop']").click(function() {
		
		var screenHeight = parseInt(screen.height),
			screenWidth = parseInt(screen.width),
			sidePadding = (screenWidth - 600) / 2;
			topPadding = (screenHeight - 350) / 4;
			
		if(!$("#cloudica_pop").is(":visible"))
		{
			$("body").append("<div id=\"cloudica_pop\"><a class=\"close\" href=\"javascript:close();\">Close</a><div class=\"loaded\"><p align=\"center\">Loading...</p></div></div>");
		}
		
		$("#cloudica_pop .loaded").load(this.href);
		$("#cloudica_pop").css({
			"left": sidePadding,
			"right": sidePadding,
			"top": topPadding
		}).fadeIn("slow");
		
		return false;
			
	});
	
});

function close()
{
	$("#cloudica_pop").fadeOut("slow");
	setTimeout('$("#cloudica_pop .loaded").html("<p align=\"center\">Loading...</p>");', 1000);
}
