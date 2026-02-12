import { cv } from "../data/cv";
import {
  renderEducation,
  renderExperiences,
  renderList,
  renderSkillBadges,
  sectionTitle
} from "./sections";

export function renderApp() {
  return `
  <div class="page">
    <aside class="sidebar">
      <div class="sidebar__header">
        <!-- Avatar: per ora è un cerchio CSS. In futuro lo sostituiamo con una foto. -->
        <img class="avatar-img" src="/profile.jpg" alt="..." />

        <div>
          <h1 class="name">${cv.name}</h1>
          <p class="role">${cv.role}</p>
          <p class="muted">${cv.location}</p>
        </div>
      </div>

      <!-- Menu con ancore: deve combaciare con gli id delle sezioni nel main -->
      <nav class="nav" aria-label="Navigazione portfolio">
        <a href="#profilo">Profilo</a>
        <a href="#esperienze">Esperienze</a>
        <a href="#istruzione">Istruzione</a>
        <a href="#competenze">Competenze</a>
        <a href="#contatti">Contatti</a>
      </nav>

      <section class="sidebar__section" id="contatti">
        <h2 class="sidebar__title">Contatti</h2>
        <ul class="list">
          <li><a href="mailto:${cv.contacts.email}">${cv.contacts.email}</a></li>
          <li><a href="tel:${cv.contacts.phone.replaceAll(" ", "")}">${cv.contacts.phone}</a></li>
        </ul>
      </section>

      <section class="sidebar__section">
        <h2 class="sidebar__title">Lingue</h2>
        <ul class="list">
          ${cv.languages.map((l) => `<li>${l.name} — ${l.level}</li>`).join("")}
        </ul>
      </section>

      <section class="sidebar__section">
        <h2 class="sidebar__title">Stack</h2>
        ${renderSkillBadges(cv.programming)}
      </section>

      <section class="sidebar__section">
        <h2 class="sidebar__title">Tool</h2>
        ${renderList(cv.tools)}
      </section>
    </aside>

    <main class="main">
      <section class="section" id="profilo">
        ${sectionTitle("Profilo professionale")}
        ${renderList(cv.profile)}
      </section>

      <section class="section" id="esperienze">
        ${sectionTitle("Esperienze lavorative")}
        <div class="cards">
          ${renderExperiences(cv.experiences)}
        </div>
      </section>

      <section class="section" id="istruzione">
        ${sectionTitle("Istruzione")}
        <div class="cards">
          ${renderEducation(cv.education)}
        </div>
      </section>

      <section class="section" id="competenze">
        ${sectionTitle("Extra & interessi")}
        <div class="grid2">
          <div class="panel">
            <h3 class="panel__title">Hobby e sport</h3>
            ${renderList(cv.hobbies)}
          </div>
          <div class="panel">
            <h3 class="panel__title">Note</h3>
            ${renderList(cv.notes)}
          </div>
        </div>
      </section>

      <footer class="footer">
        <p class="muted">© ${new Date().getFullYear()} Autorizzo il trattamento dei dati personali contenuti nel mio curriculum
        vitae in base al D.Lgs. 196/2003 e al Regolamento UE 2016/679</p>
      </footer>
    </main>
  </div>
  `;
}
