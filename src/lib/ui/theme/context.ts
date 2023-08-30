import { createContext, useContext } from "solid-js";

export const ThemeContext = createContext();
export const useTheme = useContext(ThemeContext);
