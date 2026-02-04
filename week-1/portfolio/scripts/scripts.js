const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", function () {
	const currentTheme = document.documentElement.dataset.theme;
	let newTheme; 
	if (currentTheme === "dark") {
		newTheme = "light";
	} else {
		newTheme = "dark";
	}
	document.documentElement.dataset.theme = newTheme;
});
