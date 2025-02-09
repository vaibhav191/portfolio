function Skills() {
  const skills = {
    "Programming Languages": [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Kotlin",
      "Rust(learning)",
    ],
    "Cloud & DevOps": ["Docker", "AWS", "Linux", "Git", "Kubernetes(learning)"],
    Frontend: ["HTML", "CSS", "React", "Bootstrap"],
    "Backend & Messaging": [
      "Django",
      "Flask",
      "RabbitMQ",
      "REST APIs",
      "Microservices",
    ],
    Testing: ["Selenium", "TestNG", "Appium", "Postman"],
    Databases: ["MySQL", "MongoDB", "Redis"],
    "AI & Machine Learning": [
      "LangChain",
      "LangGraph",
      "RAG",
      "AI Agents",
      "scikit-learn",
      "Numpy",
      "Pandas",
    ],
    Security: ["JWT", "RBAC", "SSO", "MFA", "Cryptography", "OAuth 2.0"],
  };
  const isLearning = (skill: String) =>
    skill.toLocaleLowerCase().includes("learning");
  return (
    <div className="p-5" id="skills">
      <h2 className="p-1">Technical Skills</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.entries(skills).map(([category, skills]) => (
          <div className="col" key={category}>
            <div
              className="card text-bg-dark border-light h-100 "
            >
              <div className="h5 card-header border-light">{category}</div>
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <ul className="list-group list-group-flush">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className={`list-group-item bg-dark text-white border-light ${isLearning(skill) ? 'text-light-emphasis p-1' : 'text-white'}`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
