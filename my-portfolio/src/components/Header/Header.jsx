import classNames from "classnames";
import { Navbar } from "../Navbar/Navbar";
import { navbarLink } from "../../utils";
import { Link } from "react-router-dom";
import style from "./header.module.scss";

export function Header() {
  return (
    <header>
      <div className={classNames(style.header, style.container)}>
        <div className={classNames(style.logo)}>Ozodbek Nurmamatov</div>
        <nav>
          {/* <Navbar /> */}
          <ul>
            {navbarLink.map(({ title, id, navLink }) => {
              console.log(navLink)
              return (
                <li key={id}>
                  <Link to={navLink}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <div className={classNames(style["social-network"])}></div>
        </nav>
      </div>
    </header>
  );
}
