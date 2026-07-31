import { jobs } from "./jobs.js"

const params = new URLSearchParams(window.location.search)

const jobid = Number(params.get("id"))


const job = jobs.find((job) => job.id === jobid);



function createJobDetails(job) {

    return `

    <!-- ==========================
         Breadcrumb
    =========================== -->

    <section class="breadcrumb">

        <a href="index.html">

            Home

        </a>

        <span>/</span>

        <a href="joblisting.html">

            Jobs

        </a>

        <span>/</span>

        <span>

            ${job.title}

        </span>

    </section>


    <!-- ==========================
         Hero
    =========================== -->

    <section class="job-hero">

        <div class="company-logo">

            <img
                src="${job.logo}"
                alt="${job.company}"
            >

        </div>


        <div class="job-info">

            <h1>

                ${job.title}

            </h1>

            <p>

                ${job.company} • ${job.location}

            </p>


            <div class="tags">

                <span>${job.employment}</span>

                <span>${job.workMode}</span>

                <span>${job.experience}</span>

            </div>

        </div>


        <div class="job-actions">

            <a
                href="application.html?id=${job.id}"
                class="primary-btn"
            >

                Apply Now

            </a>

            <button
                class="secondary-btn bookmark-btn"
                data-job-id="${job.id}"
            >

                <i class="fa-regular fa-heart"></i>

               <span> Save Job </span>

            </button>

        </div>

    </section>


    <!-- ==========================
         Layout
    =========================== -->

    <section class="job-layout">

        <article class="job-content">

            <section>

                <h2>

                    Job Description

                </h2>

                <p>

                    ${job.description}

                </p>

            </section>


            <section>

                <h2>

                    Responsibilities

                </h2>

                <ul>

                    ${createList(job.responsibilities)}

                </ul>

            </section>


            <section>

                <h2>

                    Requirements

                </h2>

                <ul>

                    ${createList(job.requirements)}

                </ul>

            </section>

        </article>


        <aside class="job-sidebar">

            <div class="sidebar-card">

                <h3>

                    Job Overview

                </h3>

                <div>

                    <span>

                        Salary

                    </span>

                    <strong>

                        ${job.salary}

                    </strong>

                </div>

                <div>

                    <span>

                        Employment

                    </span>

                    <strong>

                        ${job.employment}

                    </strong>

                </div>

                <div>

                    <span>

                        Work Mode

                    </span>

                    <strong>

                        ${job.workMode}

                    </strong>

                </div>

                <div>

                    <span>

                        Experience

                    </span>

                    <strong>

                        ${job.experience}

                    </strong>

                </div>

                <div>

                    <span>

                        Posted

                    </span>

                    <strong>

                        ${job.posted}

                    </strong>

                </div>

            </div>


            <div class="sidebar-card">

                <h3>

                    Skills

                </h3>

                <div class="skills">

                    ${createSkillTag(job.skills)}

                </div>

            </div>

        </aside>

    </section>

    `;

}

// function createContentSection(title, content) {

//     return `

//         <section>

//             <h2>

//                 ${title}

//             </h2>

//             ${content}

//         </section>

//     `;

// }

// const descriptionSection =
//     createContentSection(

//         "Job Description",

//         `<p>${job.description}</p>`

//     );

 function createList(items) {
     return items
             .map(item => `<li>${item}</li>`)
             .join("")
 }

 function createSkillTag(skills) {
    return skills
        .map(skill => `<span>${skill}</span>`)
        .join("")
 }

// function createContentSection(title, content) {

//     return `

//         <section>

//             <h2>

//                 ${title}

//             </h2>

//             ${content}

//         </section>

//     `;

// }

// const jobContent = `

// <article class="job-content">

//     ${descriptionSection}

//     ${responsibilitiesSection}

//     ${requirementsSection}

// </article>

// `;

const jobDetailsPage = document.querySelector(".job-details-page");

function renderJobDetails() {

    if (!jobDetailsPage || !job) return;

    jobDetailsPage.innerHTML = createJobDetails(job);

}

renderJobDetails();



const bookmarkBtn = document.querySelector(".bookmark-btn");

bookmarkBtn?.addEventListener("click", toggleBookmark);

function toggleBookmark() {

    const icon = bookmarkBtn.querySelector("i");

    const text = bookmarkBtn.querySelector("span");

    const isSaved = bookmarkBtn.classList.contains("saved");

    if (isSaved) {

        bookmarkBtn.classList.remove("saved");
        icon.className = "fa-regular fa-heart";
        text.textContent = "Save Job"

    }
    else {

        bookmarkBtn.classList.add("saved");
        icon.className = "fa-solid fa-heart";
        text.textContent = "Saved"

    }

}