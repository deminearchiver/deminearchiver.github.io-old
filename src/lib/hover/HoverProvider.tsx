import { ParentComponent, createSignal } from "solid-js";
import { HoverContext } from "./HoverContext";

const HoverProvider: ParentComponent = props => {
  const [ref, setRef] = createSignal<HTMLElement>();
  const hovering = () => !!ref();

  const setHover = (element: HTMLElement, hover: boolean): boolean => {
    if (hover && !Object.is(element, ref())) setRef(element);
    else if (!hover && Object.is(element, ref())) setRef();
    return hovering();
  };

  return (
    <HoverContext.Provider
      value={{
        hovering,
        setHover,
      }}
    >
      {props.children}
    </HoverContext.Provider>
  );
};

export default HoverProvider;
