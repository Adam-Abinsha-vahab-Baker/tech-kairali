'use client'

import { motion } from 'framer-motion';
import { Landmark, Building2, Shield, Gem } from 'lucide-react';

const services = [
  {
    title: 'Working Capital Loans',
    description: 'Get quick access to funds to cover day-to-day business expenses, manage cash flow gaps, and keep your operations running smoothly.',
    icon: Landmark,
    color: 'text-green-600',
  },
  {
    title: 'Business Expansion Loans',
    description: 'Scale your business with financing for new equipment, inventory, hiring, or opening a new location — on terms that work for you.',
    icon: Building2,
    color: 'text-green-600',
  },
  {
    title: 'Low-Interest Micro Loans',
    description: 'Affordable micro loans for small and emerging businesses. Minimal paperwork, fast approval, and fair interest rates tailored to your needs.',
    icon: Shield,
    color: 'text-green-600',
  },
  {
    title: 'Gold Loans',
    description: 'Unlock the value of your gold jewellery instantly. Get a high loan-to-value ratio, low interest rates, and same-day disbursal with your gold as collateral.',
    icon: Gem,
    color: 'text-yellow-600',
  },
];

export function ServicesSection() {
  return (
      <section id="services" className="py-20 bg-white text-green-800">
        <div className="container mx-auto px-4">
          <motion.h2
              className="text-3xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`p-4 rounded-full ${service.color} bg-opacity-10 mb-6`}>
                    <service.icon className={`h-12 w-12 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}

