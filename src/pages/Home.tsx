import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import { Brain, Database, Smartphone, Video, BookOpen, FileText, BarChart3, LineChart } from 'lucide-react';

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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos sources de données
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Toutes nos estimations sont basées sur des études scientifiques et rapports d'organisations reconnues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-lg font-semibold">Emails et Navigation</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• ADEME - "La face cachée du numérique" (2019)</li>
                <li>• 4g CO₂ par email avec pièce jointe</li>
                <li>• Impact des recherches web et stockage</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-lg font-semibold">Streaming et Médias</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• The Shift Project "Impact environnemental du numérique" (2020)</li>
                <li>• Carbon Trust "The carbon impact of video streaming" (2021)</li>
                <li>• 36g CO₂ par heure de streaming HD</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-lg font-semibold">Appareils et Hardware</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Rapport ADEME sur l'impact des smartphones (2019)</li>
                <li>• Études du Green IT</li>
                <li>• 80kg CO₂ pour la fabrication d'un smartphone</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <LineChart className="h-6 w-6 text-primary-500 mr-3" />
                <h3 className="text-lg font-semibold">Intelligence Artificielle</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• "Energy and Policy Considerations for Deep Learning in NLP" (2019)</li>
                <li>• MIT Technology Review</li>
                <li>• Greenpeace "Clicking Clean" report</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;