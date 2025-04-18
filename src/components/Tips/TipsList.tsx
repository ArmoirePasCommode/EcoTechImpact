import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';
import { Mail, Monitor, Cloud, Search, Smartphone, Bookmark, Moon, WifiOff, Save, Brain, Database, Trash2 } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const TipsList: React.FC = () => {
  const { tips, userProgress, commitToTip } = useAppContext();
  const [filterCategory, setFilterCategory] = React.useState<string | null>(null);
  const [filterDifficulty, setFilterDifficulty] = React.useState<string | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail size={20} />;
      case 'Monitor': return <Monitor size={20} />;
      case 'Cloud': return <Cloud size={20} />;
      case 'Search': return <Search size={20} />;
      case 'Smartphone': return <Smartphone size={20} />;
      case 'Bookmark': return <Bookmark size={20} />;
      case 'Moon': return <Moon size={20} />;
      case 'WifiOff': return <WifiOff size={20} />;
      case 'Save': return <Save size={20} />;
      case 'Brain': return <Brain size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Trash2': return <Trash2 size={20} />;
      default: return <Mail size={20} />;
    }
  };

  const filteredTips = tips.filter(tip => {
    return (!filterCategory || tip.category === filterCategory) && 
           (!filterDifficulty || tip.difficulty === filterDifficulty);
  });

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={filterCategory === null ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilterCategory(null)}
        >
          Toutes
        </Button>
        <Button
          variant={filterCategory === 'devices' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilterCategory('devices')}
          icon={<Smartphone size={16} />}
        >
          Appareils
        </Button>
        <Button
          variant={filterCategory === 'browsing' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilterCategory('browsing')}
          icon={<Search size={16} />}
        >
          Navigation
        </Button>
        <Button
          variant={filterCategory === 'streaming' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilterCategory('streaming')}
          icon={<Monitor size={16} />}
        >
          Streaming
        </Button>
        <Button
          variant={filterCategory === 'emails' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilterCategory('emails')}
          icon={<Mail size={16} />}
        >
          Emails
        </Button>
        <Button
          variant={filterCategory === 'cloud' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilterCategory('cloud')}
          icon={<Cloud size={16} />}
        >
          Cloud
        </Button>
        <Button
          variant={filterCategory === 'ai' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilterCategory('ai')}
          icon={<Brain size={16} />}
        >
          IA
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={filterDifficulty === null ? 'secondary' : 'outline'}
          size="sm"
          onClick={() => setFilterDifficulty(null)}
        >
          Toutes difficultés
        </Button>
        <Button
          variant={filterDifficulty === 'easy' ? 'secondary' : 'outline'}
          size="sm"
          onClick={() => setFilterDifficulty('easy')}
        >
          Facile
        </Button>
        <Button
          variant={filterDifficulty === 'medium' ? 'secondary' : 'outline'}
          size="sm"
          onClick={() => setFilterDifficulty('medium')}
        >
          Intermédiaire
        </Button>
        <Button
          variant={filterDifficulty === 'hard' ? 'secondary' : 'outline'}
          size="sm"
          onClick={() => setFilterDifficulty('hard')}
        >
          Avancé
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map((tip, index) => {
          const isCommitted = userProgress.committedTips.includes(tip.id);

          return (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full relative">
                <div className="absolute top-2 right-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    tip.difficulty === 'easy' ? 'bg-success-100 text-success-800' : 
                    tip.difficulty === 'medium' ? 'bg-warning-100 text-warning-800' : 
                    'bg-error-100 text-error-800'
                  }`}>
                    {tip.difficulty === 'easy' ? 'Facile' : 
                     tip.difficulty === 'medium' ? 'Intermédiaire' : 
                     'Avancé'}
                  </span>
                </div>

                <div className="flex items-center text-primary-500 mb-3">
                  {getIconComponent(tip.icon)}
                  <h3 className="ml-2 text-lg font-semibold text-gray-800">{tip.title}</h3>
                </div>

                <p className="text-gray-600 mb-4">{tip.description}</p>

                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-primary-600 font-medium">
                      Impact: {(tip.impact / 1000).toFixed(1)} kg CO₂e/an
                    </div>
                    <Button
                      variant={isCommitted ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => commitToTip(tip.id)}
                    >
                      {isCommitted ? 'Appliqué' : 'S\'engager'}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TipsList;