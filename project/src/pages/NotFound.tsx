import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center">
      <motion.div 
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-serif font-bold text-[#a67c52] mb-6">404</h1>
        <h2 className="text-2xl font-medium text-[#3d3d3d] mb-4">Página não encontrada</h2>
        <p className="text-[#5c5c5c] mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <motion.button
            className="px-6 py-3 bg-[#a67c52] text-white rounded-md font-medium flex items-center justify-center space-x-2 hover:bg-[#8a6642] transition-colors mx-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft size={18} className="mr-2" />
            <span>Voltar para a página inicial</span>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;