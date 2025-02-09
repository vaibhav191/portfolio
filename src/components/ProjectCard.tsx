import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    images?: string[]; // array of image URLs
}

function ProjectCard({ title, description, technologies, githubLink, images }: ProjectCardProps) {
    // Generate a unique ID for the carousel if images are provided
    const carouselId = `carousel-${title.replace(/\s+/g, '-')}`;

    return (
        <div className="card text-bg-dark border-light h-100">
            <div className="h5 card-header border-light">{title}</div>
            {images && images.length > 0 && (
                <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {images.map((img, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} style={{ objectFit: 'contain', maxHeight: '300px' }} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            )}
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
