import ProjectCard from './ProjectCard';

function Projects() {
    const projectsList = [
        {
            title: "Sysadmin Copilot",
            description: "Semi-autonomous AI Agent with the ability to perform tasks on Linux server on behalf of System Admin.",
            technologies: ["Python", "LangChain", "LangGraph", "AI Agent", "AWS - EC2, SSM"],
            githubLink: "https://github.com/vaibhav191/Sysadmin-Copilot"
        },
        {
            title: "Schedule-Easy",
            description: "A web application that simplifies the process of planning schedule on an excel and integrating the plan with Online Calendar.",
            technologies: ["Python", "Microservices","Docker", "Flask", "MongoDB","RabbitMQ","Redis","Nginx", "JWT", "AWS - IAM, KMS"],
            githubLink: "https://github.com/vaibhav191/schedule-easy"
        },
        {
            title: "Thesis: Secure access of AI Agents using Attribute Based Least-Privilege Access Delegation",
            description: "Developing a secure mechanism for automated access delegation to AI Agents using machine learning techniques to identify least-privileged access for a given task.",
            technologies: ["Python", "LangChain", "LangGraph", "AI Agent", "scikit-learn", "MongoDB", "RabbitMQ", "Docker", "JWT"],
            githubLink: "#"
        },
        {
            title: "AI based Tic-Tac-Toe",
            description: "Android Application. The game features an AI opponent with varying difficulties. Allows for both single-player and local multiplayer experiences.",
            technologies: ["Kotlin", "Jetpack Compose", "RealmDB", "Android Studio"],
            githubLink: "https://github.com/vaibhav191/TicTacToe"
        },
        {
            title: "Portfolio website",
            description: "A website to showcase my projects, skills, and experience.",
            technologies: ["Bootstrap", "React", "TypeScript"],
            githubLink: "#"
        },
    ];

    return (
        <div className="p-5" id="projects">
            <h2 className="p-1">Projects</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {projectsList.map((project, index) => (
                    <div className="col" key={index}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;