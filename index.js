const heder = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
	rootMargin: "-200px 0px 0px 0px"
};

const sectioOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			header.classList.add("nav-scrolled");
		} else {
			header.classLit.remove("nav-scrolled");
		}
	});
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);