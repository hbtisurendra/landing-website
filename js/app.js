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

const navBoom = () => {
    let navUI = '';

    //looping over all section
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
        navUI += `<li> <a class = "menu__link" onclick="ScrollTo(${sectionID})"> ${sectionDataNav}</a> </li>`
    });
    // append all element to the navigation 
    navigation.innerHTML = navUI;

};

navBoom();

function ScrollTo(name) {

    //init thread
    ScrollToResolver(name);
}

function ScrollToResolver(elem) {
    var jump = parseInt(elem.getBoundingClientRect().top * .4);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;
    //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
    if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
        elem.lastjump = Math.abs(jump);
        setTimeout(function() {
            ScrollToResolver(elem);
        }, "100");
    } else {
        elem.lastjump = null;
    }
}