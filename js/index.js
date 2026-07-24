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


const myForm = document.querySelector("form.newsletter-form");

const myFormInput = document.querySelector("#email");
const displayMessage = document.querySelector(".newsletter-message");

myForm.addEventListener("submit", validateNewsletter);

// Clears the message after 6 seconds
function clearMessage() {
    displayMessage.classList.remove("error", "success");
    displayMessage.textContent = "";
}

function validateNewsletter(e) {
    e.preventDefault();

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

    // Reset the form
    setTimeout(() => {
    myForm.reset();
    clearMessage();
    }, 1000);

    
    myForm.submit();

}



const comingSoonLinks = document.querySelectorAll(".coming-soon");


comingSoonLinks.forEach(e => {
    e.addEventListener("click", (event) => {
        event.preventDefault();

    window.location.href = "construction.html"
    })
});