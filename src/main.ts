// Importiamo i CSS da qui perché Vite li include nel bundle e li aggiorna in dev (HMR). [web:25]
import "./styles/global.css";
import "./styles/theme.css";
import "./styles/layout.css";

// Importiamo la funzione che genera la “pagina” (HTML string).
import { renderApp } from "./components/App";

// Selezioniamo il contenitore principale definito in index.html.
// querySelector può restituire null: in TS lo gestiamo in modo sicuro. [web:38][web:44]
const root = document.querySelector<HTMLDivElement>("#app");
if (!root) throw new Error("Elemento #app non trovato");

// Montiamo l'app: mettiamo l'HTML dentro #app.
root.innerHTML = renderApp();

/**
 * Navigazione “smooth” per link con hash (#profilo, #esperienze, ...).
 * - Ti permette di avere una pagina unica navigabile (stile portfolio).
 * - Se un domani vuoi cambiare in multi-pagina, questa parte si può togliere. [web:38]
 */
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
