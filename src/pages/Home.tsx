import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import { Brain, Database, Smartphone, Video } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              L'impact du numérique sur l'environnement
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Le secteur numérique génère plus de gaz à effet de serre que l'aviation civile. 
              Voici quelques chiffres qui illustrent l'empreinte environnementale de nos activités digitales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Video className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1.6 kg</h3>
              <p className="text-gray-600">de CO₂ émis par heure de streaming vidéo en 4K</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4%</h3>
              <p className="text-gray-600">des émissions mondiales de gaz à effet de serre sont dues au numérique</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500 kg</h3>
              <p className="text-gray-600">de CO₂ émis en moyenne par an pour un utilisateur intensif d'IA</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">80 kg</h3>
              <p className="text-gray-600">de CO₂ émis pour la fabrication d'un smartphone</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;