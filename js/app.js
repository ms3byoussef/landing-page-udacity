/**
 *  Global Variables
 */
// navbar list 
let navbar = document.getElementById("navbar__list");
// get list of sections.
let sections = document.querySelectorAll("section");

// build the navbar
buildNav = () => {
    sections.forEach((section) => {
        const navlist = `<li class='menu__link ${section.className}' data-link=${section.id}><a id=${section.id}'_link' href="#${section.id}">${section.dataset.nav}</li>`;
        navbar.insertAdjacentHTML("beforeend", navlist);
    });
     


};



// Add class 'active' to section when near top of viewport
setActive = () => {
    for (section of sections) {
        let bounding = section.getBoundingClientRect();

        if ((bounding.bottom > 150) & (bounding.top < 150)) {
            document.querySelector("#" + section.id).classList.add("your-active-class");
        } else {
            document.querySelector("#" + section.id).classList.remove("your-active-class");
        }
    }
/*
    navbar.style.display = "none";
    setTimeout(() => {
        navbar.style.display = "block";
    },500);

*/
};
// build the event to know when the user is on top of viewport and control the active  class
function buildevents() {
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let link = document.getElementById(section.id);
        const entry = Math.floor(section.getBoundingClientRect().top);

        section.classList.toggle("your-active-class", false);
        link.classList.toggle("your-active-class", false);

        if (entry < 280 && entry >= -280) {
            section.classList.toggle("your-active-class", true);
            link.classList.toggle("your-active-class", true);
        }
     /*
       link.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      */
    }


};

/**
 * End Main Functions
 * 
 * 
 * Begin Events
 *
 */navbar.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = e.target.hasAttribute('data-link') ? e.target : e.target.parentElement;
    const elementToScroll = document.getElementById(parent.dataset.link);
    elementToScroll.scrollIntoView({block: 'end', behavior: 'smooth'})
});



buildNav();
// Scroll to section
buildevents();
// Set sections as active
window.addEventListener("scroll", buildevents);
//End Events
