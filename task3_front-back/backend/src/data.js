const leaders = [
  { id: 1, name: "Anna Smith", role: "President", avatar: "/images/avatar1.png"},
  { id: 2, name: "Anna Smith", role: "Architecte", avatar: "/images/avatar2.png"},
  { id: 3, name: "Anna Smith", role: "Manager", avatar: "/images/avatar3.png"},
  { id: 4, name: "Anna Smith", role: "Ambassadeur", avatar: "/images/avatar4.png"},
  { id: 5, name: "Anna Smith", role: "Leader", avatar: "/images/avatar5.png"},
  { id: 6, name: "Anna Smith", role: "Leader", avatar: "/images/avatar6.png"}
];

const jobs = [
  { id: 1, type: "Stage", title: "Responsable", company: "Attijari wafabank", flag: "logo", description: "Aperçu de l offre à mettre ici" },
  { id: 2, type: "Stage", title: "Développeur Web", company: "Attijari wafabank", flag: "logo", description: "Recherche d un développeur web créatif" },
  { id: 3, type: "Stage", title: "Chargé de Marketing", company: "Attijari wafabank", flag: "logo", description: "Créer des campagnes marketing innovantes" },
  { id: 4, type: "Stage", title: "Analyste de Données", company: "Attijari wafabank", flag: "logo", description: "Analyser les données pour prendre des décisions" },
  { id: 5, type: "Stage", title: "Designer UI/UX", company: "Attijari wafabank", flag: "logo", description: "Créer des interfaces utilisateur modernes" },
  { id: 6, type: "Stage", title: "Chef de Projet", company: "Attijari wafabank", flag: "logo", description: "Gérer des projets complexes en équipe" },
  { id: 7, type: "Stage", title: "Ingenieur Backend", company: "Attijari wafabank", flag: "logo", description: "Développer des APIs RESTful performantes" },
  { id: 8, type: "Stage", title: "RH", company: "Attijari wafabank", flag: "logo", description: "Gérer les ressources humaines" }
];

const news = [
  { id: 1, category: "divers", title: "Un exemple de titre", text: "In this article we will cover how to create user flows", image: "/images/actua1.png", date: "2024-01-30" },
  { id: 2, category: "events", title: "Un deuxième exemple de titre", text: "What are Design Principles? To understand design principles.", image: "/images/actua23.png", date: "2024-01-28" },
  { id: 3, category: "world", title: "Un troisième exemple de titre", text: "What are Design Principles? To understand design principles.", image: "/images/actua23.png", date: "2024-01-25" }
];

const testimonials = [
  { id: 1, text: "Distinctively re-engineer revolutionary service and premium At vero accusamus et iusto blandiris praesentum voluptatem delenit atque comedi quos dolores.", author: "Victor Murphy", role: "Manager", avatar: "/images/avatar7.png" },
  { id: 2, text: "Completely synergize resource taxing relationships via premier. Professionally cultivate one-to-one customer service with robust ideas.", author: "Ne Peeter Walker", role: "Responsable", avatar: "/images/avatar8.png" },
  { id: 3, text: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital.", author: "Nan Petty Calvin", role: "Président-directeur général", avatar: "/images/avatar9.png" },
  { id: 4, text: "Distinctively re-engineer revolutionary service and premium At vero accusamus et iusto blandiris praesentum.", author: "Nancy Mithi", role: "Manager", avatar: "/images/avatar10.png" }
];

const stats = {
  students: 8640,
  alumni: 40,
  associations: 40,
  partners: 4
};


let newsletterSubscribers = [
  { id: 1, email: "test@example.com", date: "2024-01-01" }
];

let members = [
  { id: 1, name: "salma", email: "salma@example.com", role: "ingenieur", country: "canada" },
  { id: 2, name: "name", email: "name@example.com", role: "rh", country: "france" }
];

module.exports = { leaders, jobs, news, testimonials, stats, newsletterSubscribers, members };