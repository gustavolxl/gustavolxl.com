import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { bookReviews } from '../data/bookReviews';

const BookReviews = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={18}
        className={`${
          index < rating ? 'text-[#a67c52] fill-[#a67c52]' : 'text-[#d1c7bc]'
        }`}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-serif font-bold text-[#3d3d3d] mb-8"
          variants={itemVariants}
        >
          Resenhas de Livros
        </motion.h1>
        
        <motion.p 
          className="text-lg text-[#5c5c5c] mb-12"
          variants={itemVariants}
        >
          Uma coleção de livros que li e minhas avaliações pessoais.
        </motion.p>
        
        <div className="grid grid-cols-1 gap-4">
          {bookReviews.map((book, index) => (
            <motion.div
              key={book.id}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-[#e6ddd6]"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-xl font-serif font-bold text-[#3d3d3d] mb-2">
                    {book.title}
                  </h2>
                  <p className="text-[#8a8a8a] mb-3">
                    {book.author}
                  </p>
                </div>
                
                <div className="flex items-center mt-2 md:mt-0">
                  <div className="flex mr-2">
                    {renderStars(book.rating)}
                  </div>
                  <span className="text-sm font-medium text-[#5c5c5c]">
                    {book.rating}/5
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BookReviews;