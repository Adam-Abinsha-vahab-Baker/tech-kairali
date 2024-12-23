'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import '@/app/styles/animations.css';
import bg from '@/app/assets/herobg.jpg';

export function HeroSection() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            <Image
                src={bg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="opacity-30"
            />
            <div className="relative z-10 container mx-auto px-4 text-center space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                    <span className="text-gradient">Hassle-Free</span> Chitty!
                </h1>
                <p className="text-xl text-white max-w-[600px] mx-auto">
                    Discover a smarter way to save and grow your money with Tech Kairali's
                    transparent, interest-free chit fund schemes. Join our family across Kerala.
                </p>
                <div>
                    {/*<Button*/}
                    {/*    size="lg"*/}
                    {/*    variant="outline"*/}
                    {/*    className="bg-white text-green-800 hover:bg-green-100 hover:text-green-900 transition-colors duration-300"*/}
                    {/*>*/}
                    {/*    Learn More*/}
                    {/*</Button>*/}
                </div>
            </div>
        </section>
    );
}
