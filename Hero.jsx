import profile from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="hero" id="home">
      
      {/* LEFT SIDE CONTENT */}
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Vidhyashalini Venkatesh</span>
        </h1>

        <h2>
          <Typewriter
            words={[
              "Frontend Developer",
              "Backend Developer",
              "Full Stack Developer",
              "Web Designer"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p>
          I’m a detail-oriented developer dedicated to building seamless digital
          experiences. With a foundation in robust database management and a
          passion for intuitive UI design, I bridge the gap between complex logic
          and user-centric aesthetics. I thrive on solving intricate problems and
          collaborating with cross-functional teams to turn ambitious ideas into
          functional, high-performance applications.
        </p>

        <div className="hero-buttons">
          <a href="#contact">
            <button>Contact Me</button>
          </a>

          <a href="/resume.pdf" download>
            <button>Resume</button>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-right">
        <img src={profile} alt="Vidhyashalini" />
      </div>

    </section>
  );
}

export default Hero;