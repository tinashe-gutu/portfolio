import todo from "../utils/todo.jpeg";
import pastebin from "../utils/pastebin.png";
import rainbow from "../utils/Rainbowimg.png";
import electricpv from "../utils/electricpv.mp4";

export function ProjectList(): JSX.Element {
  return (
    <div className="projectListContainer" id="projects">
      <h1 className="my-projects">My Projects</h1>
      <div className="rainbowMachines">
        <div className="img-div">
          <img src={rainbow} alt="Rainbow screenshot" />
        </div>
        <div className="project-info">
          <h3>Rainbow Machines</h3>
          <p>
            In a previous role, I developed a full stack software solution that
            included attaching barcodes to machines that would be temporarily
            going into a clients property.The barcode could be scanned when a
            machine was placed in a property. The software would then record the
            location of the property on a map, as well as the duration of time
            the machine had been there. This enabled the warehouse manager to
            easily track the location and status of each machine, and receive
            alerts when it was time to remove them.
          </p>
          <ul>
            <li>Javascript</li>
            <li>Python</li>
            <li>Flask</li>
            <li>SQLite</li>
          </ul>
          <a href="https://youtu.be/hHiwJLfzQRc">Live Video</a>
          <a href="https://github.com/tinashe-gutu/Rainbow">Source</a>
        </div>
      </div>
      <div className="pasteBin">
        <div>
          <img src={pastebin} alt="Pastebin screenshot" />
        </div>
        <div>
          <h3>Patebin</h3>
          <p>
            A Pastebin full stack web application where users can store and
            share text snippets, code snippets, or any other type of text
            content. Snipets can be viewed in full with comments displayed
            beneath them, users also have the opition to add their own comments
            to a paste.
          </p>
          <ul>
            <li>Typescript</li>
            <li>React</li>
            <li>ExpressJS</li>
            <li>PostgreSQL</li>
          </ul>
          <a href="https://pastebin-tg.netlify.app/">Live App</a>
          <a href="https://github.com/tinashe-gutu/pastebin-frontend">
            Frontend Source
          </a>
          <a href="https://github.com/tinashe-gutu/pastebin-backend">
            Backend Source
          </a>
        </div>
      </div>
      <div className="todoList">
        <div>
          <img src={todo} alt="To-do list screenshot" />
        </div>
        <div>
          <h3>to-do List</h3>
          <p>
            Simple to do list app,to prioritise and manage tasks. full stack app
            built using PERN stack and a cloud database
          </p>
          <ul>
            <li>Typescript</li>
            <li>React</li>
            <li>ExpressJS</li>
            <li>PostgreSQL</li>
          </ul>
          <a href="https://illustrious-froyo-1c4560.netlify.app/">Live App</a>
          <a href="https://github.com/tinashe-gutu/to-do-list-frontend">
            Frontend Source
          </a>
          <a href="https://github.com/tinashe-gutu/to-do-list-backend">
            Backend Source
          </a>
        </div>
      </div>
      <div className="electricParticles">
        <div>
          <video loop={true} autoPlay muted>
            <source src={electricpv} type="video/mp4" />
          </video>
        </div>
        <div>
          <h3>Electic Particles (Creative coding)</h3>
          <p>
            An algorithm that utilizes the p5.js library and executed on the
            Open Processor platform is used to create a visually striking
            pattern through the movement of electric particles in close
            proximity to one another.
          </p>
          <ul>
            <li>Javascript</li>
            <li>P5.js</li>
            <li>Open Processor</li>
          </ul>
          <a href="https://openprocessing.org/sketch/1727622">Live render</a>
          <a href="https://openprocessing.org/sketch/1727622">Source</a>
        </div>
      </div>
    </div>
  );
}
