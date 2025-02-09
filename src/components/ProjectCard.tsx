import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
}

function ProjectCard({ title, description, technologies, githubLink }: ProjectCardProps) {
    return (
        <div className="card text-bg-dark border-light h-100">
            <div className="h5 card-header border-light">{title}</div>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <p className="card-text">{description}</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                        {technologies.map((tech, index) => (
                            <span key={index} className="badge bg-secondary">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-3">
                    <a href={githubLink} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="btn btn-outline-light d-inline-flex align-items-center gap-2">
                        <FaGithub />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
