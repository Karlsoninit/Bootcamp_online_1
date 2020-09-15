import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";
import config from "../config/pagesConfig";
console.log(
  "config",
  Object.keys(config).map((key) => ({ ...config[key] }))
);

export function Nav() {
  return (
    <ul className={styles.container}>
      {Object.keys(config)
        .map((key) => ({ ...config[key] }))
        .map(({ pathname, componentName }) => (
          <li key={componentName}>
            <NavLink
              activeClassName={styles.linkFocusColor}
              exact
              to={pathname}
            >
              {componentName}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}
