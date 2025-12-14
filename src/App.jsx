import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SPLASH_DURATION = 2600; // 2.6 seconds – keep in sync with CSS

function SectionTitle({ index, children }) {
  return (
    <div className="section-title">
      <span className="section-index">
        {index.toString().padStart(2, "0")}.
      </span>
      <h2>{children}</h2>
      <div className="section-line" />
    </div>
  );
}

function App() {
  // theme: saved -> system -> dark
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    return "dark";
  });

  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // save theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // splash timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  // SPLASH SCREEN
  if (isLoading) {
    return (
      <div className={`app ${theme}`}>
        <div className="splash">
          <div className="splash-content">
            <div className="splash-logo">
              <span className="splash-name">Arslaan Ahmed</span>
            </div>
            <p className="splash-role">Junior Software Developer</p>

            <div className="splash-bar">
              <div className="splash-bar-fill" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // MAIN SITE
  return (
    <div className={`app ${theme}`}>
      {/* LEFT SOCIAL BAR */}
      <div className="social-left">
        <a
          href="https://github.com/ArslaanML"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="social-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/arslaana/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="social-icon" />
        </a>

        <a href="mailto:arslaanahmed24@gmail.com" aria-label="Email">
          <FaEnvelope className="social-icon" />
        </a>
      </div>

      <div className="container">
        <header className="header">
          <div className="logo-block">
            <span className="logo-text">Arslaan Ahmed</span>
          </div>

          <nav className="nav">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>

            <div className="theme-switch" onClick={toggleTheme}>
              <div className="switch-track">
                <div className={`switch-thumb ${theme}`} />
              </div>
              <span className="switch-icon">
                {theme === "light" ? "🌙" : "☀️"}
              </span>
            </div>
          </nav>
        </header>

        <main>
          <section className="hero">
            <p className="hero-kicker">Hi, my name is</p>
            <h1 className="hero-title">Arslaan Ahmed.</h1>
            <h2 className="hero-subtitle">
              I build practical, user-focused software.
            </h2>
            <p className="hero-text">
              I’m a junior software developer interested in Android and web
              development. I enjoy turning real-world problems into simple,
              reliable digital experiences using modern tools like React, Java
              and Firebase.
            </p>
          </section>

          <section id="about">
            <SectionTitle index={1}>About</SectionTitle>
            <p>
              I’m currently focused on building projects that strengthen my
              full-stack skills – from Android apps powered by local storage and
              cloud backends, to web apps built with React.
            </p>
            <p>
              I like working on clean interfaces, logical flows, and code that
              is easy to understand and maintain. I’m especially interested in
              roles where I can keep learning, contribute to real products, and
              grow alongside more experienced engineers.
            </p>
          </section>

          <section id="projects">
            <SectionTitle index={2}>Projects</SectionTitle>

            <div className="project-list">
              <article className="project-card">
                <p className="project-label">Featured Project</p>
                <h3 className="project-title">Planify – Study Planner App</h3>

                <ul className="project-points">
                  <li>Android study planner app built with Java</li>
                  <li>Offline-first design using SQLite</li>
                  <li>Cloud sync with Firebase / Firestore</li>
                  <li>Includes task scheduling, statistics, and dark mode</li>
                </ul>

                <p className="project-tech">
                  Java · Android · SQLite · Firebase/Firestore
                </p>
                <a
                  href="https://github.com/ArslaanML/Planify-Android-App"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub
                </a>
              </article>

              <article className="project-card">
                <p className="project-label">Featured Project</p>
                <h3 className="project-title">
                  Sentiment Analysis – Final Year Project
                </h3>

                <ul className="project-points">
                  <li>Bi-LSTM neural network with attention mechanism</li>
                  <li>Built using Python, TensorFlow, and Keras</li>
                  <li>Text preprocessing, training, and evaluation pipeline</li>
                  <li>Experiments with multiple model architectures</li>
                </ul>

                <p className="project-tech">
                  Python · TensorFlow · Keras · NLP
                </p>
                <a
                  href="https://huggingface.co/spaces/ArslaanML/ArslaanAhmedFYP"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on Hugging Face
                </a>
              </article>

              <article className="project-card">
                <p className="project-label">Featured Project</p>
                <h3 className="project-title">
                  LifeLens – Global Health Data Explorer
                </h3>

                <ul className="project-points">
                  <li>Web application built with React and modern JavaScript</li>
                  <li>
                    Fetches real-world health and population data from a public
                    API
                  </li>
                  <li>Interactive data visualisation using charts and tables</li>
                  <li>Supports CSV data export for offline analysis</li>
                  <li>Clean, responsive UI with light and dark mode support</li>
                </ul>

                <p className="project-tech">
                  React · JavaScript · REST APIs · Data Visualisation
                </p>

                <a
                  href="https://lifelensproject.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Live Site
                </a>
              </article>
            </div>
          </section>

          <section id="skills">
            <SectionTitle index={3}>Skills</SectionTitle>
            <div className="skills-grid">
              <div className="skills-column">
                <h4>Languages</h4>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="skills-column">
                <h4>Frontend &amp; Mobile</h4>
                <ul>
                  <li>React</li>
                  <li>HTML &amp; CSS</li>
                  <li>Android (Java)</li>
                </ul>
              </div>
              <div className="skills-column">
                <h4>Tools &amp; Other</h4>
                <ul>
                  <li>Firebase / Firestore</li>
                  <li>Git &amp; GitHub</li>
                  <li>VS Code · Android Studio</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <p>© {new Date().getFullYear()} Arslaan Ahmed</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
