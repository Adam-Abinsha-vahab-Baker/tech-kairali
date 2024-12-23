'use client'

import { motion } from 'framer-motion';
import { ContributionIcon, AuctionIcon, FundsIcon } from './custom-icons';

const steps = [
  {
    title: 'Monthly Fixed Contributions',
    description: 'Members contribute a fixed amount each month, building a collective fund for the group.',
    icon: ContributionIcon,
  },
  {
    title: 'Fund Pooling & Auctions',
    description: 'Contributions are pooled and auctioned to members, allowing for transparent fund distribution.',
    icon: AuctionIcon,
  },
  {
    title: 'Access to Liquid Funds',
    description: 'Auction winners receive funds to meet their financial needs, while others continue saving.',
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

