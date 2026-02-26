import {
  FaLightbulb,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaHome
} from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      {/* LEFT SIDE ICONS */}
      <div className="nav-left">
        <FaLightbulb onClick={() => setDarkMode(!darkMode)} />

        <a
          href="https://linkedin.com/in/YOUR_LINK"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/vidhyashalini"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a href="/resume.pdf" download>
          <FaDownload />
        </a>
      </div>

      {/* CENTER NAV LINKS */}
      <div className="nav-center">
        <a href="#technologies">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        
        <a href="#contact">Contact</a>
      </div>

      {/* RIGHT SIDE HOME ICON */}
      <div className="nav-right">
        <a href="#home">
          <FaHome />
        </a>
      </div>

    </nav>
  );
}

export default Navbar;