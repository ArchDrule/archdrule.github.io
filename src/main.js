import { mount } from "svelte";

import "./style/output.css";
import App from "./App.svelte";

const app = mount(App, {
    target: document.getElementById("app"),
});

export default app;
