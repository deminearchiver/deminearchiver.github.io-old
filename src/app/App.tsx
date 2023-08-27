import { Component } from "solid-js";
import styles from "./App.module.css";
import Button from "../lib/ui/components/button/Button";



const App: Component = () => {
  return (
    <div id={styles["app"]}>
      <header>
        <div>
          
        </div>
      </header>
      <main>
        <Button>Test</Button>
        <Button>Test</Button>
        <Button>Test</Button>
      </main>
    </div>
  );
};

export default App;
