function Projects() {
  return (
    <section className="section" id="projects" data-aos="fade-up">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">

        {/* PROJECT 1 */}
        <div className="project-card">
          <h3>Movie Management System Using Spring Boot</h3>
          <p><strong>Technologies:</strong> Spring Boot, Spring Data JPA, REST APIs, MySQL</p>

          <ul>
            <li>Designed and developed backend with complete CRUD functionality.</li>
            <li>Built REST APIs for seamless frontend-backend integration.</li>
            <li>Implemented validation & exception handling.</li>
            <li>Used layered architecture (Controller, Service, Repository).</li>
            <li>Integrated MySQL using Spring Data JPA.</li>
            <li>Tested APIs using Postman.</li>
          </ul>

          <a href="https://github.com/vidhyashalini" target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <h3>Detection of Chronic Liver Disease Using Machine Learning</h3>
          <p><strong>Technologies:</strong> Python, Machine Learning Algorithms</p>

          <ul>
            <li>Developed predictive ML model using patient dataset.</li>
            <li>Performed preprocessing and feature engineering.</li>
            <li>Compared classification algorithms for best accuracy.</li>
            <li>Enabled early detection to reduce diagnosis time.</li>
            <li>Focused on minimizing false positives.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Projects;