import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Counter from '../ui/Counter';
import Card from '../ui/Card';
import { Trophy, Leaf, UserCheck } from 'lucide-react';

const ImpactDashboard: React.FC = () => {
  const { userProgress, tips, challenges } = useAppContext();

  // Calculate stats
  const committedTipsCount = userProgress.committedTips.length;
  const completedChallengesCount = userProgress.completedChallenges.length;
  const activeChallengesCount = userProgress.activeChallenges.length;

  // For annual impact equivalents
  const treesEquivalent = (userProgress.totalImpact / 1000) / 21; // ~21kg CO2 absorbed by a tree annually
  const kmNotDriven = (userProgress.totalImpact / 1000) * 5; // ~200g CO2 per km driven

  // For pie chart - impact by category
  const tipImpactByCategory = userProgress.committedTips.reduce((acc, tipId) => {
    const tip = tips.find(t => t.id === tipId);
    if (tip) {
      acc[tip.category] = (acc[tip.category] || 0) + tip.impact;
    }
    return acc;
  }, {} as Record<string, number>);

  const challengeImpactByCategory = userProgress.completedChallenges.reduce((acc, challengeId) => {
    const challenge = challenges.find(c => c.id === challengeId);
    if (challenge) {
      acc[challenge.category] = (acc[challenge.category] || 0) + challenge.impact;
    }
    return acc;
  }, {} as Record<string, number>);

  // Merge both impact sources
  const impactByCategory: Record<string, number> = { ...tipImpactByCategory };
  Object.entries(challengeImpactByCategory).forEach(([category, impact]) => {
    impactByCategory[category] = (impactByCategory[category] || 0) + impact;
  });

  const pieData = Object.entries(impactByCategory).map(([category, impact]) => ({
    name: getCategoryName(category),
    value: impact / 1000, // Convert to kg
  }));

  const COLORS = ['#2D6A4F', '#1A73E8', '#B7791F', '#14B8A6', '#7E22CE', '#F97316'];

  function getCategoryName(category: string): string {
    switch (category) {
      case 'devices': return 'Appareils';
      case 'browsing': return 'Navigation';
      case 'streaming': return 'Streaming';
      case 'emails': return 'Emails';
      case 'cloud': return 'Cloud';
      case 'ai': return 'IA';
      default: return category;
    }
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Votre impact positif</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-primary-50">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="ml-3 text-lg font-medium text-gray-800">CO₂ économisé</h3>
            </div>
            <Counter 
              value={userProgress.totalImpact / 1000} 
              decimals={1}
              suffix=" kg" 
              label="Équivalent CO₂ évité par an"
            />
          </Card>
          
          <Card className="bg-secondary-50">
            <div className="flex items-center mb-4">
              <div className="bg-secondary-100 p-2 rounded-lg">
                <Trophy className="h-6 w-6 text-secondary-500" />
              </div>
              <h3 className="ml-3 text-lg font-medium text-gray-800">Défis complétés</h3>
            </div>
            <Counter 
              value={completedChallengesCount} 
              suffix={completedChallengesCount === 1 ? " défi" : " défis"} 
              label={`Défis actifs: ${activeChallengesCount}`}
            />
          </Card>
          
          <Card className="bg-accent-50">
            <div className="flex items-center mb-4">
              <div className="bg-accent-100 p-2 rounded-lg">
                <UserCheck className="h-6 w-6 text-accent-500" />
              </div>
              <h3 className="ml-3 text-lg font-medium text-gray-800">Astuces adoptées</h3>
            </div>
            <Counter 
              value={committedTipsCount} 
              suffix={committedTipsCount === 1 ? " astuce" : " astuces"} 
              label={`Sur un total de ${tips.length}`}
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Équivalences de votre impact</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Arbres plantés équivalents</span>
                  <span className="text-lg font-medium text-primary-600">{treesEquivalent.toFixed(1)} arbres</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kilomètres non conduits</span>
                  <span className="text-lg font-medium text-primary-600">{kmNotDriven.toFixed(0)} km</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Équivalent en smartphones</span>
                  <span className="text-lg font-medium text-primary-600">
                    {((userProgress.totalImpact / 1000) / 80).toFixed(2)} smartphones
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Impact par catégorie</h3>
            
            {pieData.length > 0 ? (
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value.toFixed(1)} kg CO₂`, 'Économie']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-500">Adoptez des astuces et complétez des défis pour voir votre impact par catégorie</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactDashboard;