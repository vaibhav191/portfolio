import ExperienceCard from './ExperienceCard';

function Experience() {
    const experiences = [
        {
            position: "Solution Advisor",
            organization: "Deloitte",
            fromDate: "June 2021",
            toDate: "July 2023",
            descriptions: [
                {
                    title: "Developed tools for automation platform",
                    points: [
                        "Spearheaded the design and development of API based automations within  Oracle Cyberplex platform— an automation solution that streamlined cybersecurity processes and reduced manual efforts by 75%."
                    ]
                },
                {
                 title: "Platform prototype development",
                 points: [
                    "Developed a Django-based prototype for the Oracle Cyberplex platform, serving as the blueprint for its subsequent full-scale development and deployment."
                 ]   
                },
                {
                    title: "Engineered Critical API Workaround",
                    points: [
                        "Built a temporary Python-based API solution to sustain continuous data flow during a partial system outage, effectively mitigating a critical production migration blocker and averting extended downtime, thereby preserving project timelines."
                    ]
                },
                {
                    title: "Architected Scalable Access Provisioning Workflows",
                    points: [
                    "Designed and implemented dynamic access provisioning systems for major clients (Live Nation Entertainment & Giant Eagle Inc.) by integrating Oracle IDCS with Okta and Microsoft AD using OAuth 2.0 and SAML protocols. This reduced login times by 80% and improved authentication efficiency through SSO and federation."
                    ]
                },
                {
                    title: "Implemented Automated Incident Response",
                    points: [
                    "Developed Python scripts for real-time log analysis, identifying root causes of issues and deploying alternate solutions to minimize system downtime and mitigate risks."
                    ]
                },
                {
                    title: "Built Secure Access Control Solutions",
                    points: [
                    "Designed and implemented role-based access control (RBAC) strategies during the migration to Oracle ERP SaaS, ensuring best practices like least privilege access and segregation of duties were enforced.",
                    ]
                },
                {
                    title: "Mentored and Collaborated",
                    points: [
                    "Led technical presentations, conducted workshop training sessions, and mentored junior developers, fostering a culture of continuous improvement and high-quality deliverables."
                    ]
                },
            ]
        },
        {
            position: "Trainee - Software Engineer",
            organization: "SkillAssure",
            fromDate: "August 2020",
            toDate: "March 2021",
            descriptions: [
                {
                    title: "Led Automated Testing Framework Development",
                    points: [
                    "Led a team in designing and implementing an automated mobile testing framework using Java, Appium, and TestNG. Leveraged the Page Object Model to boost code scalability and reusability, resulting in a 40% increase in testing efficiency and a 25% reduction in lifecycle errors",
                    "Worked on Django based web application"
                    ]
                },
            ]
        },

        {
            position: "Intern",
            organization: "Linde",
            fromDate: "June 2018",
            toDate: "July 2018",
            descriptions: [
                {
                    title: "Automated Data Processing",
                    points: [
                    "Developed C# scripts to automate data extraction and transformation processes, supporting structural design and analysis."
                    ]
                },
            ]
        },
    ];

    return (
        <div className="p-5" id="experience">
            <h2 className="p-1">Experience</h2>
            <div className="mt-4">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
        </div>
    );
}

export default Experience;