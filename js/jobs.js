/* =====================================
   Featured Jobs
===================================== */

/*
    Container that will hold every job card.
*/
const jobsContainer = document.querySelector(".jobs-container");


/*
    Job data.

    Normally this would come from an API.

    For now we're storing it inside an array.
*/
const jobs = [
    {
        jobTitle: "Senior Product Designer",
        company: "Google",
        companyLogo: "./assets/images/logos/google.png",
        location: "Mountain View, CA",
        employmentType: "Full Time",
        salary: "$140k - $180k",
        skills: ["Figma", "UX Research", "Design Systems"],
        postedDate: "1d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Frontend Developer",
        company: "Spotify",
        companyLogo: "./assets/images/logos/spotify.png",
        location: "Stockholm, Sweden",
        employmentType: "Hybrid",
        salary: "$100k - $130k",
        skills: ["React", "TypeScript", "Tailwind CSS"],
        postedDate: "3d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Backend Software Engineer",
        company: "Stripe",
        companyLogo: "./assets/images/logos/stripe.png",
        location: "San Francisco, CA",
        employmentType: "Remote",
        salary: "$150k - $190k",
        skills: ["Node.js", "PostgreSQL", "AWS"],
        postedDate: "5h ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Data Analyst",
        company: "Airbnb",
        companyLogo: "./assets/images/logos/airbnb.png",
        location: "Seattle, WA",
        employmentType: "Full Time",
        salary: "$95k - $120k",
        skills: ["SQL", "Python", "Tableau"],
        postedDate: "2d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Mobile App Developer",
        company: "Uber",
        companyLogo: "./assets/images/logos/uber.png",
        location: "New York, NY",
        employmentType: "Contract",
        salary: "$70/hr",
        skills: ["Flutter", "Dart", "Firebase"],
        postedDate: "4d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "DevOps Engineer",
        company: "Netflix",
        companyLogo: "./assets/images/logos/netflix.png",
        location: "Los Gatos, CA",
        employmentType: "Full Time",
        salary: "$160k - $210k",
        skills: ["Docker", "Kubernetes", "Terraform"],
        postedDate: "6h ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Machine Learning Engineer",
        company: "OpenAI",
        companyLogo: "./assets/images/logos/openai.png",
        location: "San Francisco, CA",
        employmentType: "Hybrid",
        salary: "$180k - $250k",
        skills: ["Python", "PyTorch", "LLMs"],
        postedDate: "1w ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Cybersecurity Analyst",
        company: "Cisco",
        companyLogo: "./assets/images/logos/cisco.png",
        location: "Austin, TX",
        employmentType: "Full Time",
        salary: "$115k - $145k",
        skills: ["SIEM", "Network Security", "Incident Response"],
        postedDate: "2d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Product Manager",
        company: "Microsoft",
        companyLogo: "./assets/images/logos/microsoft.png",
        location: "Redmond, WA",
        employmentType: "Full Time",
        salary: "$145k - $185k",
        skills: ["Agile", "Roadmapping", "Analytics"],
        postedDate: "12h ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "UI/UX Designer",
        company: "Adobe",
        companyLogo: "./assets/images/logos/adobe.png",
        location: "Remote",
        employmentType: "Part Time",
        salary: "$80k - $100k",
        skills: ["Adobe XD", "Figma", "Prototyping"],
        postedDate: "3d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Cloud Solutions Architect",
        company: "Amazon",
        companyLogo: "./assets/images/logos/amazon.png",
        location: "Seattle, WA",
        employmentType: "Full Time",
        salary: "$170k - $220k",
        skills: ["AWS", "CloudFormation", "Microservices"],
        postedDate: "8h ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Full Stack Developer",
        company: "Meta",
        companyLogo: "./assets/images/logos/meta.png",
        location: "Menlo Park, CA",
        employmentType: "Hybrid",
        salary: "$150k - $195k",
        skills: ["React", "Node.js", "GraphQL"],
        postedDate: "1d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "QA Automation Engineer",
        company: "Intel",
        companyLogo: "./assets/images/logos/intel.png",
        location: "Santa Clara, CA",
        employmentType: "Full Time",
        salary: "$105k - $135k",
        skills: ["Selenium", "Java", "Cypress"],
        postedDate: "2d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "iOS Developer",
        company: "Apple",
        companyLogo: "./assets/images/logos/apple.png",
        location: "Cupertino, CA",
        employmentType: "Full Time",
        salary: "$155k - $200k",
        skills: ["Swift", "SwiftUI", "Xcode"],
        postedDate: "10h ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Android Developer",
        company: "Samsung",
        companyLogo: "./assets/images/logos/samsung.png",
        location: "Seoul, South Korea",
        employmentType: "Hybrid",
        salary: "$95k - $135k",
        skills: ["Kotlin", "Jetpack Compose", "Firebase"],
        postedDate: "3d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Data Scientist",
        company: "IBM",
        companyLogo: "./assets/images/logos/ibm.png",
        location: "New York, NY",
        employmentType: "Remote",
        salary: "$135k - $170k",
        skills: ["Python", "Machine Learning", "Pandas"],
        postedDate: "5d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Site Reliability Engineer",
        company: "LinkedIn",
        companyLogo: "./assets/images/logos/linkedin.png",
        location: "Sunnyvale, CA",
        employmentType: "Full Time",
        salary: "$165k - $205k",
        skills: ["Kubernetes", "Go", "Prometheus"],
        postedDate: "6h ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Blockchain Developer",
        company: "Coinbase",
        companyLogo: "./assets/images/logos/coinbase.png",
        location: "Remote",
        employmentType: "Remote",
        salary: "$165k - $215k",
        skills: ["Solidity", "Ethereum", "Web3.js"],
        postedDate: "2d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Technical Writer",
        company: "Atlassian",
        companyLogo: "./assets/images/logos/atlassian.png",
        location: "Sydney, Australia",
        employmentType: "Remote",
        salary: "$85k - $110k",
        skills: ["Documentation", "Markdown", "API Docs"],
        postedDate: "4d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Game Developer",
        company: "Epic Games",
        companyLogo: "./assets/images/logos/epicgames.png",
        location: "Cary, NC",
        employmentType: "Full Time",
        salary: "$120k - $165k",
        skills: ["C++", "Unreal Engine", "Gameplay Systems"],
        postedDate: "9h ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "AI Research Engineer",
        company: "NVIDIA",
        companyLogo: "./assets/images/logos/nvidia.png",
        location: "Santa Clara, CA",
        employmentType: "Hybrid",
        salary: "$190k - $250k",
        skills: ["CUDA", "PyTorch", "Deep Learning"],
        postedDate: "18h ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Business Intelligence Analyst",
        company: "Oracle",
        companyLogo: "./assets/images/logos/oracle.png",
        location: "Austin, TX",
        employmentType: "Full Time",
        salary: "$110k - $145k",
        skills: ["Power BI", "SQL", "ETL"],
        postedDate: "2d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Software Engineer Intern",
        company: "Dropbox",
        companyLogo: "./assets/images/logos/dropbox.png",
        location: "Remote",
        employmentType: "Internship",
        salary: "$40/hr",
        skills: ["JavaScript", "Git", "React"],
        postedDate: "1d ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Solutions Engineer",
        company: "Salesforce",
        companyLogo: "./assets/images/logos/salesforce.png",
        location: "Chicago, IL",
        employmentType: "Full Time",
        salary: "$125k - $160k",
        skills: ["CRM", "Apex", "REST APIs"],
        postedDate: "3h ago",
        applicationLink: "./viewjob.html"
    },

    {
        jobTitle: "Systems Administrator",
        company: "Dell Technologies",
        companyLogo: "./assets/images/logos/dell.png",
        location: "Round Rock, TX",
        employmentType: "Full Time",
        salary: "$90k - $120k",
        skills: ["Linux", "Active Directory", "VMware"],
        postedDate: "5d ago",
        applicationLink: "./viewjob.html"
    }
];


/* =====================================
   Helper Functions
===================================== */

/*
    Creates all skill badges.

    Input:
        ["React", "HTML", "CSS"]

    Output:
        <span class="skill-tag">React</span>
        <span class="skill-tag">HTML</span>
        <span class="skill-tag">CSS</span>
*/
function createSkillTags(skills) {

    return skills
        .map(skill => `<span class="skill-tag">${skill}</span>`)
        .join("");

}


/*
    Creates ONE job card.

    Input:
        One job object

    Output:
        HTML string
*/
function createJobCard(job) {

    return `
        <article class="job-card">

            <div class="job-card-header">

                <div class="logo-container">

                    <img
                        src="${job.companyLogo}"
                        alt="${job.company} logo"
                    >

                </div>

                <span class="job-badge">
                    ${job.employmentType}
                </span>

            </div>


            <h3 class="job-title">
                ${job.jobTitle}
            </h3>


            <p class="job-company">
                ${job.company} • ${job.location}
            </p>


            <div class="skills">

                ${createSkillTags(job.skills)}

            </div>


            <div class="job-card-footer">

                <span class="job-salary">
                    ${job.salary}
                </span>

                <a
                    href="${job.applicationLink}"
                    class="view-details-btn"
                >
                    View Details
                </a>

            </div>

        </article>
    `;

}


/* =====================================
   Render Jobs
===================================== */

/*
    Loops through every job.

    Builds one large HTML string.

    Inserts everything into the page
    only ONCE.

    
*/
let currentIndex = 0;
const jobsPerPage = 6;

function renderJobs(){

    jobsContainer.innerHTML = "";

    let html = "";

    const jobsToShow = jobs.slice(
        currentIndex,
        currentIndex + jobsPerPage
    );

    for(const job of jobsToShow){

        html += createJobCard(job)

    }

    jobsContainer.innerHTML = html;

}



/* =====================================
   Initialize
===================================== */

/*
    Runs immediately when the page loads.
*/
renderJobs();




const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn");

let diff = currentIndex - jobsPerPage 

nextBtn.addEventListener("click", () => {
    currentIndex += jobsPerPage;
   

    if (currentIndex >= jobs.length) {
        console.log(currentIndex)
        currentIndex =+ diff;
        
        
    };

    console.log(currentIndex)
    renderJobs();
})


prevBtn.addEventListener("click", () => {

    currentIndex -= jobsPerPage;

    if(currentIndex < 0){

        currentIndex += jobs.length;

    }

    if(currentIndex == 1) {
        currentIndex = 0
    }
    // console.log(jobs.length - jobsPerPage)
    renderJobs();
    console.log(currentIndex)
});
