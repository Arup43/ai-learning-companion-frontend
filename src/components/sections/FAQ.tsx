"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  index: number;
  toggleFAQ: (index: number) => void;
}

const FAQItem = ({ question, answer, isOpen, index, toggleFAQ }: FAQItemProps) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="border-b border-gray-100 last:border-b-0"
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full px-8 py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-all duration-200 group"
      >
        <span className="text-lg md:text-xl font-semibold text-gray-900 pr-6 group-hover:text-black transition-colors">
          {question}
        </span>
        <div className={`p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </div>
      </button>
      {isOpen && (
        <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-200">
          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed text-lg">
              {answer}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const faqItems = [
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
  ];

  return (
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
            {faqItems.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                index={index}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 