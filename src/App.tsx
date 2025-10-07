import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">YourName</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm <span>Your Name</span></h1>
        <p>I'm a passionate <strong>Web Developer</strong> who loves crafting elegant and efficient solutions.</p>
        <a href="#projects" className="cta">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a developer focused on building clean, user-friendly experiences.
          My main stack includes <strong>React</strong>, <strong>TypeScript</strong>,
          and <strong>Node.js</strong>. I enjoy collaborating on innovative projects
          that make an impact.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A responsive portfolio built with React & TailwindCSS.</p>
          </div>
          <div className="project-card">
            <h3>Task Manager App</h3>
            <p>A full-stack productivity app using MERN stack.</p>
          </div>
          <div className="project-card">
            <h3>API Dashboard</h3>
            <p>A data visualization dashboard powered by REST APIs.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <p>Interested in working together or just want to say hi?</p>
        <a href="mailto:youremail@example.com" className="cta">Contact Me</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
