import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Button from '../ui/Button';
import { Calculator as Calculate } from 'lucide-react';

const CalculatorForm: React.FC = () => {
  const { calculatorInputs, updateCalculatorInputs, calculateImpact } = useAppContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'aiUsage') {
      updateCalculatorInputs({ [name]: value as any });
    } else {
      updateCalculatorInputs({ [name]: Number(value) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateImpact();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Calculez votre empreinte numérique</h2>
      <p className="text-gray-600 mb-6">
        Renseignez vos habitudes numériques quotidiennes pour estimer l'impact environnemental de votre consommation digitale.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="emailsPerDay" className="block text-sm font-medium text-gray-700 mb-1">
              Emails par jour
            </label>
            <input
              type="number"
              id="emailsPerDay"
              name="emailsPerDay"
              value={calculatorInputs.emailsPerDay}
              onChange={handleInputChange}
              min="0"
              className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label htmlFor="streamingHoursPerWeek" className="block text-sm font-medium text-gray-700 mb-1">
              Heures de streaming par semaine
            </label>
            <input
              type="number"
              id="streamingHoursPerWeek"
              name="streamingHoursPerWeek"
              value={calculatorInputs.streamingHoursPerWeek}
              onChange={handleInputChange}
              min="0"
              className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label htmlFor="socialMediaHoursPerDay" className="block text-sm font-medium text-gray-700 mb-1">
              Heures sur les réseaux sociaux par jour
            </label>
            <input
              type="number"
              id="socialMediaHoursPerDay"
              name="socialMediaHoursPerDay"
              value={calculatorInputs.socialMediaHoursPerDay}
              onChange={handleInputChange}
              min="0"
              className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label htmlFor="cloudStorageGB" className="block text-sm font-medium text-gray-700 mb-1">
              Stockage cloud utilisé (GB)
            </label>
            <input
              type="number"
              id="cloudStorageGB"
              name="cloudStorageGB"
              value={calculatorInputs.cloudStorageGB}
              onChange={handleInputChange}
              min="0"
              className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label htmlFor="searchQueriesPerDay" className="block text-sm font-medium text-gray-700 mb-1">
              Recherches web par jour
            </label>
            <input
              type="number"
              id="searchQueriesPerDay"
              name="searchQueriesPerDay"
              value={calculatorInputs.searchQueriesPerDay}
              onChange={handleInputChange}
              min="0"
              className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label htmlFor="deviceUsageYears" className="block text-sm font-medium text-gray-700 mb-1">
              Durée d'utilisation moyenne de vos appareils (années)
            </label>
            <input
              type="number"
              id="deviceUsageYears"
              name="deviceUsageYears"
              value={calculatorInputs.deviceUsageYears}
              onChange={handleInputChange}
              min="1"
              max="10"
              className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label htmlFor="aiUsage" className="block text-sm font-medium text-gray-700 mb-1">
              Utilisation des outils d'IA
            </label>
            <select
              id="aiUsage"
              name="aiUsage"
              value={calculatorInputs.aiUsage}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="none">Aucune</option>
              <option value="light">Légère (quelques fois par mois)</option>
              <option value="moderate">Modérée (quelques fois par semaine)</option>
              <option value="heavy">Intensive (plusieurs fois par jour)</option>
            </select>
          </div>
        </div>

        <Button 
          type="submit" 
          fullWidth 
          size="lg"
          icon={<Calculate size={20} />}
        >
          Calculer mon impact
        </Button>
      </form>
    </div>
  );
};

export default CalculatorForm;