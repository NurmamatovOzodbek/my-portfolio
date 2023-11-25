import { Link } from "react-router-dom";
import { navbarLink } from "../../utils";

export function Navbar() {
  return (
    <ul>
      {navbarLink.map(({ title, id, link }) => {
        return (
          <li key={id}>
            <Link to={link}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
