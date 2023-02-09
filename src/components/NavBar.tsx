import { HashLink as Link } from "react-router-hash-link";

export function NavBar(): JSX.Element {
  return (
    <nav>
      <Link to="#about" smooth>
        About
      </Link>
      <Link to="#projects" smooth>
        Projects
      </Link>
      <Link to="#contact" smooth>
        Contact
      </Link>
    </nav>
  );
}
