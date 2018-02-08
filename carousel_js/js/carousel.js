var	imgIndex = 1;

getImg(imgIndex);

function indexAdd(n) {
	getImg(imgIndex+=n);
}

function gotToImg(n) {
	getImg(imgIndex = n);
}

function getImg(n) {
	// console.log(imgIndex);
	var i;
	var image = document.getElementsByClassName("snowImages");
	var dots = document.getElementsByClassName("dot");
	if (n > image.length) {imgIndex = 1};
	if (n < 1) {imgIndex = image.length};
	for (i = 0; i < image.length; i++) {
		image[i].style.display = "none";
	};
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	};
	image[imgIndex - 1].style.display = "block";
	dots[imgIndex - 1].className += " active";
}

setInterval(function () {
	document.getElementById("next").click();
}, 5000);
