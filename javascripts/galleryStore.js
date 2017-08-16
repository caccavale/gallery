var gallery = [
	{
		name: "Apples",
		title: "Apples",
		subtitle: "16 of 36<br>A project for AP art",
		galleryItems: ["IMG_3444 e.jpg", "IMG_3450 e.jpg", "IMG_3452 e.jpg", "IMG_3454 e.jpg", "IMG_3457 e.jpg", "IMG_3461 e.jpg", "IMG_3464 e.jpg", "IMG_3465 e.jpg", "IMG_3466 e.jpg", "IMG_3467 e.jpg", "IMG_3468 e.jpg", "IMG_3469 e.jpg", "IMG_3471 e.jpg", "IMG_3486 e.jpg", "IMG_3481 e.jpg", "IMG_3474 e.jpg"]
	},
	{
		name: "Text",
		title: "Text",
		subtitle: "Subtitle",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name: "Code",
		title: "Code",
		subtitle: "js",
		content: `<pre class='prettyprint'>
function indexOfName(name) {
	for(var i = 0; i < gallery.length; i++) {
		if(name === gallery[i].name) {
			return i;
		}
	}
	return -1;
}</pre> code is done here`
	}
];
