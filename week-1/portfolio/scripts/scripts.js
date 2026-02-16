const themeToggle = document.querySelector(".theme-toggle");

//Load saved theme from localStorage or use system preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}

// Wait for DOM to load before setting up the dropdown event listener
document.addEventListener('DOMContentLoaded', function() {
	const dropdown = document.querySelector('.dropdown');
	const dropbtn = dropdown.querySelector('.dropbtn');
	const themeOptions = document.querySelectorAll('.dropdown-content a');

	// Toggle dropdown visibility on button click
	dropbtn.addEventListener('click', function(e) {
		e.stopPropagation(); // Prevent click from bubbling up to document
		dropdown.classList.toggle('open');
	});

	// Close dropdown when clicking outside
	document.addEventListener('click', function(e) {
		if (!dropdown.contains(e.target)) {
			dropdown.classList.remove('open');
		}
	});

	// Handle theme option clicks
	themeOptions.forEach(option => {
		option.addEventListener('click', function(e) {
			e.preventDefault(); //Prevent # navigation
			const selectedTheme = this.dataset.theme; //"light", "dark", or "system"
			themeOptions.forEach(opt => opt.classList.remove('active')); //Remove active class from all options
			this.classList.add('active'); //Add active class to clicked option

			if(selectedTheme === "system") {
				localStorage.removeItem('theme'); //Remove saved theme to revert to system preference
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
			} else {
				document.documentElement.dataset.theme = selectedTheme; //Set theme to "light" or "dark"
				localStorage.setItem('theme', selectedTheme); //Save user choice
			}

			updateDropdown(selectedTheme); 
			dropdown.classList.remove('open'); //Close dropdown after selection
		});
	});

	function updateDropdown(selectedTheme) {
		const svgIcon = dropbtn.querySelector('svg');

		if (selectedTheme === "light") { //set to star icon
			svgIcon.innerHTML = `<g transform="translate(0 5)">
                <g> <polygon points="0,0 26,-25 0,-100 -26,-25 0,0" class="currentFill" /> </g>
                <g transform="rotate(72)"> <polygon points="0,0 26,-25 0,-100 -26,-25 0,0" class="currentFill" /> </g>
                <g transform="rotate(-72)"> <polygon points="0,0 26,-25 0,-100 -26,-25 0,0" class="currentFill" /> </g>
                <g transform="rotate(144)"> <polygon points="0,0 26,-25 0,-100 -26,-25 0,0" class="currentFill" /> </g>
                <g transform="rotate(-144)"> <polygon points="0,0 26,-25 0,-100 -26,-25 0,0" class="currentFill" /> </g>
              </g>`;
			svgIcon.setAttribute('viewBox', '-100 -100 200 200');
			svgIcon.setAttribute('class', 'star');
		}
		else if (selectedTheme === "dark") { //set to black hole icon
			svgIcon.innerHTML = `<circle class="currentStroke"  cx="200" cy="140" r="60" fill="none" stroke-width="25" />
                <ellipse class="currentStroke currentFill"  cx="200"  cy="150"  rx="180"   ry="8"  stroke-width="5"/>
                <path fill="none" class="currentStroke" stroke-width="15" d=" M 143,122  Q 115,150   60,150"/>
                <path fill="none" class="currentStroke" stroke-width="15"  d=" M 257,122 Q 285,150  340,150"  />`;
			svgIcon.setAttribute('viewBox', '0 0 375 300');
			svgIcon.removeAttribute('class');
		}
		else { //set to system icon
			svgIcon.innerHTML = `<circle cx="10" cy="10" r="5" fill="none" class="currentStroke" stroke-width="1.5" />
                <path d=" M 10,5  L 10,15  A 5,5 0 0 0 10,5"  stroke="none"  class="currentStroke currentFill"/>`;
			svgIcon.setAttribute('viewBox', '0 0 20 20');
			svgIcon.setAttribute('class', 'systemTheme');
		}
	}
});

/*
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

*/




/*
const animationToggle = document.querySelector(".animation-toggle");
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