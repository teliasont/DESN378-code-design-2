const themeToggle = document.querySelector(".theme-toggle");

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}


themeToggle.addEventListener("click", function () {
	const currentTheme = document.documentElement.dataset.theme;
	let newTheme; 
	if (currentTheme === "dark") {
		newTheme = "light";
	} else {
		newTheme = "dark";
	}
	document.documentElement.dataset.theme = newTheme;
	localStorage.setItem('theme', newTheme);
});




/*
const motionToggle = document.querySelector(".motion-toggle");
const savedMotionPreference = localStorage.getItem('motionPreference');

if (savedMotionPreference) {
  document.documentElement.dataset.theme = savedMotionPreference;
}

motionToggle.addEventListener("click", function () {
	const currentMotionPreference = document.documentElement.dataset.motionPreference;
	let newMotionPreference; 
	if (currentMotionPreference === "reduced") {
		newMotionPreference = "no-preference";
	} else {
		newMotionPreference = "no-preference";
	}
	document.documentElement.dataset.theme = newMotionPreference;
	localStorage.setItem('motionPreference', newMotionPreference);
});
*/