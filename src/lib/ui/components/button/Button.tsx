import { Component, JSX, ParentComponent } from "solid-js";

import styles from "./Button.module.css";

const Button: ParentComponent = props => {
  return <button class={styles["button"]}>{props.children}</button>;
};

export default Button;
