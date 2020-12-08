$(document).ready(function() {
	// Get photos from Flickr
	// $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	// {
	// 	format: "json",
	// 	tagmode: "any",
	// 	tags: "abstract"
	// }).done(function(data) {
	// 	var wrap = $("#serviceItems");
	// 	$.each(data.items, function(index, item) {
	// 		$("<a />").attr("href", item.link).addClass("item").css("background-image", "url(" + item.media.m + ")").appendTo(wrap);
	// 	});
	// }).always(function() {
	// 	initDiamonds($("#diamondsControls"), $("#serviceItems"));
	// 	initControls($("#diamondsControls"), $("#serviceItems"));
	// });

	setTimeout(() => {
		makeServiceTiles("serviceItems");
	}, 0);
	var makeServiceTiles = (id)=>{
		var wrap = $("#"+id);
		$("<a />").text("SCHOOL").addClass("item").css("background-color", "blue").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		$("<a />").addClass("item").css("background-image", "url(1.png)").appendTo(wrap);
		
		initDiamonds($("#diamondsControls"), $("#serviceItems"));	
	   	initControls($("#diamondsControls"), $("#serviceItems"));
	}
	var initDiamonds = function(form, wrap) {
		$(wrap).diamonds({
			size: 250, // Size of the squares
			gap: 2 // Pixels between squares
		});
	};

	var initControls = function(form, wrap) {
		$("[name]", form).each(function(index, input) {
			$(input).on("change", function(e) {
				initDiamonds(form, wrap);
			});
		});				
	}
	
});