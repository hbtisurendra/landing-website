/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

// navigation global variable
const navigation = document.getElementById('navbar__list');
// section global variable
const sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

const navBullder = () => {
    let navUI = '';

    //looping over all section
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
        navUI += `<li> <a class = "menu__link" href="#${sectionID}"> ${sectionDataNav}</a> </li>`
    });
    // append all element to the navigation 
    navigation.innerHTML = navUI;

};

navBullder();
// Add class 'active' to section when near top of viewport
// getting the large value less than or equal to number

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};
// delete the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color:linear-gradient(0deg, rgba(255, 255, 255, .1) 0%, rgba(255, 255, 255, .2) 100%);";
    sectionid = section.id.slice(7, 8) - 1;
    navigation.childNodes[sectionid].style.cssText = "background-color:white;";
};

// add the active class
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
        section.style.cssText = "background-color:red;";
        sectionid = section.id.slice(7, 8) - 1;
        navigation.childNodes[sectionid].style.cssText = "background-color:red;";


    };
};


// implementation of actual function

const sectionActavitation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(), section);
    });
};

window.addEventListener('scroll', sectionActavitation);

// Scroll to anchor ID using scrollTO event
const scrolling = () => {
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for (i = 0; i < sections; i++) {
                sections[i].addEventListener("click", sectionScroll(link));
            }

        });
    });

}

scrolling();

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active