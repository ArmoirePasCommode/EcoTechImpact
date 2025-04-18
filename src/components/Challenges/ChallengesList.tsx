import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';
import { Mail, Video, PhoneOff, Moon, Brain, BarChart } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';

const ChallengesList: React.FC = () => {
  const { challenges, userProgress, startChallenge, completeTask } = useAppContext();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail size={20} />;
      case 'Video': return <Video size={20} />;
      case 'PhoneOff': return <PhoneOff size={20} />;
      case 'Moon': return <Moon size={20} />;
      case 'Brain': return <Brain size={20} />;
      case 'BarChart': return <BarChart size={20} />;
      default: return <Mail size={20} />;
    }
  };

  const getChallengeStatus = (challengeId: number) => {
    if (userProgress.completedChallenges.includes(challengeId)) {
      return 'completed';
    }
    if (userProgress.activeChallenges.includes(challengeId)) {
      return 'active';
    }
    return 'inactive';
  };

  const getCompletedTaskCount = (challengeId: number) => {
    const challenge = challenges.find(c => c.id === challengeId);
    if (!challenge) return 0;
    return challenge.tasks.filter(t => t.completed).length;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {challenges.map((challenge, index) => {
        const status = getChallengeStatus(challenge.id);
        const completedTasks = getCompletedTaskCount(challenge.id);
        const totalTasks = challenge.tasks.length;

        return (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card 
              className={`h-full border-l-4 ${
                status === 'completed' ? 'border-l-success-500' : 
                status === 'active' ? 'border-l-primary-500' : 
                'border-l-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className={`${
                    status === 'completed' ? 'text-success-500' : 
                    status === 'active' ? 'text-primary-500' : 
                    'text-gray-400'
                  }`}>
                    {getIconComponent(challenge.icon)}
                  </div>
                  <h3 className="ml-2 text-lg font-semibold text-gray-800">{challenge.title}</h3>
                </div>
                <span className="text-sm text-gray-500">{challenge.duration} jours</span>
              </div>

              <p className="text-gray-600 mb-4">{challenge.description}</p>

              {status === 'active' && (
                <div className="mb-4">
                  <div className="mb-3">
                    <ProgressBar 
                      value={completedTasks} 
                      max={totalTasks} 
                      label="Progression" 
                      color={completedTasks === totalTasks ? 'success-500' : 'primary-500'}
                    />
                  </div>
                  <ul className="space-y-2">
                    {challenge.tasks.map(task => (
                      <li key={task.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => completeTask(challenge.id, task.id)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <span className={`ml-2 text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                          {task.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-primary-600 font-medium">
                    Impact: {(challenge.impact / 1000).toFixed(1)} kg CO₂e
                  </div>
                  {status === 'inactive' && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => startChallenge(challenge.id)}
                    >
                      Commencer
                    </Button>
                  )}
                  {status === 'completed' && (
                    <span className="text-sm font-medium text-success-500">Défi complété</span>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ChallengesList;