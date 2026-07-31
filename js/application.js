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