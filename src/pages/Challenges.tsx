import React from 'react';
import Layout from '../components/Layout/Layout';
import ChallengesList from '../components/Challenges/ChallengesList';

const Challenges: React.FC = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Défis écologiques numériques</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Participez à des défis thématiques pour réduire votre empreinte numérique tout en développant de nouvelles habitudes durables. Suivez votre progression et mesurez votre impact positif.
              </p>
            </div>
            
            <ChallengesList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Challenges;