import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className = '',
  onClick,
  interactive = false,
  icon,
}) => {
  const cardVariants = {
    hover: { 
      y: -5,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    tap: { 
      y: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }
  };

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${interactive ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      variants={interactive ? cardVariants : undefined}
      whileHover={interactive ? 'hover' : undefined}
      whileTap={interactive ? 'tap' : undefined}
      transition={{ duration: 0.2 }}
    >
      <div className="p-5">
        {(title || icon) && (
          <div className="flex items-center mb-3">
            {icon && <div className="mr-3 text-primary-500">{icon}</div>}
            {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
          </div>
        )}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </motion.div>
  );
};

export default Card;