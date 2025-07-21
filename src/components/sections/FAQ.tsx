"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
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
      className="mb-6 last:mb-0"
    >
      <div 
        className={`overflow-hidden rounded-2xl transition-all duration-300 ${
          isOpen ? "bg-blue-50 shadow-md" : "bg-white border border-gray-100 hover:border-blue-200"
        }`}
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-300"
        >
          <span className={`text-xl font-semibold pr-6 transition-colors ${
            isOpen ? "text-blue-700" : "text-gray-800"
          }`}>
            {question}
          </span>
          <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
            isOpen ? "bg-blue-500 text-white rotate-0" : "bg-gray-100 text-gray-600"
          }`}>
            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </div>
        </button>
        
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-8 pb-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </div>
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
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about ViteLearn
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqItems.slice(0, 3).map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                index={index}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqItems.slice(3).map((faq, index) => (
              <FAQItem 
                key={index + 3}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index + 3}
                index={index + 3}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Additional Support */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Still have questions? <a href="#" className="text-blue-600 font-medium hover:underline">Contact our support team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 