import React from 'react';
import Layout from '../components/Layout/Layout';
import ImpactDashboard from '../components/Impact/ImpactDashboard';

const Impact: React.FC = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Votre impact positif</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visualisez l'impact positif de vos actions et engagements pour réduire votre empreinte numérique. Chaque petit geste compte dans la lutte contre le changement climatique.
              </p>
            </div>
            
            <ImpactDashboard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Impact;