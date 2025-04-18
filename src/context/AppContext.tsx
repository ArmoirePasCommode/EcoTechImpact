import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TipType, ChallengeType, UserProgressType, CalculatorInputs, CO2Impact } from '../types';
import { initialTips } from '../data/tips';
import { initialChallenges } from '../data/challenges';

interface AppContextType {
  tips: TipType[];
  challenges: ChallengeType[];
  userProgress: UserProgressType;
  calculatorInputs: CalculatorInputs;
  calculatorResults: CO2Impact[];
  updateCalculatorInputs: (inputs: Partial<CalculatorInputs>) => void;
  calculateImpact: () => void;
  commitToTip: (tipId: number) => void;
  startChallenge: (challengeId: number) => void;
  completeChallenge: (challengeId: number) => void;
  completeTask: (challengeId: number, taskId: number) => void;
}

const defaultCalculatorInputs: CalculatorInputs = {
  emailsPerDay: 20,
  streamingHoursPerWeek: 10,
  socialMediaHoursPerDay: 2,
  cloudStorageGB: 5,
  searchQueriesPerDay: 15,
  deviceUsageYears: 2,
  aiUsage: 'light',
};

const defaultUserProgress: UserProgressType = {
  totalImpact: 0,
  activeChallenges: [],
  completedChallenges: [],
  committedTips: [],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tips, setTips] = useState<TipType[]>(initialTips);
  const [challenges, setChallenges] = useState<ChallengeType[]>(initialChallenges);
  const [userProgress, setUserProgress] = useState<UserProgressType>(defaultUserProgress);
  const [calculatorInputs, setCalculatorInputs] = useState<CalculatorInputs>(defaultCalculatorInputs);
  const [calculatorResults, setCalculatorResults] = useState<CO2Impact[]>([]);

  // Load saved data from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('eco-progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }

    const savedInputs = localStorage.getItem('eco-calculator');
    if (savedInputs) {
      setCalculatorInputs(JSON.parse(savedInputs));
    }
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('eco-progress', JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    localStorage.setItem('eco-calculator', JSON.stringify(calculatorInputs));
  }, [calculatorInputs]);

  const updateCalculatorInputs = (inputs: Partial<CalculatorInputs>) => {
    setCalculatorInputs((prev) => ({ ...prev, ...inputs }));
  };

  const calculateImpact = () => {
    // These are approximate values for educational purposes
    const emailImpact = calculatorInputs.emailsPerDay * 4 * 365; // 4g CO2 per email, annually
    const streamingImpact = calculatorInputs.streamingHoursPerWeek * 36 * 52; // 36g CO2 per hour, annually
    const socialMediaImpact = calculatorInputs.socialMediaHoursPerDay * 12 * 365; // 12g CO2 per hour, annually
    const cloudImpact = calculatorInputs.cloudStorageGB * 50; // ~50g CO2 per GB per year
    const searchImpact = calculatorInputs.searchQueriesPerDay * 0.2 * 365; // ~0.2g CO2 per search, annually
    
    const deviceFactor = Math.max(1, 3 - calculatorInputs.deviceUsageYears); // Longer usage is better
    const deviceImpact = 80000 / calculatorInputs.deviceUsageYears; // ~80kg CO2 for manufacture, divided by years of use
    
    // AI usage impact
    let aiImpact = 0;
    switch (calculatorInputs.aiUsage) {
      case 'none': aiImpact = 0; break;
      case 'light': aiImpact = 50000; break; // 50kg annually
      case 'moderate': aiImpact = 150000; break; // 150kg annually
      case 'heavy': aiImpact = 400000; break; // 400kg annually
    }

    const results: CO2Impact[] = [
      { category: 'Emails', value: emailImpact / 1000, unit: 'kg CO₂e/an' },
      { category: 'Streaming', value: streamingImpact / 1000, unit: 'kg CO₂e/an' },
      { category: 'Réseaux sociaux', value: socialMediaImpact / 1000, unit: 'kg CO₂e/an' },
      { category: 'Stockage cloud', value: cloudImpact / 1000, unit: 'kg CO₂e/an' },
      { category: 'Recherches web', value: searchImpact / 1000, unit: 'kg CO₂e/an' },
      { category: 'Appareils', value: deviceImpact / 1000, unit: 'kg CO₂e/an' },
      { category: 'IA', value: aiImpact / 1000, unit: 'kg CO₂e/an' },
    ];

    setCalculatorResults(results);
  };

  const commitToTip = (tipId: number) => {
    const tip = tips.find(t => t.id === tipId);
    if (!tip) return;

    if (userProgress.committedTips.includes(tipId)) {
      setUserProgress(prev => ({
        ...prev,
        committedTips: prev.committedTips.filter(id => id !== tipId),
        totalImpact: prev.totalImpact - tip.impact
      }));
    } else {
      setUserProgress(prev => ({
        ...prev,
        committedTips: [...prev.committedTips, tipId],
        totalImpact: prev.totalImpact + tip.impact
      }));
    }
  };

  const startChallenge = (challengeId: number) => {
    const challenge = challenges.find(c => c.id === challengeId);
    if (!challenge) return;

    if (userProgress.activeChallenges.includes(challengeId)) return;

    const updatedChallenges = challenges.map(c => 
      c.id === challengeId 
        ? { ...c, tasks: c.tasks.map(t => ({ ...t, completed: false })) } 
        : c
    );

    setChallenges(updatedChallenges);
    
    setUserProgress(prev => ({
      ...prev,
      activeChallenges: [...prev.activeChallenges, challengeId]
    }));
  };

  const completeChallenge = (challengeId: number) => {
    const challenge = challenges.find(c => c.id === challengeId);
    if (!challenge) return;

    setUserProgress(prev => ({
      ...prev,
      activeChallenges: prev.activeChallenges.filter(id => id !== challengeId),
      completedChallenges: [...prev.completedChallenges, challengeId],
      totalImpact: prev.totalImpact + challenge.impact
    }));
  };

  const completeTask = (challengeId: number, taskId: number) => {
    const updatedChallenges = challenges.map(c => 
      c.id === challengeId 
        ? { 
            ...c, 
            tasks: c.tasks.map(t => 
              t.id === taskId ? { ...t, completed: !t.completed } : t
            ) 
          } 
        : c
    );

    setChallenges(updatedChallenges);

    // Check if all tasks are completed
    const challenge = updatedChallenges.find(c => c.id === challengeId);
    if (challenge && challenge.tasks.every(t => t.completed)) {
      completeChallenge(challengeId);
    }
  };

  return (
    <AppContext.Provider
      value={{
        tips,
        challenges,
        userProgress,
        calculatorInputs,
        calculatorResults,
        updateCalculatorInputs,
        calculateImpact,
        commitToTip,
        startChallenge,
        completeChallenge,
        completeTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};