export function Header(): JSX.Element {
  return (
    <section className="header">
      <header className="intro">
        <div className="short-intro-container">
          <h1 className="name">Hi, I'm Tinashe</h1>
          <p className="short-intro">
            From teaching Mathematics to solving software engineering puzzles. I
            am a <b>junior software engineer</b> with a keen eye for readable
            and realiable solutions. My current focus is in building full stack
            web application using the <b>PERN</b> stack at Academy Tech
          </p>
        </div>
      </header>
      <div id="about">
        <h1>About</h1>
        <p>
          Hello, my name is Tinashe and I enjoy spotting real life opportunities
          and problems that can be solved through tech. My interest in software
          began in 2020 during my final year studying Aerospace Engineering
          where I stumbled onto an online course deliverd by Havard called CS50
          and I became obssessed with this new world of problem solving and
          thinking!
        </p>
        <p>
          Fast-forward to today and some self taught online courses later, I
          have retrained as a software engineer through Academy Tech's emersive
          program with a curriculum that focuses on leadership and industry
          readiness.
        </p>
        <p>Here are few technologies i have been working with recently:</p>
        <ul className="technologies">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>ExpressJS</li>
          <li>PostgreSQL</li>
          <li>JEST</li>
          <li>Cypress</li>
          <li>CI/CD</li>
        </ul>
        <ul className="socials">
          <a
            href="https://github.com/tinashe-gutu"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/tinashe-gutu-24820818b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </ul>
      </div>
    </section>
  );
}
