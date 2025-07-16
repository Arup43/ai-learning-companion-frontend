"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
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
  );
};

export default CTA; 