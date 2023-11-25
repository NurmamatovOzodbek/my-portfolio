import classNames from "classnames";
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { SocialNetwork } from "../SocialNetwork/SocialNetwork";

export function Header() {
  return (
    <header>
      <div className={classNames(style.header, style.container)}>
        <div className={classNames(style.logo)}>
          <Link to="/">Ozodbek Nurmamatov</Link>
        </div>
        <nav>
          <Navbar />
          <SocialNetwork />
        </nav>
      </div>
    </header>
  );
}
