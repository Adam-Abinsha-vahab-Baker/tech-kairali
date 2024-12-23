'use client'

import { useState } from 'react'
import Image from "next/image"
import logo from '@/app/assets/kairali-logo.png'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
      <section id="about" className="relative py-20 bg-gradient-to-b from-green-900 to-green-800 text-white overflow-hidden">
        {/* Decorative background overlay */}
        <div
            className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
            style={{ opacity: 0.1 }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="text-green-300">About</span>{' '}
              <span className="text-white">Tech Kairali</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
            >
              <div className="absolute inset-0 bg-green-300 rounded-full filter blur-3xl opacity-20" />
              <Image
                  src={logo}
                  alt="Tech Kairali Logo"
                  width={400}
                  height={400}
                  quality={100}
                  className="relative mx-auto md:mx-0 brightness-0 invert transform  transition-transform duration-300"
              />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-green-100">
                Tech Kairali Chitfund Pvt. Ltd. offers a hassle-free financial solution through its reliable and transparent chit fund schemes in Kerala.
              </p>

              <p className="text-lg leading-relaxed text-green-100">
                Operating under the guidelines of the Chit Funds Act, 1982, we emphasize transparency and community trust to serve as a trusted financial partner.
              </p>

              <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                      <p className="text-lg leading-relaxed text-green-100">
                        Our mission is to empower individuals and businesses with flexible savings options and timely financial assistance. With a strong focus on customer satisfaction, we strive to make chit funds an accessible and beneficial financial tool for all.
                      </p>
                    </motion.div>
                )}
              </AnimatePresence>

              <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  variant="outline"
                  className="mt-4 bg-green-700 text-white border-green-500 hover:bg-green-600 hover:scale-105 transform transition-all duration-300"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
  )
}