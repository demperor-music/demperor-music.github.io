
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	var topbars = document.getElementsByClassName("topbar");
	for (var i = 0; i < topbars.length; ++i) {
		var topbar = topbars[i];
		if (prevScrollpos > currentScrollPos) {
			topbar.style.top = "0";
		} else {
			topbar.style.top = "-50px";
		}
		prevScrollpos = currentScrollPos;		
	}
}

function sidebar() {
	const hamburger = document.querySelector('.hamburger');
	const topbar = document.querySelector('.topbar');

	if (hamburger.innerHTML == "≡") {
		hamburger.innerHTML = "←";
		topbar.setAttribute('style','animation: sidebar-show 0.2s ease-in both;');
	} else if (hamburger.innerHTML == "←") {
		hamburger.innerHTML = "≡";
		topbar.setAttribute('style', 'animation: sidebar-hide 0.2s ease-out both;');
	}
}
