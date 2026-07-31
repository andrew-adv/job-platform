
const jobsContainer = document.querySelector(".jobs-container");


/*
    Job data.

    Normally this would come from an API.

    For now we're storing it inside an array.
*/

export const jobs = [
    {
        id: 1,
        title: "Senior Product Designer",
        company: "Google",
        logo: "./assets/images/logos/google.png",
        location: "Mountain View, CA",
        salary: "$140k - $180k",
        jobType: "Product Design",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Hybrid",
        posted: "1 day ago",
        description:
            "Google is looking for a Senior Product Designer to create intuitive user experiences across Search, Workspace, and AI-powered products. You'll collaborate with engineers, researchers, and product managers to design products used by billions worldwide.",
        responsibilities: [
            "Design user-centered interfaces from concept to launch.",
            "Create wireframes, prototypes, and high-fidelity mockups.",
            "Collaborate with cross-functional product teams.",
            "Maintain and improve Google's design system."
        ],
        requirements: [
            "5+ years of Product Design experience.",
            "Expert knowledge of Figma and prototyping.",
            "Experience conducting UX research.",
            "Excellent communication and presentation skills."
        ],
        skills: [
            "Figma",
            "UX Research",
            "Design Systems"
        ]
    },

    {
        id: 2,
        title: "Frontend Developer",
        company: "Spotify",
        logo: "./assets/images/logos/spotify.png",
        location: "Stockholm, Sweden",
        salary: "$100k - $130k",
        jobType: "Frontend",
        employment: "Full Time",
        experience: "Mid Level",
        workMode: "Hybrid",
        posted: "3 days ago",
        description:
            "Spotify is seeking a Frontend Developer to build engaging web experiences for millions of music lovers. You'll work with designers and backend engineers to deliver responsive, accessible, and performant interfaces.",
        responsibilities: [
            "Develop responsive web applications using React.",
            "Optimize UI performance and accessibility.",
            "Collaborate with designers on user experiences.",
            "Write clean, maintainable TypeScript code."
        ],
        requirements: [
            "3+ years of frontend development experience.",
            "Strong React and TypeScript skills.",
            "Experience with Tailwind CSS.",
            "Knowledge of REST APIs and Git."
        ],
        skills: [
            "React",
            "TypeScript",
            "Tailwind CSS"
        ]
    },

    {
        id: 3,
        title: "Backend Software Engineer",
        company: "Stripe",
        logo: "./assets/images/logos/stripe.png",
        location: "San Francisco, CA",
        salary: "$150k - $190k",
        jobType: "Backend",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Remote",
        posted: "5 hours ago",
        description:
            "Stripe is hiring a Backend Software Engineer to build scalable payment infrastructure powering millions of businesses worldwide. You'll design distributed systems focused on reliability, security, and performance.",
        responsibilities: [
            "Build scalable backend services using Node.js.",
            "Design secure payment APIs.",
            "Optimize database performance.",
            "Collaborate with infrastructure and product teams."
        ],
        requirements: [
            "5+ years of backend engineering experience.",
            "Strong Node.js and PostgreSQL knowledge.",
            "Experience with cloud platforms like AWS.",
            "Knowledge of distributed systems."
        ],
        skills: [
            "Node.js",
            "PostgreSQL",
            "AWS"
        ]
    },

    {
        id: 4,
        title: "Data Analyst",
        company: "Airbnb",
        logo: "./assets/images/logos/airbnb.png",
        location: "Seattle, WA",
        salary: "$95k - $120k",
        jobType: "Data Analytics",
        employment: "Full Time",
        experience: "Mid Level",
        workMode: "On-site",
        posted: "2 days ago",
        description:
            "Airbnb is looking for a Data Analyst to transform large datasets into actionable business insights that improve the guest and host experience across the platform.",
        responsibilities: [
            "Analyze large datasets using SQL and Python.",
            "Create dashboards and reports.",
            "Identify trends and business opportunities.",
            "Collaborate with product and marketing teams."
        ],
        requirements: [
            "Bachelor's degree in a quantitative field.",
            "Advanced SQL skills.",
            "Experience with Tableau or Power BI.",
            "Strong analytical thinking."
        ],
        skills: [
            "SQL",
            "Python",
            "Tableau"
        ]
    },

    {
        id: 5,
        title: "Mobile App Developer",
        company: "Uber",
        logo: "./assets/images/logos/uber.png",
        location: "New York, NY",
        salary: "$70/hr",
        jobType: "Mobile Development",
        employment: "Contract",
        experience: "Mid Level",
        workMode: "Hybrid",
        posted: "4 days ago",
        description:
            "Uber is hiring a Mobile App Developer to build high-performance mobile applications that enhance rider and driver experiences across global markets.",
        responsibilities: [
            "Develop cross-platform mobile applications.",
            "Integrate Firebase and REST APIs.",
            "Improve application performance and reliability.",
            "Collaborate with designers and backend engineers."
        ],
        requirements: [
            "3+ years of Flutter development.",
            "Strong Dart programming skills.",
            "Experience with Firebase services.",
            "Knowledge of mobile UI best practices."
        ],
        skills: [
            "Flutter",
            "Dart",
            "Firebase"
        ]
    },
        {
        id: 6,
        title: "DevOps Engineer",
        company: "Netflix",
        logo: "./assets/images/logos/netflix.png",
        location: "Los Gatos, CA",
        salary: "$160k - $210k",
        jobType: "DevOps",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "On-site",
        posted: "6 hours ago",
        description:
            "Netflix is seeking a DevOps Engineer to improve deployment pipelines and cloud infrastructure supporting one of the world's largest streaming platforms.",
        responsibilities: [
            "Build and maintain CI/CD pipelines.",
            "Automate infrastructure using Infrastructure as Code.",
            "Monitor production systems for reliability.",
            "Collaborate with engineering teams to improve deployments."
        ],
        requirements: [
            "5+ years of DevOps experience.",
            "Strong knowledge of Docker and Kubernetes.",
            "Experience with Terraform and AWS.",
            "Excellent scripting skills."
        ],
        skills: [
            "Docker",
            "Kubernetes",
            "Terraform"
        ]
    },

    {
        id: 7,
        title: "Machine Learning Engineer",
        company: "OpenAI",
        logo: "./assets/images/logos/openai.png",
        location: "San Francisco, CA",
        salary: "$180k - $250k",
        jobType: "AI / Machine Learning",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Hybrid",
        posted: "1 week ago",
        description:
            "OpenAI is looking for a Machine Learning Engineer to develop state-of-the-art AI models and scalable infrastructure for next-generation language and multimodal systems.",
        responsibilities: [
            "Train and optimize machine learning models.",
            "Develop scalable AI infrastructure.",
            "Collaborate with researchers and software engineers.",
            "Evaluate model performance and reliability."
        ],
        requirements: [
            "Strong background in machine learning.",
            "Experience with PyTorch and Python.",
            "Knowledge of large language models.",
            "Experience with distributed training."
        ],
        skills: [
            "Python",
            "PyTorch",
            "LLMs"
        ]
    },

    {
        id: 8,
        title: "Cybersecurity Analyst",
        company: "Cisco",
        logo: "./assets/images/logos/cisco.png",
        location: "Austin, TX",
        salary: "$115k - $145k",
        jobType: "Cybersecurity",
        employment: "Full Time",
        experience: "Mid Level",
        workMode: "Hybrid",
        posted: "2 days ago",
        description:
            "Cisco is hiring a Cybersecurity Analyst to protect enterprise systems by identifying threats, responding to incidents, and improving security operations.",
        responsibilities: [
            "Monitor security events using SIEM tools.",
            "Investigate and respond to incidents.",
            "Perform vulnerability assessments.",
            "Recommend security improvements."
        ],
        requirements: [
            "3+ years of cybersecurity experience.",
            "Knowledge of SIEM platforms.",
            "Understanding of networking fundamentals.",
            "Experience with incident response."
        ],
        skills: [
            "SIEM",
            "Network Security",
            "Incident Response"
        ]
    },

    {
        id: 9,
        title: "Product Manager",
        company: "Microsoft",
        logo: "./assets/images/logos/microsoft.png",
        location: "Redmond, WA",
        salary: "$145k - $185k",
        jobType: "Product Management",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Hybrid",
        posted: "12 hours ago",
        description:
            "Microsoft is seeking a Product Manager to define product strategy, prioritize features, and deliver customer-focused solutions across Microsoft 365 and Azure services.",
        responsibilities: [
            "Define product vision and roadmap.",
            "Gather customer and stakeholder requirements.",
            "Coordinate cross-functional product delivery.",
            "Measure product success using KPIs."
        ],
        requirements: [
            "5+ years of product management experience.",
            "Strong Agile methodology knowledge.",
            "Excellent analytical skills.",
            "Outstanding communication abilities."
        ],
        skills: [
            "Agile",
            "Roadmapping",
            "Analytics"
        ]
    },

    {
        id: 10,
        title: "UI/UX Designer",
        company: "Adobe",
        logo: "./assets/images/logos/adobe.png",
        location: "Remote",
        salary: "$80k - $100k",
        jobType: "UI/UX Design",
        employment: "Part Time",
        experience: "Mid Level",
        workMode: "Remote",
        posted: "3 days ago",
        description:
            "Adobe is looking for a UI/UX Designer to create intuitive digital experiences and interactive prototypes for Creative Cloud and Document Cloud products.",
        responsibilities: [
            "Design modern user interfaces.",
            "Create interactive prototypes.",
            "Conduct usability testing.",
            "Work closely with developers and product teams."
        ],
        requirements: [
            "3+ years of UI/UX design experience.",
            "Proficiency in Adobe XD and Figma.",
            "Strong visual design portfolio.",
            "Knowledge of accessibility guidelines."
        ],
        skills: [
            "Adobe XD",
            "Figma",
            "Prototyping"
        ]
    },

        {
        id: 11,
        title: "Cloud Solutions Architect",
        company: "Amazon",
        logo: "./assets/images/logos/amazon.png",
        location: "Seattle, WA",
        salary: "$170k - $220k",
        jobType: "Cloud Engineering",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Hybrid",
        posted: "8 hours ago",
        description:
            "Amazon is hiring a Cloud Solutions Architect to design scalable, secure, and cost-effective cloud solutions for enterprise customers using AWS services. You'll work directly with customers and engineering teams to modernize cloud infrastructure.",
        responsibilities: [
            "Design cloud-native architectures on AWS.",
            "Advise customers on migration strategies.",
            "Optimize cloud infrastructure for performance and cost.",
            "Collaborate with engineering and sales teams."
        ],
        requirements: [
            "5+ years of cloud architecture experience.",
            "Expertise with AWS services.",
            "Experience with Infrastructure as Code.",
            "Excellent communication and presentation skills."
        ],
        skills: [
            "AWS",
            "CloudFormation",
            "Microservices"
        ]
    },

    {
        id: 12,
        title: "Full Stack Developer",
        company: "Meta",
        logo: "./assets/images/logos/meta.png",
        location: "Menlo Park, CA",
        salary: "$150k - $195k",
        jobType: "Full Stack",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Hybrid",
        posted: "1 day ago",
        description:
            "Meta is seeking a Full Stack Developer to build scalable web applications that power social experiences across Facebook, Instagram, and emerging technologies.",
        responsibilities: [
            "Develop frontend and backend features.",
            "Build scalable APIs and services.",
            "Optimize application performance.",
            "Collaborate with designers and product managers."
        ],
        requirements: [
            "4+ years of full stack development.",
            "Strong React and Node.js experience.",
            "Experience with GraphQL.",
            "Knowledge of scalable system design."
        ],
        skills: [
            "React",
            "Node.js",
            "GraphQL"
        ]
    },

    {
        id: 13,
        title: "QA Automation Engineer",
        company: "Intel",
        logo: "./assets/images/logos/intel.png",
        location: "Santa Clara, CA",
        salary: "$105k - $135k",
        jobType: "Quality Assurance",
        employment: "Full Time",
        experience: "Mid Level",
        workMode: "On-site",
        posted: "2 days ago",
        description:
            "Intel is looking for a QA Automation Engineer to improve software quality by developing automated testing frameworks for enterprise and embedded systems.",
        responsibilities: [
            "Develop automated test suites.",
            "Maintain CI testing pipelines.",
            "Identify and report software defects.",
            "Collaborate with development teams."
        ],
        requirements: [
            "3+ years of QA automation experience.",
            "Experience with Selenium and Cypress.",
            "Strong Java programming skills.",
            "Knowledge of Agile development."
        ],
        skills: [
            "Selenium",
            "Java",
            "Cypress"
        ]
    },

    {
        id: 14,
        title: "iOS Developer",
        company: "Apple",
        logo: "./assets/images/logos/apple.png",
        location: "Cupertino, CA",
        salary: "$155k - $200k",
        jobType: "Mobile Development",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "On-site",
        posted: "10 hours ago",
        description:
            "Apple is hiring an iOS Developer to build world-class mobile experiences across the iPhone ecosystem using modern Apple development frameworks.",
        responsibilities: [
            "Develop native iOS applications.",
            "Build reusable SwiftUI components.",
            "Optimize app performance and responsiveness.",
            "Work closely with product and design teams."
        ],
        requirements: [
            "4+ years of iOS development experience.",
            "Expertise in Swift and SwiftUI.",
            "Experience using Xcode and Apple's SDKs.",
            "Knowledge of mobile application architecture."
        ],
        skills: [
            "Swift",
            "SwiftUI",
            "Xcode"
        ]
    },

    {
        id: 15,
        title: "Android Developer",
        company: "Samsung",
        logo: "./assets/images/logos/samsung.png",
        location: "Seoul, South Korea",
        salary: "$95k - $135k",
        jobType: "Mobile Development",
        employment: "Full Time",
        experience: "Mid Level",
        workMode: "Hybrid",
        posted: "3 days ago",
        description:
            "Samsung is seeking an Android Developer to create innovative mobile experiences for Galaxy smartphones and connected devices using modern Android technologies.",
        responsibilities: [
            "Develop Android applications in Kotlin.",
            "Build modern interfaces using Jetpack Compose.",
            "Integrate Firebase services.",
            "Optimize application performance across devices."
        ],
        requirements: [
            "3+ years of Android development.",
            "Strong Kotlin programming skills.",
            "Experience with Jetpack Compose.",
            "Knowledge of Android architecture components."
        ],
        skills: [
            "Kotlin",
            "Jetpack Compose",
            "Firebase"
        ]
    },

        {
        id: 16,
        title: "Data Scientist",
        company: "IBM",
        logo: "./assets/images/logos/ibm.png",
        location: "New York, NY",
        salary: "$135k - $170k",
        jobType: "Data Science",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Remote",
        posted: "5 days ago",
        description:
            "IBM is looking for a Data Scientist to build predictive models and AI-driven solutions that help enterprise clients make data-informed decisions. You'll work closely with software engineers, business analysts, and research teams.",
        responsibilities: [
            "Develop machine learning models for business solutions.",
            "Analyze large datasets to identify trends and insights.",
            "Collaborate with engineering teams to deploy models.",
            "Present findings to technical and non-technical stakeholders."
        ],
        requirements: [
            "Master's degree or equivalent experience in Data Science or related field.",
            "Strong Python programming skills.",
            "Experience with machine learning frameworks.",
            "Knowledge of statistics and data visualization."
        ],
        skills: [
            "Python",
            "Machine Learning",
            "Pandas"
        ]
    },

    {
        id: 17,
        title: "Site Reliability Engineer",
        company: "LinkedIn",
        logo: "./assets/images/logos/linkedin.png",
        location: "Sunnyvale, CA",
        salary: "$165k - $205k",
        jobType: "DevOps",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Hybrid",
        posted: "6 hours ago",
        description:
            "LinkedIn is hiring a Site Reliability Engineer to improve the reliability, scalability, and availability of services that support hundreds of millions of professionals worldwide.",
        responsibilities: [
            "Maintain highly available production systems.",
            "Automate operational tasks using Go and scripting tools.",
            "Monitor services and respond to production incidents.",
            "Improve infrastructure reliability and scalability."
        ],
        requirements: [
            "5+ years of SRE or DevOps experience.",
            "Experience with Kubernetes and container orchestration.",
            "Strong Go programming skills.",
            "Knowledge of monitoring and observability tools."
        ],
        skills: [
            "Kubernetes",
            "Go",
            "Prometheus"
        ]
    },

    {
        id: 18,
        title: "Blockchain Developer",
        company: "Coinbase",
        logo: "./assets/images/logos/coinbase.png",
        location: "Remote",
        salary: "$165k - $215k",
        jobType: "Blockchain",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Remote",
        posted: "2 days ago",
        description:
            "Coinbase is seeking a Blockchain Developer to build secure decentralized applications and blockchain infrastructure supporting the future of digital finance.",
        responsibilities: [
            "Develop and deploy smart contracts.",
            "Build decentralized applications using Web3 technologies.",
            "Collaborate with security and protocol engineers.",
            "Optimize blockchain transaction performance."
        ],
        requirements: [
            "Experience developing Ethereum smart contracts.",
            "Strong Solidity programming skills.",
            "Knowledge of blockchain security best practices.",
            "Experience with Web3 libraries and APIs."
        ],
        skills: [
            "Solidity",
            "Ethereum",
            "Web3.js"
        ]
    },

    {
        id: 19,
        title: "Technical Writer",
        company: "Atlassian",
        logo: "./assets/images/logos/atlassian.png",
        location: "Sydney, Australia",
        salary: "$85k - $110k",
        jobType: "Technical Writing",
        employment: "Full Time",
        experience: "Mid Level",
        workMode: "Remote",
        posted: "4 days ago",
        description:
            "Atlassian is hiring a Technical Writer to create clear, accurate, and user-friendly documentation for developer tools and enterprise software products.",
        responsibilities: [
            "Write and maintain product documentation.",
            "Create API guides and technical tutorials.",
            "Work with engineers to document new features.",
            "Ensure documentation follows company style guidelines."
        ],
        requirements: [
            "3+ years of technical writing experience.",
            "Excellent written communication skills.",
            "Experience documenting APIs and software products.",
            "Knowledge of Markdown and documentation platforms."
        ],
        skills: [
            "Documentation",
            "Markdown",
            "API Docs"
        ]
    },

    {
        id: 20,
        title: "Game Developer",
        company: "Epic Games",
        logo: "./assets/images/logos/epicgames.png",
        location: "Cary, NC",
        salary: "$120k - $165k",
        jobType: "Game Development",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "On-site",
        posted: "9 hours ago",
        description:
            "Epic Games is looking for a Game Developer to build immersive gameplay systems and interactive experiences using Unreal Engine for next-generation games.",
        responsibilities: [
            "Develop gameplay mechanics using C++.",
            "Implement features with Unreal Engine.",
            "Collaborate with designers and artists.",
            "Optimize game performance across platforms."
        ],
        requirements: [
            "4+ years of professional game development experience.",
            "Strong C++ programming skills.",
            "Experience with Unreal Engine.",
            "Passion for gameplay programming and optimization."
        ],
        skills: [
            "C++",
            "Unreal Engine",
            "Gameplay Systems"
        ]
    },

        {
        id: 21,
        title: "AI Research Engineer",
        company: "NVIDIA",
        logo: "./assets/images/logos/nvidia.png",
        location: "Santa Clara, CA",
        salary: "$190k - $250k",
        jobType: "AI / Machine Learning",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Hybrid",
        posted: "18 hours ago",
        description:
            "NVIDIA is seeking an AI Research Engineer to develop cutting-edge deep learning models and GPU-accelerated AI solutions. You'll collaborate with researchers and engineers to advance state-of-the-art machine learning technologies.",
        responsibilities: [
            "Develop and optimize deep learning models.",
            "Collaborate with research scientists on AI innovations.",
            "Improve GPU-accelerated training pipelines.",
            "Publish and implement research findings in production systems."
        ],
        requirements: [
            "Master's or PhD in Computer Science or related field.",
            "Strong Python and PyTorch experience.",
            "Knowledge of CUDA programming.",
            "Experience with distributed machine learning."
        ],
        skills: [
            "CUDA",
            "PyTorch",
            "Deep Learning"
        ]
    },

    {
        id: 22,
        title: "Business Intelligence Analyst",
        company: "Oracle",
        logo: "./assets/images/logos/oracle.png",
        location: "Austin, TX",
        salary: "$110k - $145k",
        jobType: "Business Intelligence",
        employment: "Full Time",
        experience: "Mid Level",
        workMode: "Hybrid",
        posted: "2 days ago",
        description:
            "Oracle is hiring a Business Intelligence Analyst to transform enterprise data into meaningful insights through dashboards, reporting solutions, and analytics that support strategic decision-making.",
        responsibilities: [
            "Develop business intelligence dashboards.",
            "Design and optimize ETL workflows.",
            "Analyze enterprise datasets using SQL.",
            "Present insights to business stakeholders."
        ],
        requirements: [
            "Bachelor's degree in Business, Analytics, or related field.",
            "Experience with Power BI or similar BI tools.",
            "Strong SQL and ETL knowledge.",
            "Excellent analytical and communication skills."
        ],
        skills: [
            "Power BI",
            "SQL",
            "ETL"
        ]
    },

    {
        id: 23,
        title: "Software Engineer Intern",
        company: "Dropbox",
        logo: "./assets/images/logos/dropbox.png",
        location: "Remote",
        salary: "$40/hr",
        jobType: "Software Engineering",
        employment: "Internship",
        experience: "Entry Level",
        workMode: "Remote",
        posted: "1 day ago",
        description:
            "Dropbox is looking for a Software Engineer Intern to contribute to real-world engineering projects while working alongside experienced developers building cloud collaboration tools.",
        responsibilities: [
            "Assist in developing frontend and backend features.",
            "Write clean, maintainable JavaScript code.",
            "Participate in code reviews and team meetings.",
            "Learn modern software engineering best practices."
        ],
        requirements: [
            "Currently pursuing a degree in Computer Science or related field.",
            "Knowledge of JavaScript and React.",
            "Experience using Git.",
            "Strong problem-solving skills."
        ],
        skills: [
            "JavaScript",
            "Git",
            "React"
        ]
    },

    {
        id: 24,
        title: "Solutions Engineer",
        company: "Salesforce",
        logo: "./assets/images/logos/salesforce.png",
        location: "Chicago, IL",
        salary: "$125k - $160k",
        jobType: "Solutions Engineering",
        employment: "Full Time",
        experience: "Senior Level",
        workMode: "Hybrid",
        posted: "3 hours ago",
        description:
            "Salesforce is seeking a Solutions Engineer to work with enterprise customers by designing CRM solutions, demonstrating product capabilities, and supporting successful implementations.",
        responsibilities: [
            "Design technical solutions for enterprise customers.",
            "Deliver product demonstrations and presentations.",
            "Integrate Salesforce solutions using REST APIs.",
            "Support customer implementations and deployments."
        ],
        requirements: [
            "4+ years of solutions engineering experience.",
            "Experience with CRM platforms.",
            "Knowledge of Apex and REST APIs.",
            "Excellent communication and customer-facing skills."
        ],
        skills: [
            "CRM",
            "Apex",
            "REST APIs"
        ]
    },

    {
        id: 25,
        title: "Systems Administrator",
        company: "Dell Technologies",
        logo: "./assets/images/logos/dell.png",
        location: "Round Rock, TX",
        salary: "$90k - $120k",
        jobType: "IT Administration",
        employment: "Full Time",
        experience: "Mid Level",
        workMode: "On-site",
        posted: "5 days ago",
        description:
            "Dell Technologies is hiring a Systems Administrator to manage enterprise IT infrastructure, maintain server environments, and ensure reliable system performance across corporate networks.",
        responsibilities: [
            "Administer Linux and Windows server environments.",
            "Manage Active Directory and user accounts.",
            "Monitor infrastructure performance and availability.",
            "Perform system upgrades, backups, and disaster recovery planning."
        ],
        requirements: [
            "3+ years of systems administration experience.",
            "Strong Linux administration skills.",
            "Experience with Active Directory and VMware.",
            "Knowledge of networking and virtualization technologies."
        ],
        skills: [
            "Linux",
            "Active Directory",
            "VMware"
        ]
    }
];

// const companyWebsites = {
//     Google: "https://about.google/",
//     Spotify: "https://www.spotify.com/",
//     Stripe: "https://stripe.com/",
//     Airbnb: "https://www.airbnb.com/",
//     Uber: "https://www.uber.com/",
//     Netflix: "https://www.netflix.com/",
//     OpenAI: "https://openai.com/",
//     Cisco: "https://www.cisco.com/",
//     Microsoft: "https://www.microsoft.com/",
//     Adobe: "https://www.adobe.com/",
//     Amazon: "https://www.amazon.com/",
//     Meta: "https://about.meta.com/",
//     Intel: "https://www.intel.com/",
//     Apple: "https://www.apple.com/",
//     Samsung: "https://www.samsung.com/",
//     IBM: "https://www.ibm.com/",
//     LinkedIn: "https://www.linkedin.com/",
//     Coinbase: "https://www.coinbase.com/",
//     Atlassian: "https://www.atlassian.com/",
//     "Epic Games": "https://www.epicgames.com/",
//     NVIDIA: "https://www.nvidia.com/",
//     Oracle: "https://www.oracle.com/",
//     Dropbox: "https://www.dropbox.com/",
//     Salesforce: "https://www.salesforce.com/",
//     "Dell Technologies": "https://www.dell.com/"
// };
// jobs.forEach(job => {
//     console.log(job.company)
//     job.companyWebsite = companyWebsites[job.company];
//     console.log(job.companyWebsite)
//     console.log(job.company)
// });

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
export function createSkillTags(skills) {

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
const featuredJobs = jobs.slice(0, 12);

function renderJobs(){

    if (!jobsContainer) return;

    jobsContainer.innerHTML = "";

    let html = "";
    

   const jobsToShow = featuredJobs.slice(
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


nextBtn?.addEventListener("click", () => {
    currentIndex += jobsPerPage;
   

    console.log(currentIndex)
    if (currentIndex >= featuredJobs.length) {
        console.log(currentIndex)
        currentIndex = 0;        
        
    };

    console.log(currentIndex)
    renderJobs();
})


prevBtn?.addEventListener("click", () => {

    currentIndex -= jobsPerPage;

    if(currentIndex < 0){

        currentIndex += featuredJobs.length;
        
    }
    console.log(currentIndex)

    if(currentIndex == 1) {
        currentIndex = 0
    }
    // console.log(jobs.length - jobsPerPage)
    renderJobs();
    console.log(currentIndex)
});
