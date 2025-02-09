import NavBar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Accolades from "./components/Accolades";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-dark">
      <NavBar />
      <div className="container text-light p-5 align-items-center text-center ">
        <Intro />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Accolades />
        <Education />
      </div>
    </div>
  );
}
export default App;
