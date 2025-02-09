interface DescriptionSection {
    title: string;
    points: string[];
}

interface ExperienceCardProps {
    position: string;
    organization: string;
    fromDate: string;
    toDate: string;
    descriptions: DescriptionSection[];
}

function ExperienceCard({ position, organization, fromDate, toDate, descriptions }: ExperienceCardProps) {
    return (
        <div className="card text-bg-dark border-light mb-3">
            <div className="h5 card-header border-light d-flex justify-content-between">
                <span>{position}</span>
                <span>{fromDate} - {toDate}</span>
            </div>
            <div className="card-body">
                <h5 className="card-subtitle mb-4 fw-bold">{organization}</h5>
                <div className="card-text">
                    {descriptions.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-3">
                            <div className="fs-6 text-secondary mb-2">{section.title}</div>
                            {section.points.map((point, pointIndex) => (
                                <div key={pointIndex} className="mb-2 ms-3">
                                    {point}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
