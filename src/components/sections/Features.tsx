"use client";

import { motion } from "framer-motion";
import { FileText, Zap, Brain, Layers, Sparkles, MessageCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgClass: string;
  learnMoreClass: string;
}

const FeatureCard = ({ icon, title, description, iconBgClass, learnMoreClass }: FeatureCardProps) => {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ scale: 1.03 }}
      className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className={`w-12 h-12 ${iconBgClass} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:${iconBgClass.replace('/10', '/20')} transition-all duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
      <div className={`mt-6 flex items-center ${learnMoreClass} font-medium`}>
        Learn more
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
};

export const Features = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Smart Note Creation",
      description: "Create comprehensive notes from YouTube videos, PDFs, audio recordings, and live sessions with AI-powered extraction.",
      iconBgClass: "bg-blue-500/10",
      learnMoreClass: "text-blue-600"
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Auto-Generated Flashcards",
      description: "Transform your notes into intelligent flashcards automatically, with spaced repetition for optimal memory retention.",
      iconBgClass: "bg-purple-500/10",
      learnMoreClass: "text-purple-600"
    },
    {
      icon: <Brain className="w-6 h-6 text-green-600" />,
      title: "Interactive Quizzes",
      description: "Generate personalized quizzes from your study materials to test your knowledge and track your progress.",
      iconBgClass: "bg-green-500/10",
      learnMoreClass: "text-green-600"
    },
    {
      icon: <Layers className="w-6 h-6 text-orange-600" />,
      title: "Detailed Study Notes",
      description: "Get comprehensive, structured notes with key concepts, definitions, and important points highlighted automatically.",
      iconBgClass: "bg-orange-500/10",
      learnMoreClass: "text-orange-600"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      title: "AI Summaries",
      description: "Receive concise, intelligent summaries of your content that capture the most important information and insights.",
      iconBgClass: "bg-indigo-500/10",
      learnMoreClass: "text-indigo-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-pink-600" />,
      title: "Chat with Materials",
      description: "Have interactive conversations with your YouTube videos, PDFs, and notes. Ask questions and get instant answers.",
      iconBgClass: "bg-pink-500/10",
      learnMoreClass: "text-pink-600"
    }
  ];

  return (
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
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgClass={feature.iconBgClass}
              learnMoreClass={feature.learnMoreClass}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 