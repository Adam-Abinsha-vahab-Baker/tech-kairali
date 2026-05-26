'use client'

import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

export function ServicesSection() {
  return (
      <section id="services" className="py-20 bg-white text-green-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Offer</h2>

            {/* Gold Loans hero card */}
            <div className="flex flex-col items-center gap-4 bg-yellow-50 border border-yellow-200 rounded-2xl p-10 mb-12 shadow-md">
              <div className="p-5 bg-yellow-100 rounded-full">
                <Gem className="h-14 w-14 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-extrabold text-yellow-700">Gold Loans</h3>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Unlock the value of your gold jewellery instantly. Tech Kairali Finance offers gold-backed loans with a high loan-to-value ratio, low interest rates, and same-day disbursal — helping individuals and small businesses access the capital they need without selling their assets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
  );
}

