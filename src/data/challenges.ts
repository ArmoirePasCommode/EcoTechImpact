import { ChallengeType } from '../types';

export const initialChallenges: ChallengeType[] = [
  {
    id: 1,
    title: "Semaine sans streaming HD",
    description: "Réduisez la qualité de vos vidéos à 720p pendant une semaine pour diminuer considérablement votre empreinte carbone numérique.",
    duration: 7,
    impact: 18 * 10 * 7, // 18g CO2 savings per hour, 10 hours per week
    category: "streaming",
    icon: "Video",
    tasks: [
      { id: 1, title: "Modifier les paramètres sur Netflix", completed: false },
      { id: 2, title: "Modifier les paramètres sur YouTube", completed: false },
      { id: 3, title: "Regarder 5 vidéos en qualité réduite", completed: false },
      { id: 4, title: "Partager ce défi avec un ami", completed: false }
    ]
  },
  {
    id: 2,
    title: "Nettoyage de boîte mail",
    description: "Supprimez au moins 100 emails inutiles et désabonnez-vous d'au moins 5 newsletters que vous ne lisez pas.",
    duration: 3,
    impact: 4 * 100, // 4g CO2 per email, 100 emails
    category: "emails",
    icon: "Mail",
    tasks: [
      { id: 1, title: "Supprimer 50 anciens emails", completed: false },
      { id: 2, title: "Supprimer 50 emails supplémentaires", completed: false },
      { id: 3, title: "Se désabonner de 5 newsletters", completed: false },
      { id: 4, title: "Créer un filtre pour les futurs emails non désirés", completed: false }
    ]
  },
  {
    id: 3,
    title: "Déconnexion numérique",
    description: "Réduisez votre temps d'écran quotidien de 2 heures pendant 5 jours. Moins de temps en ligne = moins d'émissions de CO2.",
    duration: 5,
    impact: 24 * 2 * 5, // 24g CO2 per 2 hours for 5 days
    category: "devices",
    icon: "PhoneOff",
    tasks: [
      { id: 1, title: "Configurer un rappel de temps d'écran", completed: false },
      { id: 2, title: "Rester déconnecté pendant au moins 2h/jour", completed: false },
      { id: 3, title: "Remplacer le temps d'écran par une activité sans technologie", completed: false },
      { id: 4, title: "Noter les bénéfices ressentis", completed: false }
    ]
  },
  {
    id: 4,
    title: "Maître du mode sombre",
    description: "Activez le mode sombre sur tous vos appareils et applications pendant 14 jours pour économiser de l'énergie.",
    duration: 14,
    impact: 35 * 14, // 35g CO2 saved per day for 14 days
    category: "devices",
    icon: "Moon",
    tasks: [
      { id: 1, title: "Activer le mode sombre sur votre téléphone", completed: false },
      { id: 2, title: "Activer le mode sombre sur votre ordinateur", completed: false },
      { id: 3, title: "Activer le mode sombre dans vos applications", completed: false },
      { id: 4, title: "Activer le mode sombre dans votre navigateur", completed: false }
    ]
  },
  {
    id: 5,
    title: "Minimisation de l'IA",
    description: "Limitez consciemment votre utilisation des outils d'IA pendant une semaine et observez l'impact sur votre productivité.",
    duration: 7,
    impact: 1000 * 7, // ~1kg CO2 saved per day for 7 days
    category: "ai",
    icon: "Brain",
    tasks: [
      { id: 1, title: "Établir un quota quotidien de requêtes IA", completed: false },
      { id: 2, title: "Rechercher des alternatives moins intensives en énergie", completed: false },
      { id: 3, title: "Documenter les cas d'utilisation indispensables", completed: false },
      { id: 4, title: "Créer une stratégie d'utilisation durable de l'IA", completed: false }
    ]
  },
  {
    id: 6,
    title: "Audit numérique",
    description: "Analysez et optimisez votre empreinte numérique en identifiant vos principales sources de consommation.",
    duration: 10,
    impact: 500 * 10, // ~500g CO2 saved per day for 10 days
    category: "cloud",
    icon: "BarChart",
    tasks: [
      { id: 1, title: "Vérifier l'espace utilisé sur vos clouds", completed: false },
      { id: 2, title: "Supprimer 10 applications inutilisées", completed: false },
      { id: 3, title: "Désactiver les synchronisations automatiques non essentielles", completed: false },
      { id: 4, title: "Créer un plan de gestion des données", completed: false }
    ]
  }
];