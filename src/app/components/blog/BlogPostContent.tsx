"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/app/data/blogPosts";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  // In a real application, you would parse markdown content here
  // For now, we'll display the content as is with some basic formatting
  
  return (
    <motion.div 
      className="prose prose-lg max-w-none dark:prose-invert mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium leading-relaxed border-l-4 border-[var(--color-primary)] pl-6 bg-gray-50 dark:bg-gray-800/50 py-4 rounded-r-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {post.excerpt}
      </motion.div>
      
      <motion.div 
        className="text-gray-900 dark:text-white leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* This is where you would render parsed markdown content */}
        <p className="mb-6 text-lg leading-relaxed">
          {post.content}
        </p>
        
        {/* Sample additional content - in a real app this would come from your CMS */}
        <motion.h2 
          className="text-3xl  mt-8 mb-6 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Principais Pontos
        </motion.h2>
        <motion.ul 
          className="list-none pl-0 mb-8 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 bg-[var(--color-primary)] rounded-full mt-3 mr-4"></span>
            <span className="text-lg">Inovação tecnológica está transformando o setor financeiro</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 bg-[var(--color-primary)] rounded-full mt-3 mr-4"></span>
            <span className="text-lg">APIs facilitam a integração entre diferentes sistemas</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 bg-[var(--color-primary)] rounded-full mt-3 mr-4"></span>
            <span className="text-lg">Segurança continua sendo uma prioridade fundamental</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 bg-[var(--color-primary)] rounded-full mt-3 mr-4"></span>
            <span className="text-lg">O mercado brasileiro apresenta grandes oportunidades</span>
          </li>
        </motion.ul>
        
        <motion.h2 
          className="text-3xl  mt-8 mb-6 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Conclusão
        </motion.h2>
        <motion.p 
          className="mb-8 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          O futuro dos pagamentos digitais promete ser cada vez mais integrado e eficiente. 
          As empresas que investirem em tecnologia e segurança estarão melhor posicionadas 
          para aproveitar as oportunidades que surgem neste mercado em constante evolução.
        </motion.p>
        
        <motion.div 
          className="bg-[var(--color-primary)]/10 dark:bg-[var(--color-primary)]/20 border-l-4 border-[var(--color-primary)] p-6 my-8 rounded-r-lg shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-gray-800 dark:text-gray-200 font-medium text-lg">
            💡 <strong className="text-[var(--color-primary)]">Dica:</strong> Mantenha-se sempre atualizado com as últimas tendências 
            do mercado financeiro para não perder oportunidades de inovação.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
