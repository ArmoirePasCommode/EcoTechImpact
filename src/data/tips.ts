import { TipType } from '../types';
import { 
  Mail, Monitor, Cloud, Search, Smartphone, Bookmark, 
  Moon, WifiOff, Save, Brain, Database, Trash2 
} from 'lucide-react';

export const initialTips: TipType[] = [
  {
    id: 1,
    title: "Nettoyer votre boîte mail",
    description: "Supprimez les emails inutiles et désabonnez-vous des newsletters que vous ne lisez pas. Chaque email stocké consomme de l'énergie sur les serveurs.",
    impact: 4 * 365, // 4g CO2 per day for a year
    difficulty: "easy",
    category: "emails",
    icon: "Mail"
  },
  {
    id: 2,
    title: "Réduire la qualité du streaming",
    description: "Regarder des vidéos en 720p au lieu de 4K peut réduire jusqu'à 90% de l'empreinte carbone associée.",
    impact: 18 * 52, // 18g CO2 savings per hour, weekly for a year
    difficulty: "easy",
    category: "streaming",
    icon: "Monitor"
  },
  {
    id: 3,
    title: "Nettoyer votre stockage cloud",
    description: "Supprimez les fichiers inutiles de votre cloud pour réduire l'énergie nécessaire au stockage de vos données.",
    impact: 50 * 10, // 50g CO2 per 10GB cleaned
    difficulty: "medium",
    category: "cloud",
    icon: "Cloud"
  },
  {
    id: 4,
    title: "Utiliser des favoris",
    description: "Enregistrez les sites que vous visitez fréquemment dans vos favoris plutôt que de les rechercher à chaque fois.",
    impact: 0.2 * 365 * 5, // 0.2g CO2 per search, 5 searches saved daily for a year
    difficulty: "easy",
    category: "browsing",
    icon: "Bookmark"
  },
  {
    id: 5,
    title: "Activer le mode sombre",
    description: "Le mode sombre peut réduire la consommation d'énergie de votre écran OLED jusqu'à 30%.",
    impact: 35 * 365, // 35g CO2 saved per day for a year
    difficulty: "easy",
    category: "devices",
    icon: "Moon"
  },
  {
    id: 6,
    title: "Désactiver le WiFi la nuit",
    description: "Éteignez votre routeur WiFi pendant la nuit pour économiser de l'énergie.",
    impact: 45 * 365, // 45g CO2 saved per day for a year
    difficulty: "easy",
    category: "devices",
    icon: "WifiOff"
  },
  {
    id: 7,
    title: "Optimiser vos requêtes d'IA",
    description: "Formulez des requêtes précises et concises pour réduire le temps de calcul et l'énergie consommée par les modèles d'IA.",
    impact: 10 * 365, // 10g CO2 saved per day for a year
    difficulty: "medium",
    category: "ai",
    icon: "Brain"
  },
  {
    id: 8,
    title: "Conserver vos appareils plus longtemps",
    description: "Prolonger la durée de vie de vos appareils de 1 an réduit considérablement leur impact environnemental.",
    impact: 80000 / 3, // 80kg CO2 for manufacture, divided over 3 years
    difficulty: "medium",
    category: "devices",
    icon: "Smartphone"
  },
  {
    id: 9,
    title: "Télécharger plutôt que streamer",
    description: "Pour les contenus que vous regardez plusieurs fois, téléchargez-les une fois plutôt que de les streamer à chaque visionnage.",
    impact: 36 * 52, // 36g CO2 per hour, weekly for a year
    difficulty: "easy",
    category: "streaming",
    icon: "Save"
  },
  {
    id: 10,
    title: "Nettoyer vos données inutilisées",
    description: "Supprimez les applications, photos et fichiers inutilisés pour réduire l'espace de stockage et l'énergie nécessaire à leur sauvegarde.",
    impact: 50 * 5, // 50g CO2 per 5GB cleaned
    difficulty: "medium",
    category: "cloud",
    icon: "Trash2"
  },
  {
    id: 11,
    title: "Limiter les requêtes de base de données",
    description: "Pour les développeurs: optimisez vos requêtes de base de données pour réduire la consommation énergétique des serveurs.",
    impact: 5 * 365, // 5g CO2 per day for a year
    difficulty: "hard",
    category: "cloud",
    icon: "Database"
  },
  {
    id: 12,
    title: "Utiliser un moteur de recherche éco-responsable",
    description: "Certains moteurs de recherche comme Ecosia plantent des arbres avec leurs revenus publicitaires.",
    impact: 0.1 * 365 * 15, // 0.1g CO2 savings per search, 15 searches daily for a year
    difficulty: "easy",
    category: "browsing",
    icon: "Search"
  }
];