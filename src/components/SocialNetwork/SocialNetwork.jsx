import classNames from "classnames";
import style from "../Header/header.module.scss";
import { socialNetworksData } from "../../utils";

export function SocialNetwork() {
  return (
    <div className={classNames(style["social-network"])}>
      {socialNetworksData.map(({ id, icon, link, name }) => {
        return (
          <a href={link} key={id} target="_blank" rel="noreferrer">
            <img src={icon} alt={name} />
          </a>
        );
      })}
    </div>
  );
}
