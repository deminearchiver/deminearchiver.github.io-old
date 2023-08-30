import { JSX, ParentComponent } from "solid-js";

const Surface: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (
  props,
) => {
  return <div {...props} />;
};

export default Surface;
