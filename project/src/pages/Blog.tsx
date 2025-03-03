import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
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
          Blog
        </motion.h1>
        
        <motion.p 
          className="text-lg text-[#5c5c5c] mb-12"
          variants={itemVariants}
        >
          Reflexões, ideias e experiências sobre tecnologia, literatura e a vida.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#e6ddd6]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-[#f0e9e2] text-[#a67c52] rounded-full mb-4">
                  {post.category}
                </span>
                
                <h2 className="text-xl font-serif font-bold text-[#3d3d3d] mb-3">
                  {post.title}
                </h2>
                
                <p className="text-[#5c5c5c] mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8a8a8a]">
                    {post.date}
                  </span>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="flex items-center text-[#a67c52] font-medium hover:text-[#8a6642] transition-colors"
                  >
                    <span>Ler mais</span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight size={16} className="ml-1" />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;