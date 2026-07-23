// ===============================
// Grab the elements we need
// ===============================

// The button the user clicks (☰)
const burger = document.querySelector(".burger");

// The menu that will open and close
const mobileMenu = document.querySelector(".mobile-menu");


// ===============================
// Click Event
// ===============================

// This listener is added ONLY ONCE when the page loads.
// It now waits forever until the user clicks the button.
burger.addEventListener("click", () => {

    // If "open" exists -> remove it.
    // If it doesn't exist -> add it.
    mobileMenu.classList.toggle("open");

});


// ===============================
// Resize Event
// ===============================

// This runs EVERY TIME the window changes size.
window.addEventListener("resize", () => {

    // If we're back on desktop...
    if (window.innerWidth > 750) {

        // ...make sure the mobile menu is closed.
        mobileMenu.classList.remove("open");

    }

});



const job = {
    
    jobtitle: "",

    company: "",

    companyLogo: "",

    location: "",

    employmentType: "",

    salary: "",

    skills: [],

    postedDate: "",

    applicationLink: "",
    

}


const jobs = [
  {
        jobTitle: "",
        company: "",
        location: "",
    },

    {
        jobTitle: "",
        company: "",
        location: "",
    },

    {
        jobTitle: "",
        company: "",
        location: "",
    },

]