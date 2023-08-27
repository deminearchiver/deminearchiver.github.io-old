import { useContext } from "solid-js";
import { HoverContext } from "./HoverContext";

export const useHover = () => useContext(HoverContext);