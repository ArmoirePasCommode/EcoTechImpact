import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Counter from '../ui/Counter';
import { AlertCircle, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const ResultsDisplay: React.FC = () => {
  const { calculatorResults } = useAppContext();
  const navigate = useNavigate();

  if (calculatorResults.length === 0) {
    return null;
  }

  const totalImpact = calculatorResults.reduce((sum, item) => sum + item.value, 0);
  const maxImpact = Math.max(...calculatorResults.map(item => item.value));
  
  // For comparison
  const annualCarEmissions = 2000; // kg CO2 for average car driven 10,000 km
  const percentOfCar = (totalImpact / annualCarEmissions) * 100;

  const chartColors = [
    '#2D6A4F', '#1A73E8', '#B7791F', '#14B8A6', '#7E22CE', '#EF4444', '#F97316'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Résultats de votre empreinte numérique</h2>
      
      <div className="mb-8 text-center">
        <Counter 
          value={totalImpact} 
          suffix=" kg CO₂e/an" 
          duration={1.5} 
          decimals={1}
          label="Émissions totales estimées par an" 
          className="text-4xl"
        />
        
        <div className="mt-2 text-sm text-gray-600">
          Cela représente environ <span className="font-medium">{percentOfCar.toFixed(1)}%</span> des émissions annuelles d'une voiture moyenne.
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Répartition par catégorie</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={calculatorResults} layout="vertical" margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
              <XAxis type="number" unit=" kg" />
              <YAxis type="category" dataKey="category" width={100} />
              <Tooltip 
                formatter={(value: number) => [`${value.toFixed(1)} kg CO₂e/an`, 'Émissions']}
                labelFormatter={(label) => `Catégorie: ${label}`}
              />
              <Bar dataKey="value" name="Émissions annuelles">
                {calculatorResults.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-primary-50 p-4 rounded-lg mb-6">
        <div className="flex">
          <div className="mr-3 text-primary-500">
            <AlertCircle size={24} />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Comment interpréter ces résultats?</h4>
            <p className="text-sm text-gray-600 mt-1">
              Ces estimations sont basées sur des moyennes et peuvent varier selon les services spécifiques que vous utilisez.
              L'objectif est de vous aider à identifier les domaines où vous pouvez réduire votre empreinte numérique.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
        <Button 
          onClick={() => window.location.href = "#tips"}
          variant="secondary"
          icon={<ArrowRight size={18} />}
        >
          Voir les conseils de réduction
        </Button>
        
        <Button 
          onClick={() => navigate('/challenges')}
        >
          Participer à un défi
        </Button>
      </div>
    </motion.div>
  );
};

export default ResultsDisplay;