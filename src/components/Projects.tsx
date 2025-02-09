import ProjectCard from './ProjectCard';
import tictactoe1 from '../assets/img/tictactoe-home.png';
import tictactoe2 from '../assets/img/tictactoe-gameScreen.png';
import tictactoe3 from '../assets/img/tictactoe-gameEndScreen.png';
import tictactoe4 from '../assets/img/tictactoe-recordsScreen.png';
import syspilot1 from '../assets/img/syspilot_1.png';
import syspilot2 from '../assets/img/syspilot_2.png';
import syspilot3 from '../assets/img/syspilot_3.png';
import syspilot4 from '../assets/img/syspilot_4.png';
import syspilot5 from '../assets/img/syspilot_5.png';
import syspilot6 from '../assets/img/syspilot_6.png';
import syspilot7 from '../assets/img/syspilot_7.png';
import portfolio_img from '../assets/img/portfolio.png';
import schedule_easy_1 from '../assets/img/schedule_easy-1.png';
import schedule_easy_2 from '../assets/img/schedule_easy-2.png';
import schedule_easy_3 from '../assets/img/schedule_easy-3.png';
import schedule_easy_4 from '../assets/img/schedule_easy-4.png';
import schedule_easy_5 from '../assets/img/schedule_easy-5.png';
import schedule_easy_6 from '../assets/img/schedule_easy-6.png';
import schedule_easy_7 from '../assets/img/schedule_easy-7.png';
import schedule_easy_8 from '../assets/img/schedule_easy-8.png';
import under_dev from '../assets/img/under_development.webp';

function Projects() {
    const projectsList = [
        {
            title: "Sysadmin Copilot",
            description: "Semi-autonomous AI Agent with the ability to perform tasks on Linux server on behalf of System Admin.",
            technologies: ["Python", "LangChain", "LangGraph", "AI Agent", "AWS - EC2, SSM"],
            githubLink: "https://github.com/vaibhav191/Sysadmin-Copilot",
            images: [syspilot1, syspilot2, syspilot3, syspilot4, syspilot5, syspilot6, syspilot7],
        },
        {
            title: "Schedule-Easy",
            description: "A web application that simplifies the process of planning schedule on an excel and integrating the plan with Online Calendar.",
            technologies: ["Python", "Microservices","Docker", "Flask", "MongoDB","RabbitMQ","Redis","Nginx", "JWT", "AWS - IAM, KMS"],
            githubLink: "https://github.com/vaibhav191/schedule-easy",
            images: [schedule_easy_1, schedule_easy_2, schedule_easy_3, schedule_easy_4, schedule_easy_5, schedule_easy_6, schedule_easy_7, schedule_easy_8],
        },
        {
            title: "Thesis: Secure access of AI Agents using Attribute Based Least-Privilege Access Delegation",
            description: "Developing a secure mechanism for automated access delegation to AI Agents using machine learning techniques to identify least-privileged access for a given task.",
            technologies: ["Python", "LangChain", "LangGraph", "AI Agent", "scikit-learn", "MongoDB", "RabbitMQ", "Docker", "JWT"],
            githubLink: "#",
            images: [under_dev],
        },
        {
            title: "AI based Tic-Tac-Toe",
            description: "Android Application. The game features an AI opponent with varying difficulties. Allows for both single-player and local multiplayer experiences.",
            technologies: ["Kotlin", "Jetpack Compose", "RealmDB", "Android Studio"],
            githubLink: "https://github.com/vaibhav191/TicTacToe",
            images: [tictactoe1, tictactoe2, tictactoe3, tictactoe4],
        },
        {
            title: "Portfolio website",
            description: "A website to showcase my projects, skills, and experience.",
            technologies: ["Bootstrap", "React", "TypeScript", "HTML", "CSS"],
            githubLink: "https://github.com/vaibhav191/portfolio",
            images: [portfolio_img],
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