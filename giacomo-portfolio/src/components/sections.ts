import type { Education, Experience, Skill } from "../data/cv";

// Titolo standard per le sezioni (Profilo, Esperienze, ...).
export function sectionTitle(title: string, subtitle?: string) {
  return `
    <header class="section__header">
      <h2 class="section__title">${title}</h2>
      ${subtitle ? `<p class="section__subtitle">${subtitle}</p>` : ""}
    </header>
  `;
}

// Lista semplice (ul/li). Utile per profilo, hobby, note, ecc.
export function renderList(items: string[]) {
  return `<ul class="list">${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
}

// Card istruzione.
export function renderEducation(items: Education[]) {
  return items
    .map(
      (e) => `
      <article class="card">
        <div class="card__top">
          <h3 class="card__title">${e.title}</h3>
          <span class="pill">${e.start} – ${e.end}</span>
        </div>
        <p class="card__meta">${e.place}</p>
      </article>
    `
    )
    .join("");
}

// Card esperienze.
export function renderExperiences(items: Experience[]) {
  return items
    .map(
      (x) => `
      <article class="card">
        <div class="card__top">
          <h3 class="card__title">${x.title}</h3>
          <span class="pill">${x.start} – ${x.end}</span>
        </div>
        <p class="card__meta">${x.company}</p>
        <p class="card__text">${x.description}</p>
      </article>
    `
    )
    .join("");
}

// Badge per skill (tipo “pill”).
export function renderSkillBadges(items: Skill[]) {
  return `<div class="badges">${items
    .map((s) => `<span class="badge">${s.name}</span>`)
    .join("")}</div>`;
}
