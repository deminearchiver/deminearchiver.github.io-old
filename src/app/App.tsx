import { Component } from "solid-js";
import styles from "./App.module.css";
import Button from "../lib/ui/components/button/Button";
import HoverProvider from "../lib/hover/HoverProvider";



const App: Component = () => {
  return (
    <div id={styles["app"]}>
      <HoverProvider>

      </HoverProvider>
    </div>
  );
};

export default App;
