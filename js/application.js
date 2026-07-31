import { jobs } from "./jobs.js";

const params = new URLSearchParams(window.location.search);

const jobId = Number(params.get("id"));

const job = jobs.find(job => job.id === jobId);

if (!job) {

    window.location.href = "joblisting.html";

}


const breadcrumbJobTitle =
    document.querySelector("#breadcrumb-job-title");

const applicationTitle =
    document.querySelector("#application-title");

const applicationSubtitle =
    document.querySelector("#application-subtitle");

const hiddenJobId =
    document.querySelector("#job-id");



function renderApplicationPage() {

    if (!job) return;

    hiddenJobId.value = job.id;

    applicationTitle.textContent =
        `Apply for ${job.title}`;

    applicationSubtitle.textContent =
        `${job.company} • ${job.location} • ${job.employment}`;

    breadcrumbJobTitle.textContent = job.title;

    breadcrumbJobTitle.href = `jobdetails.html?id=${job.id}`;

}

renderApplicationPage();

const applicationForm = document.querySelector("#application-form");

applicationForm?.addEventListener("submit", submitApplication);

function submitApplication(event) {
    event.preventDefault();

    const fullname = document.querySelector("#fullname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const location = document.querySelector("#location").value.trim();
    const coverLetter = document.querySelector("#cover-letter").value.trim();
    const resume = document.querySelector("#resume").files[0];
    const terms = document.querySelector("#terms").checked;

    // if (
    //     !fullname ||
    //     !email ||
    //     !phone ||
    //     !location ||
    //     !coverLetter ||
    //     !resume ||
    //     !terms
    // ) {
    //     alert("Please complete all required fields.");
    //     return;
    // }

    window.location.href = `success.html?id=${job.id}`;
}

