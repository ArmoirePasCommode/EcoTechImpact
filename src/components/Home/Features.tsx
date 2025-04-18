import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Trophy, Database, Share2 } from 'lucide-react';
import Card from '../ui/Card';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Calculator size={24} />,
      title: 'Calculateur d\'impact',
      description: 'Estimez l\'empreinte carbone de vos activités numériques quotidiennes.',
    },
    {
      icon: <Trophy size={24} />,
      title: 'Défis écologiques',
      description: 'Participez à des défis thématiques pour réduire progressivement votre impact.',
    },
    {
      icon: <Database size={24} />,
      title: 'Suivi de progression',
      description: 'Visualisez vos améliorations et l\'impact positif de vos changements d\'habitudes.',
    },
    {
      icon: <Share2 size={24} />,
      title: 'Partage communautaire',
      description: 'Partagez vos réussites et inspirez votre entourage à adopter des pratiques numériques responsables.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Comment fonctionne <span className="text-primary-500">EcoTech Impact</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Notre plateforme vous aide à comprendre et à réduire l'impact environnemental de vos activités numériques à travers plusieurs fonctionnalités.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                title={feature.title}
                description={feature.description}
                icon={<div className="text-primary-500">{feature.icon}</div>}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;