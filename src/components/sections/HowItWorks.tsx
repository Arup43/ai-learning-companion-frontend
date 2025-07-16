"use client";

import { motion } from "framer-motion";
import { Upload, FileSearch, BookOpen, Lightbulb } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  gradientClass: string;
  iconBgClass: string;
  iconTextClass: string;
}

const Step = ({ number, icon, title, description, tags, gradientClass, iconBgClass, iconTextClass }: StepProps) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="flex flex-col md:flex-row items-start gap-8 group"
    >
      <div className="flex-shrink-0 relative">
        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-${gradientClass.split('-')[2]}-200 group-hover:scale-110 transition-transform duration-300`}>
          {number}
        </div>
      </div>
      <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-start gap-6">
          <div className={`w-14 h-14 ${iconBgClass} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span key={index} className={`px-3 py-1 ${iconBgClass} ${iconTextClass} rounded-full text-sm`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <Upload className="w-7 h-7 text-blue-600" />,
      title: "Upload Your Materials",
      description: "Start by uploading your study materials—lecture notes, textbooks, videos, or audio files. Our platform supports a wide range of formats to accommodate your learning needs.",
      tags: ["PDF Files", "Video Content", "Audio Lectures"],
      gradientClass: "from-blue-500 to-blue-600",
      iconBgClass: "bg-blue-50",
      iconTextClass: "text-blue-700"
    },
    {
      number: 2,
      icon: <FileSearch className="w-7 h-7 text-purple-600" />,
      title: "AI Processes Content",
      description: "Our advanced AI analyzes your materials, identifying key concepts, facts, and relationships. The system creates a knowledge graph to understand how different topics connect.",
      tags: ["Smart Analysis", "Topic Mapping", "Key Concepts"],
      gradientClass: "from-purple-500 to-purple-600",
      iconBgClass: "bg-purple-50",
      iconTextClass: "text-purple-700"
    },
    {
      number: 3,
      icon: <BookOpen className="w-7 h-7 text-green-600" />,
      title: "Generate Study Resources",
      description: "Create summaries, flashcards, quizzes, and personalized study guides with a single click. All resources are optimized for your learning style and goals.",
      tags: ["Smart Summaries", "Custom Flashcards", "Practice Tests"],
      gradientClass: "from-green-500 to-green-600",
      iconBgClass: "bg-green-50",
      iconTextClass: "text-green-700"
    },
    {
      number: 4,
      icon: <Lightbulb className="w-7 h-7 text-orange-600" />,
      title: "Learn & Improve",
      description: "Study with AI-optimized materials that adapt to your progress and learning style. Track your progress and receive personalized recommendations.",
      tags: ["Adaptive Learning", "Progress Tracking", "Smart Recommendations"],
      gradientClass: "from-orange-500 to-orange-600",
      iconBgClass: "bg-orange-50",
      iconTextClass: "text-orange-700"
    }
  ];

  return (
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
            {steps.map((step, index) => (
              <Step 
                key={index}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                tags={step.tags}
                gradientClass={step.gradientClass}
                iconBgClass={step.iconBgClass}
                iconTextClass={step.iconTextClass}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 