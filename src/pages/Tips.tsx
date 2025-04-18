import React from 'react';
import Layout from '../components/Layout/Layout';
import TipsList from '../components/Tips/TipsList';

const Tips: React.FC = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Astuces pour réduire votre empreinte numérique</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez des conseils simples et efficaces pour réduire l'impact environnemental de vos activités numériques quotidiennes. Engagez-vous à mettre en pratique celles qui vous conviennent.
              </p>
            </div>
            
            <TipsList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tips;