import { jobs } from "./jobs.js";

const params = new URLSearchParams(window.location.search);

const jobId = Number(params.get("id"));

const job = jobs.find(job => job.id === jobId);

// if (!job) {

//     window.location.href = "joblisting.html";

// }


const successTitle = document.querySelector("#success-title");

const successMessage = document.querySelector("#success-message");



const summaryTitle = document.querySelector(".job-details h2");

const companyName = document.querySelector(
    ".job-information span:nth-child(1)"
);

const employment = document.querySelector(
    ".job-information span:nth-child(2)"
);

const location = document.querySelector(
    ".job-information span:nth-child(3)"
);

const companyLogo = document.querySelector(".company-logo img");

const appliedDate = document.querySelector(".application-date");

const detailsBtn = document.querySelector(".details-btn");


function renderSuccessPage() {

    if (!job) {

        window.location.href = "joblisting.html";
        return;

    }

    successTitle.textContent = "Application Submitted Successfully";

    successMessage.textContent =
        `Thank you for applying! Your application has been sent to the recruitment team at ${job.company}.`;

    summaryTitle.textContent = job.title;

    companyName.innerHTML = `
        <span class="material-symbols-outlined">
            business
        </span>
        ${job.company}
    `;

    employment.innerHTML = `
        <span class="material-symbols-outlined">
            work
        </span>
        ${job.employment}
    `;

    location.innerHTML = `
        <span class="material-symbols-outlined">
            location_on
        </span>
        ${job.location}
    `;

    companyLogo.src = job.logo;

    companyLogo.alt = `${job.company} Logo`;

    appliedDate.innerHTML = `
        <span class="material-symbols-outlined">
            calendar_today
        </span>
        Applied on ${new Date().toLocaleDateString()}
    `;

    detailsBtn.addEventListener("click", () => {

        window.location.href =
            `jobdetails.html?id=${job.id}`;

    });

}

renderSuccessPage();