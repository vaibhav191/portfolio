function Navbar() {
  const sections = [
    "About",
    "Skills",
    "Certifications",
    "Experience",
    "Projects",
    "Accolades",
    "Education",
  ];
  return (
    <nav
      className="navbar fixed-top bg-dark-subtle border-bottom border-body navbar-expand-lg"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Vaibhav (Vine) Shrivastav
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {sections.map((section) => (
              <a key={section} className="nav-link" href={`#${section.toLocaleLowerCase()}`}>
                {section}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
