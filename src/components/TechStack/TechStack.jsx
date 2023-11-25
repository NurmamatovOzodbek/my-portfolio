import classNames from "classnames";
import style from "./tech-stack.module.scss";
import { technologiesData } from "../../utils";

export function TechStack() {
  return (
    <div className={classNames(style["tech-stack"], style.container)}>
      <div className={classNames(style.title)}>
        <h3>My Tech Stack</h3>
        <p>Technologies I’ve been working</p>
      </div>
      <div className={classNames(style.technologies)}>
        {technologiesData.slice(0,6).map(({ id, name, image }) => {
          return <img src={image} alt={name} key={id} />;
        })}
      </div>
    </div>
  );
}
