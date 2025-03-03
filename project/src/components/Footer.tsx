import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/gustavolopes', label: 'GitHub' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/gustavolopes', label: 'Twitter' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/gustavolopes', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:contact@gustavolopes.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#e6ddd6] text-[#5c5c5c] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} Gustavo Lopes. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-[#5c5c5c] hover:text-[#a67c52] transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;