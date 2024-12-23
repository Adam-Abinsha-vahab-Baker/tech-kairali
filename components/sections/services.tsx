'use client'

import { motion } from 'framer-motion';
import { Landmark, Building2, Shield } from 'lucide-react';

const services = [
  {
    title: 'Systematic Savings',
    description: 'Join our community of savers with fixed monthly contributions. Our structured approach helps you build a robust financial future.',
    icon: Landmark,
    color: 'text-blue-600',
  },
  {
    title: 'Fund Auctions',
    description: 'Access pooled funds through our transparent auction system. Get the financial boost you need when you need it most.',
    icon: Building2,
    color: 'text-green-600',
  },
  {
    title: 'Low-Interest Alternative',
    description: 'Experience freedom from high-interest rates of conventional loans. Our chit funds offer a cost-effective way to manage your finances.',
    icon: Shield,
    color: 'text-purple-600',
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
          <div className="grid md:grid-cols-3 gap-12">
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

