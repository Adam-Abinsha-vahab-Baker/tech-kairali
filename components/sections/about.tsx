'use client'

import { useState } from 'react'
import Image from "next/image"
import logo from '@/app/assets/kairali-logo.png'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
      <section id="about" className="relative py-20 bg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-green-950 opacity-50"></div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-green-300">About Tech Kairali</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                  src={logo}
                  alt="Tech Kairali Logo"
                  width={400}
                  height={400}
                  quality={100}
                  className="mx-auto md:mx-0 brightness-0 invert"
              />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-green-100">
                Tech Kairali Chitfund Pvt. Ltd. offers a hassle-free financial solution through its reliable and transparent chit fund schemes in Kerala.
              </p>
              <p className="text-lg leading-relaxed text-green-100">
                Operating under the guidelines of the Chit Funds Act, 1982, we emphasize transparency and community trust to serve as a trusted financial partner.
              </p>
              {isExpanded && (
                  <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                  >
                    <p className="text-lg leading-relaxed text-green-100">
                      Our mission is to empower individuals and businesses with flexible savings options and timely financial assistance. With a strong focus on customer satisfaction, we strive to make chit funds an accessible and beneficial financial tool for all.
                    </p>
                  </motion.div>
              )}
              <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  variant="outline"
                  className="mt-4 bg-green-700 text-white border-green-500 hover:bg-green-600"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

