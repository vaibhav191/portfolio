function Certifications(){
return <div className="p-5" id="education">
    <h2 className="p-1">Education</h2>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card text-bg-dark border-light h-100">
          <div className="h5 card-header border-light">Arizona State University</div>
          <div className="card-body">
            <p className="card-text">Master of Science in Computer Science</p>
            <p className="card-text">GPA: 4.0/4.0</p>
            <p className="card-text">Relevant Coursework: Mobile Computing, Foundations of Algorithms, Statistical Machine Learning, Applied Cryptography</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card text-bg-dark border-light h-100">
          <div className="h5 card-header border-light">SRM Institute of Science and Technology, India</div>
          <div className="card-body">
            <p className="card-text">Bachelor of Technology in Information Technology</p>
            <p className="card-text">Relevant Coursework: Data Structures & Algorithms, Cloud Computing</p>
          </div>
        </div>
      </div>
    </div>
    </div>
};
export default Certifications;
