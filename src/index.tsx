/* @refresh reload */
import { lazy } from "solid-js";
import { render } from "solid-js/web";

const Wrapper = lazy(
  () => 
    location.hostname.endsWith("pages.dev")
    ? import("./app/wrapper/Cloudflare")
    : location.hostname.endsWith("github.io") 
    ? import("./app/wrapper/GitHub")
    : import("./app/wrapper/Other")
)

render(() => <Wrapper />, document.getElementById("root")!);
