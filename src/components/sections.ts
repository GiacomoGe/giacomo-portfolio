import type { Education, Experience, Skill } from "../data/cv";

export function sectionTitle(title: string, subtitle?: string) {
  return `
    <header class="section__header">
      <h2 class="section__title">${title}</h2>
      ${subtitle ? `<p class="section__subtitle">${subtitle}</p>` : ""}
    </header>
  `;
}

// Lista semplice (ul/li). Utile per profilo, hobby, note, ecc.
export function renderList(items: string[], hideBullets: boolean = false) {
  const className = hideBullets ? 'list list--no-bullets' : 'list';
  return `<ul class="${className}">${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;
}

// Card istruzione
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

// Card esperienze
export function renderExperiences(items: Experience[]) {
  return items
    .map(
      (x) => `
      <article class="card card--experience">
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

// Badge per skill
export function renderSkillBadges(items: Skill[]) {
  return `<div class="skills">${items
    .map((s) => `
      <div class="skill">
        <div class="skill__header">
          <span class="skill__name">${s.name}</span>
          <span class="skill__level">${s.level || 0}%</span>
        </div>
        <div class="skill__bar">
          <div class="skill__progress" style="width: ${s.level || 0}%"></div>
        </div>
      </div>
    `)
    .join("")}</div>`;
}
