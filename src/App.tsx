import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">Prathamesh Patil</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm <span>Prathamesh Patil</span></h1>
        <p>I’m a <strong>Software Tester</strong> with around <strong>4 years</strong> of hands-on experience in ensuring product quality and reliability through meticulous testing and <strong>automation</strong>.</p>
        <a href="#projects" className="cta">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I specialize in: <br/>
          Automation Testing using <strong>Java + Selenium</strong> and <strong>Playwright (TypeScript)</strong> <br/>
          <strong>Functional, API</strong>, and <strong>Database Testing</strong> <br/>
          Building robust test frameworks and collaborating closely with development teams to deliver high-quality releases. <br/>
          Alongside testing, I have a growing passion for <strong>front-end development</strong>, particularly using <strong>React and TypeScript</strong>. I love bringing ideas to life through clean, responsive, and user-friendly interfaces — combining my <strong>testing mindset with a developer’s creativity</strong>. <br/>
          I’m passionate about <strong>creating efficient, maintainable test solutions</strong> that help teams move faster with confidence. My goal is always to blend quality with speed — making testing a seamless part of the delivery pipeline. <br/>
          Outside of work, you’ll often find me on a <strong>bike ride</strong> exploring new routes, or diving deep into the world of <strong>trading — equities and derivatives</strong>. I enjoy analyzing market trends just as much as I enjoy debugging code! <br/>
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A responsive portfolio built with React.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <p>Interested in working together or just want to say hi?</p>
        <a href="mailto:prathameshpatil8512@yahoo.com" className="cta">Contact Me</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Prathamesh Patil. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;