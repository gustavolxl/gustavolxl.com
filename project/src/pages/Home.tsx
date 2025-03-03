import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/gustavolopes', label: 'GitHub' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com/gustavolopes', label: 'Twitter' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/gustavolopes', label: 'LinkedIn' },
    { icon: <Mail size={24} />, url: 'mailto:contact@gustavolopes.com', label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-serif font-bold text-center text-[#3d3d3d] mb-6"
          variants={itemVariants}
        >
          Gustavo Lopes
        </motion.h1>

        <motion.div
          className="flex justify-center space-x-4 mb-8"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-[#5c5c5c] hover:text-[#a67c52] transition-colors"
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="prose prose-lg max-w-none text-center mb-12"
          variants={itemVariants}
        >
          <p className="text-lg text-[#5c5c5c] leading-relaxed">
            Olá! Sou um entusiasta da tecnologia, literatura e filosofia. Através deste espaço, compartilho reflexões sobre temas que me fascinam, desde desenvolvimento de software até análises literárias. Acredito no poder transformador das ideias e na importância de cultivar um pensamento crítico e criativo.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
          variants={itemVariants}
        >
          <Link to="/blog">
            <motion.button
              className="w-full md:w-auto px-6 py-3 bg-[#a67c52] text-white rounded-md font-medium flex items-center justify-center space-x-2 hover:bg-[#8a6642] transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Leia o Blog</span>
              <ArrowRight size={18} />
            </motion.button>
          </Link>

          <Link to="/book-reviews">
            <motion.button
              className="w-full md:w-auto px-6 py-3 bg-transparent border border-[#a67c52] text-[#a67c52] rounded-md font-medium flex items-center justify-center space-x-2 hover:bg-[#f0e9e2] transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Ver Resenhas de Livros</span>
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;