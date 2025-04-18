import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Leaf, MousePointer, Zap } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Réduisez votre 
                <span className="text-primary-500"> empreinte numérique</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Découvrez l'impact environnemental de vos habitudes digitales et prenez des mesures concrètes pour réduire votre empreinte carbone numérique.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg"
                  onClick={() => navigate('/calculator')}
                  icon={<Zap />}
                >
                  Calculer mon impact
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/tips')}
                  icon={<MousePointer />}
                >
                  Découvrir les astuces
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="relative aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3987020/pexels-photo-3987020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                    alt="Digital planet" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <span className="font-medium">Le saviez-vous?</span>
                      <p className="text-sm">Le numérique représente 4% des émissions mondiales de gaz à effet de serre</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <div className="text-primary-500 mb-1"><Zap size={18} /></div>
                    <div className="text-sm font-medium text-gray-900">2.5%</div>
                    <div className="text-xs text-gray-500">de la consommation électrique mondiale</div>
                  </div>
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <div className="text-primary-500 mb-1"><Leaf size={18} /></div>
                    <div className="text-sm font-medium text-gray-900">+6.7%</div>
                    <div className="text-xs text-gray-500">d'augmentation par an</div>
                  </div>
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <div className="text-primary-500 mb-1"><MousePointer size={18} /></div>
                    <div className="text-sm font-medium text-gray-900">1.6 kg</div>
                    <div className="text-xs text-gray-500">de CO₂ par heure de streaming 4K</div>
                  </div>
                </div>
              </div>
              
              <motion.div
                className="absolute -top-6 -right-6 bg-secondary-500 text-white p-3 rounded-full shadow-lg"
                animate={{ 
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.05, 1, 1.05, 1] 
                }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
              >
                <Leaf size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;