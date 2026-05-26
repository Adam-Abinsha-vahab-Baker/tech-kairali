'use client'

import { motion } from 'framer-motion';
import { ContributionIcon, AuctionIcon, FundsIcon } from './custom-icons';

const steps = [
  {
    title: 'Apply Online or In-Person',
    description: 'Fill out our simple loan application with basic business and personal details. Takes less than 10 minutes.',
    icon: ContributionIcon,
  },
  {
    title: 'Quick Review & Approval',
    description: 'Our team reviews your application and gets back to you within 48 hours with a loan offer tailored to your needs.',
    icon: AuctionIcon,
  },
  {
    title: 'Funds Disbursed Fast',
    description: 'Once approved, funds are transferred directly to your account so you can put them to work immediately.',
    icon: FundsIcon,
  },
];

export function HowItWorksSection() {
  return (
      <section id="how-it-works" className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
              className="text-3xl md:text-5xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <div className="relative max-w-5xl mx-auto">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    className="flex items-center mb-12 last:mb-0"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-1/3 flex justify-center">
                    <div className="w-24 h-24 bg-green-700 rounded-full flex items-center justify-center">
                      <step.icon />
                    </div>
                  </div>
                  <div className="w-2/3 pl-8">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-green-100">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                      <div className="absolute left-1/3 top-28 bottom-0 w-0.5 bg-green-700" style={{ height: 'calc(100% - 7rem)' }}></div>
                  )}
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}

