'use client';

import { motion } from 'framer-motion';
import { Home, MessageCircle, Search } from 'lucide-react';
import Link from 'next/link';
import BackgroundSquares from '@/app/components/ui/BackgroundSquares';

export default function GlobalNotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundSquares className="absolute inset-0 opacity-40" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl lg:text-[12rem]  text-transparent bg-gradient-to-r from-primary via-primary to-neutral bg-clip-text leading-none">
            404
          </h1>
        </motion.div>

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl  text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-4">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p className="text-base md:text-lg text-white/60">
            The page you&apos;re trying to access may have been moved, deleted, or you entered an incorrect URL.
          </p>
        </motion.div>

        {/* Search Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-primary/30 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 md:w-16 md:h-16 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Back to Home
          </Link>

          <span className="text-white/60 font-medium hidden sm:block">
            or
          </span>

          <Link
            href="/en/contato"
            className="group inline-flex items-center gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Contact Support
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <div className="flex justify-center space-x-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-2 h-2 bg-primary rounded-full opacity-60"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
