'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import bg from '@/app/assets/herobg.jpg';

export function HeroSection() {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-green-950/70 z-10" />
            <Image
                src={bg}
                alt="Background"
                priority
                fill
                className="object-cover object-center"
            />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Main heading */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              Hassle-Free
            </span>{' '}
                        <span className="text-white">Chitty!</span>
                    </h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-100 max-w-[700px] mx-auto leading-relaxed"
                    >
                        Discover a smarter way to save and grow your money with Tech Kairali's
                        transparent, interest-free chit fund schemes. Join our family across Kerala.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                    >
                        {/*<Button*/}
                        {/*    size="lg"*/}
                        {/*    className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"*/}
                        {/*>*/}
                        {/*    Get Started*/}
                        {/*    <ArrowRight className="ml-2 h-5 w-5" />*/}
                        {/*</Button>*/}
                        {/*<Button*/}
                        {/*    size="lg"*/}
                        {/*    variant="outline"*/}
                        {/*    className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-6 text-lg transition-all duration-300"*/}
                        {/*>*/}
                        {/*    Learn More*/}
                        {/*</Button>*/}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-8 z-20 cursor-pointer"
                onClick={scrollToNextSection}
            >
                <ChevronDown className="h-8 w-8 text-white animate-bounce" />
            </motion.div>
        </section>
    );
}