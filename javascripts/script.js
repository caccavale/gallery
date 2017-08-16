function scrollToContent(name) {
	if(name) {
		var item = $("#" + name);
		if(item.length > 0) {
			$("html, body").animate({
				scrollTop: item.offset().top
			}, 500);
		}
		else {
			var i = indexOfName(name);
			if(i !== -1) {
				var card = createCard(i);
				$("html, body").animate({
					scrollTop: card.offset().top
				}, 500);
			}
		}
	}
}

function indexOfName(name) {
	for(var i = 0; i < gallery.length; i++) {
		if(name === gallery[i].name) {
			return i;
		}
	}
	return -1;
}

function createCard(index) {
	var item = gallery[index];
	unloadedIndices.splice(unloadedIndices.indexOf(index), 1);
	var card = '<div id="' + item.name + '" class="card"><div class="title"><h2>' + item.title + '</h2><p class="subtitle">' + item.subtitle + '</p><i class="clearfix"></i></div>';
	if(item.hasOwnProperty("galleryItems") && item.galleryItems.length > 0) {
		card += '<div class="gallery square' + Math.round(Math.sqrt(item.galleryItems.length, 2)) + '">';
		for(var i = 0; i < item.galleryItems.length; i++) {
			card += '<a href="' + item.galleryItems[i] + '" data-lightbox="' + item.name + '"><img src="' + item.galleryItems[i] + '"></a>';
		}
		card += '</div>';
	}
	else if(item.hasOwnProperty("content")) {
		card += '<p class="text">' + item.content + '</p>';
	}
	card += '</div>';

	$("#sectionContent").append(card);
	return $("#" + item.name);
}

var unloadedIndices = [];

for(var i = 0; i < gallery.length; i++) {
	$("#menu").append('<span onclick="scrollToContent(\'' + gallery[i].name + '\')">' + gallery[i].title + '</span>');
	unloadedIndices.push(i);
}

$(document).scroll(function() {
	if(unloadedIndices.length === 1) {
		$(document).off("scroll");
	}
	if($(document).height() - $(window).scrollTop() - $(window).height() < 150) {
		createCard(unloadedIndices[0]);
	}
});
