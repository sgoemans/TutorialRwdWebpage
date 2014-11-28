var btn = document.getElementById('button');
var toggle = true;
btn.addEventListener("click", function() {
	if(toggle) {
		document.getElementById("title").setAttribute("class", "invisible");
		toggle = false;
	} else {
		document.getElementById("title").removeAttribute("class");
		toggle = true;
	}
});
