export type Skill = { name: string; level?: number };
export type Experience = {
  title: string;
  company: string;
  start: string;
  end: string;
  description: string;
};
export type Education = {
  title: string;
  place: string;
  start: string;
  end: string;
};

export const cv = {
  name: "Giacomo Gerbotto",
  role: "Informatico",
  location: "Cuneo (CN), Italia",
  contacts: {
    phone: "+39 331 4157154",
    email: "giacomo.gerbotto@gmail.com"
    // github: "https://github.com/...",
    // linkedin: "https://linkedin.com/in/..."
  },
  profile: [
    `Sono un professionista IT con competenze trasversali in ambito
    informatico, acquisite attraverso un mix di formazione accademica e
    concreta esperienza sul campo.
    Mi distinguo per la mia precisione e una naturale inclinazione al lavoro
    di squadra.
    Sono una persona determinata, volenterosa e con una forte
    propensione alla crescita professionale.
    Cerco un contesto stimolante dove mettere a frutto le mie
    competenze e sviluppare ulteriormente il mio potenziale manageriale
    ed informatico`
  ],
  education: [
    {
      title: "Diploma in elettronica ed elettrotecnica",
      place: "Istituto Tecnico Industriale Statale",
      start: "2013",
      end: "2018"
    },
    {
      title: "Laurea Triennale in Informatica per le aziende digitali",
      place: "Università Pegaso",
      start: "2022",
      end: "2025"
    }
  ] as Education[],
  experiences: [
    {
      title: "Operatore di punto vendita",
      company: "NovaCoop, Cuneo",
      start: "02/2024",
      end: "02/2025",
      description: "Addetto alle vendite con mansioni di cassa part-time per coprire spese universitarie."
    },
    {
      title: "Brand advisor",
      company: "Pardgroup",
      start: "07/2023",
      end: "08/2023",
      description: "Attività di brand advising per coprire le spese universitarie."
    },
    {
      title: "Tecnico informatico",
      company: "Sguang Informatica",
      start: "02/2021",
      end: "08/2022",
      description: "Gestione interventi hardware/software, supporto utenti e risoluzione criticità IT."
    },
    {
      title: "Assistente bagnanti (brevetto FIN)",
      company: "Centro Sportivo Roero Granda, Cuneo",
      start: "2018",
      end: "2022",
      description: "Attività di assistenza bagnanti e sicurezza in piscina."
    }
  ] as Experience[],
  languages: [
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "B2" }
  ],
  programming: [
    { name: "HTML5", level: 80 },
    { name: "CSS3", level: 80 },
    { name: "JavaScript", level: 65 },
    { name: "TypeScript", level: 65 },
    { name: "SQL", level: 75 },
    { name: "Git", level: 75 },
    { name: "Angular", level: 60 }
  ] as Skill[],
  tools: ["VS Code", "Arduino", "Acronis", "MPS Monitor"],
  hobbies: ["Videogiochi (strategici)", "Nuoto e corsa", "Magia"],
  notes: ["Patente B, automunito"]
};
