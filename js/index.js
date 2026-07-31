    // let isLoggedIn = false;
    // let file;

    

    // const logIn = document.querySelector("#logIn");
    // console.log(logIn)
    // logIn?.addEventListener("click", (e) => {
    //     e.preventDefault()
    //     isLoggedIn = true
    //     console.log(isLoggedIn)
    // });


    // if (isLoggedIn) {
    //     file = "./headers/header.loggedin.html"
    // } else {
    //     file = "./headers/header.html"
    // }
    
    // fetch(file)
    //     .then(response => response.text())
    //     .then(data => {
    //         document.querySelector("#header").innerHTML = data;
    //         });




 export function mobileToggle(burgerClassName, mobileMenuClassName, stateName) {



    const burger = document.querySelector(`.${burgerClassName}`);

    const mobileMenu = document.querySelector(`.${mobileMenuClassName}`);

    burger.addEventListener("click", () => {
    // If "open" exists -> remove it.
    // If it doesn't exist -> add it.
    mobileMenu.classList.toggle(`${stateName}`);

    burger.classList.toggle(`${stateName}`)


    });

        if (!burger || !mobileMenu) {
        return "Try Harder";
    }

    function closeMenu() {

        mobileMenu.classList.remove(stateName);

        burger.classList.remove(stateName);

    }
    
    window.addEventListener("resize", () => {

        // If we're back on desktop...
        if (window.innerWidth > 750) {
            closeMenu()
        }

    });

    // interactive menu closing functinalities
    document.addEventListener('click', (event) => {

    
        const clickedBurger  = burger.contains(event.target)
        const clickedMenu  = mobileMenu.contains(event.target)

        if (!clickedMenu  && !clickedBurger ) {
            console.log(clickedMenu, clickedBurger)
            closeMenu()
        } else {
            console.log(clickedMenu, clickedBurger)
        }
    })

    document.addEventListener("keydown", (event) => {

        if(event.key ) {
            closeMenu()
        }


    });


    const mobileLinks = mobileMenu.querySelectorAll("a")

    mobileLinks.forEach((link) => {
            link.addEventListener('click', () => {
            closeMenu()
        })
    })
}

mobileToggle("burger", "mobile-menu", "open" );




// Hero section functionalities
const heroSearchForm = document.querySelector("#hero-search-form");

const jobSearchInput = document.querySelector("#job-search");

const locationSearchInput = document.querySelector("#location-search");

heroSearchForm?.addEventListener('submit', searchJobs)



function searchJobs(e){
    e.preventDefault();

    console.log("Searching......")

    const search = jobSearchInput.value.trim();

    const location = locationSearchInput.value.trim();

    console.log(search);
    console.log(location);

    redirectToJobListing(search, location)

}


function redirectToJobListing(search, location) {
    const url = 
    `joblisting.html?search=${encodeURIComponent(search)}&location=${encodeURIComponent(location)}`

    window.location.href = url;
}




function initializeSearchRedirects(selector){

    const elements = document.querySelectorAll(`${selector}`)
    elements.forEach((element) => {
        
        element.addEventListener('click', (event) =>{
            event.preventDefault();
            
            const { category } = element.dataset;
            

            redirectToJobListing(category, "")
        })
    })
}
initializeSearchRedirects('.popular-tag');

initializeSearchRedirects(".category-card")




// CTA 

const postJobBtn = document.querySelector(".post-job-btn");
postJobBtn?.addEventListener("click", (event) => {
    
    event.preventDefault()
    const isLoggedIn =
        document.body.classList.contains("logged-in");

    if (isLoggedIn) {

        window.location.href = "construction.html";

    } else {

        window.location.href = "login.html";

    }

});




// FOOTER

function validateNewsletter(e) {
    e.preventDefault();

    


    const myFormInput = document.querySelector("#email");

    const displayMessage = document.querySelector(".newsletter-message");


   


    // Get the user's email
    const email = myFormInput.value.trim();

    // Reset previous message
    displayMessage.classList.remove("error", "success");

    // Empty input
    if (email === "") {
        displayMessage.classList.add("error");
        displayMessage.textContent = "Please enter your email.";

        setTimeout(clearMessage, 4000);
        return;
    }

    // Basic email validation
    if (!email.includes("@") || !email.includes(".")) {
        displayMessage.classList.add("error");
        displayMessage.textContent = "Please enter a valid email address.";

        setTimeout(clearMessage, 4000);
        return;
    }

    // Success
    displayMessage.classList.add("success");
    displayMessage.textContent = "Form submitted successfully!";

    // Clears the message after 6 seconds
    function clearMessage() {
        displayMessage.classList.remove("error", "success");
        displayMessage.textContent = "";
    }
    // Reset the form
    setTimeout(() => {
    myForm.reset();
    clearMessage();
    }, 1000);

    
    myForm.submit();

}

 const myForm = document.querySelector("form.newsletter-form");
 myForm?.addEventListener("submit", validateNewsletter);






 // Global utilities
const comingSoonLinks = document.querySelectorAll(".coming-soon");

comingSoonLinks.forEach(link => {

    link.addEventListener("click", (event) => {
        console.log(link.classList)

        if(link.classList.contains('requires-auth')) {
            console.log("log in")
            event.preventDefault()
            return;
        }
        event.preventDefault();

    window.location.href = "construction.html"
    })
});




