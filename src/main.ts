import "./styles/global.css";
import "./styles/theme.css";
import "./styles/layout.css";

import { renderApp } from "./components/App";

const root = document.querySelector<HTMLDivElement>("#app");
if (!root) throw new Error("Elemento #app non trovato");

root.innerHTML = renderApp();

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href")?.slice(1);
    const el = id ? document.getElementById(id) : null;
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  });
});
