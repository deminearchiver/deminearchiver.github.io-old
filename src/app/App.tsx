import { Component } from "solid-js";
import styles from "./app.module.css";

const App: Component = () => {
  return (
    <div id={styles["app"]}>
      <nav id={styles["sidebar"]}></nav>
      <main>
        <h1>Heading</h1>
        <h2>Subheading</h2>
      </main>
    </div>
  );
};
export default App;
