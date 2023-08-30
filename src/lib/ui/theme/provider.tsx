import { ParentComponent } from "solid-js";
import { ThemeContext } from "./context";

interface IThemeProvider {}
const Theme: ParentComponent<IThemeProvider> = (props) => {
  return (
    <ThemeContext.Provider value={null}>{props.children}</ThemeContext.Provider>
  );
};

export default Theme;
