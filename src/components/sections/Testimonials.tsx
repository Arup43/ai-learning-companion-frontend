"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
  gradient: string;
}

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: TestimonialProps[] = [
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
  );
};

export default Testimonials; 