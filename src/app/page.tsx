"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Play, FileText, Zap, Brain, Layers, Sparkles, MessageCircle, Upload, FileSearch, BookOpen, Lightbulb, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 }
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFAQ, setOpenFAQ] = useState(0);

  const testimonials = [
    {
      text: "ViteLearn has completely transformed how I study for medical exams. The AI-generated summaries and flashcards have cut my study time in half, and I'm retaining more information than ever before.",
      name: "Sarah Johnson",
      role: "Medical Student",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      text: "As a law student, I deal with massive amounts of reading. ViteLearn's ability to create concise summaries and interactive quizzes has been a game-changer for my bar exam preparation.",
      name: "Michael Chen",
      role: "Law Student",
      gradient: "from-blue-400 to-green-400"
    },
    {
      text: "The chat feature is incredible! Being able to ask questions about my lecture videos and get instant, accurate answers has made online learning so much more effective.",
      name: "Emily Rodriguez",
      role: "Engineering Student",
      gradient: "from-orange-400 to-red-400"
    },
    {
      text: "I'm a visual learner, and ViteLearn's ability to extract key points from YouTube videos and create study materials is perfect for me. My grades have improved significantly!",
      name: "David Kim",
      role: "Computer Science Student",
      gradient: "from-indigo-400 to-purple-400"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <main className="pt-16">
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

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                Powerful Features
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Supercharge<br />Your Learning
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform transforms how you study, making learning faster,
                more effective, and personalized to your needs.
              </p>
            </div>

            {/* Feature Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {/* Smart Note Creation */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Smart Note Creation</h3>
                <p className="text-gray-600">
                  Create comprehensive notes from YouTube videos, PDFs, audio recordings, and live
                  sessions with AI-powered extraction.
                </p>
                <div className="mt-6 flex items-center text-blue-600 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>

              {/* Auto-Generated Flashcards */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Auto-Generated Flashcards</h3>
                <p className="text-gray-600">
                  Transform your notes into intelligent flashcards automatically, with spaced
                  repetition for optimal memory retention.
                </p>
                <div className="mt-6 flex items-center text-purple-600 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>

              {/* Interactive Quizzes */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
                  <Brain className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Interactive Quizzes</h3>
                <p className="text-gray-600">
                  Generate personalized quizzes from your study materials to test your knowledge and
                  track your progress.
                </p>
                <div className="mt-6 flex items-center text-green-600 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>

              {/* Detailed Study Notes */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-300">
                  <Layers className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Detailed Study Notes</h3>
                <p className="text-gray-600">
                  Get comprehensive, structured notes with key concepts, definitions, and important
                  points highlighted automatically.
                </p>
                <div className="mt-6 flex items-center text-orange-600 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>

              {/* AI Summaries */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Summaries</h3>
                <p className="text-gray-600">
                  Receive concise, intelligent summaries of your content that capture the most
                  important information and insights.
                </p>
                <div className="mt-6 flex items-center text-indigo-600 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>

              {/* Chat with Materials */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Chat with Materials</h3>
                <p className="text-gray-600">
                  Have interactive conversations with your YouTube videos, PDFs, and notes. Ask
                  questions and get instant answers.
                </p>
                <div className="mt-6 flex items-center text-pink-600 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6">
                Simple Process
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                How It<br />Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your study materials into effective learning resources in just a few
                simple steps.
              </p>
            </div>

            {/* Steps Container */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-5xl mx-auto relative"
            >
              {/* Connecting Line */}
              <div className="absolute left-[45px] md:left-[61px] top-[80px] bottom-[80px] w-0.5 bg-gray-200 hidden md:block"></div>

              {/* Steps */}
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-20"
              >
                {/* Step 1 */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row items-start gap-8 group"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Upload className="w-7 h-7 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Upload Your Materials</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          Start by uploading your study materials—lecture notes, textbooks, videos, or audio files.
                          Our platform supports a wide range of formats to accommodate your learning needs.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">PDF Files</span>
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Video Content</span>
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Audio Lectures</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row items-start gap-8 group"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <FileSearch className="w-7 h-7 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI Processes Content</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          Our advanced AI analyzes your materials, identifying key concepts, facts, and relationships.
                          The system creates a knowledge graph to understand how different topics connect.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Smart Analysis</span>
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Topic Mapping</span>
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Key Concepts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row items-start gap-8 group"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-green-200 group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-7 h-7 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Generate Study Resources</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          Create summaries, flashcards, quizzes, and personalized study guides with a single click.
                          All resources are optimized for your learning style and goals.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Smart Summaries</span>
                          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Custom Flashcards</span>
                          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Practice Tests</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row items-start gap-8 group"
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                      4
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="w-7 h-7 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Learn & Improve</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          Study with AI-optimized materials that adapt to your progress and learning style.
                          Track your progress and receive personalized recommendations.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">Adaptive Learning</span>
                          <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">Progress Tracking</span>
                          <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">Smart Recommendations</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-black text-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                What Our Users<br />Are Saying
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Join thousands of students who have transformed their learning experience
                with ViteLearn.
              </p>
            </div>

            {/* Testimonial Carousel */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              {/* Single Testimonial Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 rounded-3xl p-10 md:p-12 border border-gray-800"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-gray-300 text-center mb-10 italic leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} rounded-full`}></div>
                  <div>
                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-6 mt-12">
                {/* Previous Button */}
                <button 
                  onClick={prevTestimonial}
                  className="w-14 h-14 rounded-full border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button 
                  onClick={nextTestimonial}
                  className="w-14 h-14 rounded-full border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6"
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
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Simple<br />Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the plan that works best for your learning needs
              </p>
            </div>

            {/* Pricing Toggle */}
            <div className="flex justify-center mb-16">
              <div className="bg-white rounded-full p-1 shadow-sm border">
                <div className="flex">
                  <button 
                    onClick={() => setIsAnnual(false)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      !isAnnual ? 'bg-black text-white' : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Monthly
                  </button>
                  <button 
                    onClick={() => setIsAnnual(true)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      isAnnual ? 'bg-black text-white' : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Annual <span className="text-xs ml-1">Save 44%</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {isAnnual ? 'Standard Yearly' : 'Standard Monthly'}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {isAnnual 
                    ? 'Access to all features with yearly billing (save 20%)'
                    : 'Access to all features with monthly billing'
                  }
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">
                      {isAnnual ? '$8.33' : '$15.00'}
                    </span>
                    <span className="text-gray-500">/ month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {isAnnual ? 'Billed $100 annually' : 'Billed $15 monthly'}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Unlimited Notes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Unlimited Chats</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Advanced AI Features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Priority Support</span>
                  </div>
                </div>

                <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-full">
                  Upgrade Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Frequently<br />Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about ViteLearn
              </p>
            </div>

            {/* FAQ Accordion */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {[
                  {
                    question: "How does ViteLearn's AI technology work?",
                    answer: "ViteLearn uses advanced natural language processing to analyze your study materials, identify key concepts, and generate personalized learning resources. Our AI adapts to your learning style and focuses on areas where you need more practice."
                  },
                  {
                    question: "Can I upload my own study materials?",
                    answer: "Yes! You can upload various types of study materials including PDFs, Word documents, PowerPoint presentations, audio files, and even YouTube video links. Our AI will process and extract key information from all these formats."
                  },
                  {
                    question: "Is ViteLearn suitable for all subjects?",
                    answer: "Absolutely! ViteLearn works across all academic subjects including STEM fields, humanities, languages, business, and more. Our AI is trained to understand and process content from diverse academic disciplines."
                  },
                  {
                    question: "How accurate are the AI-generated summaries and quizzes?",
                    answer: "Our AI achieves high accuracy rates by using state-of-the-art language models and continuous learning. However, we always recommend reviewing the generated content and provide easy editing tools to make adjustments as needed."
                  },
                  {
                    question: "Can I collaborate with other students?",
                    answer: "Yes! ViteLearn offers collaboration features that allow you to share study materials, notes, and quizzes with classmates. You can create study groups and work together on learning materials."
                  },
                  {
                    question: "Is there a limit to how much content I can process?",
                    answer: "The limits depend on your subscription plan. Our free tier has basic limits, while paid plans offer much higher or unlimited processing capabilities. Check our pricing page for specific details."
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                      className="w-full px-8 py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-all duration-200 group"
                    >
                      <span className="text-lg md:text-xl font-semibold text-gray-900 pr-6 group-hover:text-black transition-colors">
                        {faq.question}
                      </span>
                      <div className={`p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-all duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      </div>
                    </button>
                    {openFAQ === index && (
                      <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-200">
                        <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-900 rounded-[2rem] p-12 md:p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform<br />Your Learning?
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join thousands of students who are studying smarter, not harder. Get
                  started for free and experience the power of AI-assisted learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-50 text-black px-8 py-3 text-base font-medium rounded-full"
                  >
                    Start Learning - It&apos;s Free
                    <svg
                      className="ml-2 w-4 h-4"
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
                    variant="ghost"
                    className="px-6 py-3 text-base font-medium rounded-full bg-transparent border border-white text-white hover:bg-gray-800"
                  >
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-2">
                      <Play className="w-2.5 h-2.5 text-black fill-black ml-0.5" />
                    </div>
                    Watch Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Tagline */}
            <div className="md:col-span-1">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xl font-semibold">ViteLearn</span>
              </div>
              <p className="text-gray-600 mt-4">
                Transform your learning experience with AI-powered 
                study tools. Create smart notes, flashcards, and get 
                personalized learning materials.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex mt-6 space-x-4">
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200">
                  <span className="font-semibold text-xs">X</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200">
                  <span className="text-sm">IG</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 15l5.19-3L10 9v6zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            
            {/* Resources Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Tutorials</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row md:justify-between text-gray-600 text-sm">
            <div>© 2025 ViteLearn. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
