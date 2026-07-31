import { jobs } from "./jobs.js"; 

// import { createJobCard } from "./jobs.js";

import { createSkillTags } from "./jobs.js";

import { mobileToggle } from "./index.js"; 


const params = new URLSearchParams(window.location.search);

const searchQuery = params.get("search")?.trim().toLowerCase() || "";

const locationQuery = params.get("location")?.trim() || "";


console.log(searchQuery);
console.log(locationQuery)


const filteredJobs = jobs.filter((job) => {

    const matchesSearch =
         searchQuery === "" ||
            
            job.title
                .toLowerCase()
                .includes(searchQuery);
        

    const matchesLocation =
    locationQuery === "" ||

            job.location
                .toLowerCase()
                .includes(locationQuery);
            
            
    return matchesSearch && matchesLocation;

});

console.log(filteredJobs);

function createJobCard(job) {

    return `
        <article class="job-card">

            <div class="job-card-header">

                <div class="logo-container">

                    <img
                        src="${job.logo}"
                        alt="${job.company} logo"
                    >

                </div>

                <span class="job-badge">
                    ${job.employment}
                </span>

            </div>


            <h3 class="job-title">
                ${job.title}
            </h3>


            <p class="job-company">
                ${job.company} • ${job.location}
            </p>


            <div class="skills">

                ${createSkillTags(job.skills)}

            </div>

            <br>
            <div>
                ${job.description}
            </div>
            <div class="job-card-footer">

                <span class="job-salary">
                    ${job.salary}
                </span>

                <a
                    href="jobdetails.html?id=${job.id}"
                    class="view-details-btn"
                >

                    View Details
                </a>

            </div>

        </article>
    `;

}

const jobsContainer = document.querySelector(".jobs-container");

let currentIndex = 0;
const jobsPerPage = 6;
function renderJobs(){

    if (!jobsContainer) return;

    jobsContainer.innerHTML = "";

    let html = "";
    

   const jobsToShow = filteredJobs.slice(
        currentIndex,
        jobs.length - 1
    );
    if (jobsToShow.length === 0) {

    jobsContainer.innerHTML = `
        <div class="empty-state" style = "
        text-align : center;">

            <h2>No jobs found</h2>
            <br>
            <br>
            <p>
                Try changing your search or filters.
            </p>

        </div>
    `;

    return;

}

    for(const job of jobsToShow){

        html += createJobCard(job)

    }

    jobsContainer.innerHTML = html;

}

renderJobs()


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");