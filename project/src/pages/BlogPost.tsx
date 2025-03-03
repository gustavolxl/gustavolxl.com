import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;

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
        className="max-w-3xl mx-auto"
      >
        <motion.button
          onClick={() => navigate('/blog')}
          className="flex items-center text-[#5c5c5c] hover:text-[#a67c52] transition-colors mb-8"
          variants={itemVariants}
          whileHover={{ x: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Voltar para o blog</span>
        </motion.button>
        
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] mb-6">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-[#8a8a8a]">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{post.date}</span>
            </div>
            
            <div className="flex items-center">
              <Tag size={16} className="mr-1" />
              <span>{post.category}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#3d3d3d] mb-6">
            {post.title}
          </h1>
        </motion.div>
        
        <motion.div 
          className="prose prose-lg max-w-none"
          variants={itemVariants}
        >
          {post.content.map((paragraph, index) => {
            if (paragraph.type === 'text') {
              return (
                <p key={index} className="text-[#5c5c5c] mb-6 leading-relaxed">
                  {paragraph.content}
                </p>
              );
            } else if (paragraph.type === 'heading') {
              return (
                <h2 key={index} className="text-2xl font-serif font-bold text-[#3d3d3d] mt-8 mb-4">
                  {paragraph.content}
                </h2>
              );
            } else if (paragraph.type === 'image') {
              return (
                <div key={index} className="my-8">
                  <img 
                    src={paragraph.src} 
                    alt={paragraph.alt} 
                    className="w-full rounded-lg"
                  />
                  {paragraph.caption && (
                    <p className="text-center text-sm text-[#8a8a8a] mt-2">
                      {paragraph.caption}
                    </p>
                  )}
                </div>
              );
            } else if (paragraph.type === 'quote') {
              return (
                <blockquote key={index} className="border-l-4 border-[#a67c52] pl-4 italic my-6">
                  <p className="text-[#5c5c5c]">{paragraph.content}</p>
                  {paragraph.author && (
                    <footer className="text-[#8a8a8a] mt-2">— {paragraph.author}</footer>
                  )}
                </blockquote>
              );
            }
            return null;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogPost;