import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Intro() {
  return (
    <div className="p-5">
      <h1 className="p-1">Vaibhav Shrivastav</h1>
      <h2 className="text-light-emphasis p-1">Software Developer | Security+</h2>
      <p className="p-2">
        Transforming complex challenges through automation and AI innovation,
        backed by a strong cybersecurity foundation.
      </p>
      <div className="social-links mt-3">
        <a
          href="https://github.com/vaibhav191"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light me-2"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/vshriva5"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Intro;
