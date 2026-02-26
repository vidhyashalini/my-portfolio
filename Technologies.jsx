import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt
} from "react-icons/fa";

import {
  SiMysql,
  SiPostman,
  SiSpring,
  SiHibernate
} from "react-icons/si";

function Technologies() {
  return (
    <section className="section" id="technologies" data-aos="fade-up">
      <h2>Technologies</h2>

      <div className="tech-grid">

        <div className="tech-card java"><FaJava /><p>Java</p></div>
        <div className="tech-card sql"><SiMysql /><p>SQL</p></div>
        <div className="tech-card html"><FaHtml5 /><p>HTML</p></div>
        <div className="tech-card css"><FaCss3Alt /><p>CSS</p></div>
        <div className="tech-card js"><FaJs /><p>JavaScript</p></div>

        <div className="tech-card react"><FaReact /><p>React</p></div>
        <div className="tech-card postman"><SiPostman /><p>Postman</p></div>
        <div className="tech-card hibernate"><SiHibernate /><p>Hibernate</p></div>
        <div className="tech-card spring"><SiSpring /><p>Spring</p></div>
        <div className="tech-card git"><FaGitAlt /><p>Git</p></div>

      </div>
    </section>
  );
}

export default Technologies;