import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./App";

const $root = document.querySelector("#app-root");

createRoot($root).render(<App />);
