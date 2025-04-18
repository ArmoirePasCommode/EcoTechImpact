export interface TipType {
  id: number;
  title: string;
  description: string;
  impact: number; // CO2 reduction in grams
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'devices' | 'browsing' | 'streaming' | 'emails' | 'cloud' | 'ai';
  icon: string;
}

export interface ChallengeType {
  id: number;
  title: string;
  description: string;
  duration: number; // in days
  impact: number; // CO2 reduction in grams
  category: 'devices' | 'browsing' | 'streaming' | 'emails' | 'cloud' | 'ai';
  icon: string;
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
}

export interface UserProgressType {
  totalImpact: number; // total CO2 reduction in grams
  activeChallenges: number[];
  completedChallenges: number[];
  committedTips: number[];
}

export interface CalculatorInputs {
  emailsPerDay: number;
  streamingHoursPerWeek: number;
  socialMediaHoursPerDay: number;
  cloudStorageGB: number;
  searchQueriesPerDay: number;
  deviceUsageYears: number;
  aiUsage: 'none' | 'light' | 'moderate' | 'heavy';
}

export interface CO2Impact {
  category: string;
  value: number;
  unit: string;
}