"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] relative">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-70"></div>
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-full bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 animate-slow-spin"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        </div>
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none lg:pr-12 mb-12 lg:mb-0"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 text-sm font-medium mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Now with AI-powered learning paths
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            Learn Anything
            <br />
            <span className="text-blue-600">Anywhere</span>
          </motion.h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
            Transform your learning with AI-powered study tools. Create smart notes,
            flashcards, and get personalized learning materials that adapt to you.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-medium rounded-full group transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:scale-105"
            >
              Start Learning - It&apos;s Free
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-medium rounded-full border-gray-300 hover:border-gray-900 hover:text-gray-900 transition-all duration-300 group"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
            <div>
              <div className="font-bold text-2xl">50K+</div>
              <div className="text-gray-600 text-sm">Active Users</div>
            </div>
            <div>
              <div className="font-bold text-2xl">4.9/5</div>
              <div className="text-gray-600 text-sm">User Rating</div>
            </div>
            <div>
              <div className="font-bold text-2xl">98%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </motion.div>
        
        {/* Hero Image */}
        <div className="flex-1 relative">
          <div className="relative w-full aspect-square max-w-xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl">
              {/* Mock UI Elements */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded-full"></div>
                  <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="h-24 bg-blue-50 rounded-xl"></div>
                  <div className="h-24 bg-purple-50 rounded-xl"></div>
                  <div className="h-24 bg-pink-50 rounded-xl"></div>
                  <div className="h-24 bg-green-50 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 