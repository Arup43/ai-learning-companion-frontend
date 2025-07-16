"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp } from "@/lib/animations";

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
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
  );
};

export default Pricing; 