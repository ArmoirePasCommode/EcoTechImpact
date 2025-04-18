import React from 'react';
import Layout from '../components/Layout/Layout';
import CalculatorForm from '../components/Calculator/CalculatorForm';
import ResultsDisplay from '../components/Calculator/ResultsDisplay';
import TipsList from '../components/Tips/TipsList';

const Calculator: React.FC = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Calculateur d'empreinte numérique</h1>
              <p className="text-gray-600">
                Estimez l'impact environnemental de vos activités numériques quotidiennes et découvrez comment le réduire.
              </p>
            </div>
            
            <CalculatorForm />
            <ResultsDisplay />
            
            <div id="tips" className="mt-16">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Astuces pour réduire votre impact</h2>
                <p className="text-gray-600">
                  Découvrez des moyens simples et efficaces de réduire votre empreinte carbone numérique.
                </p>
              </div>
              
              <TipsList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calculator;