'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-background to-secondary">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Interest-Free Chit Funds for a Secure Future
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Discover a smarter way to save and grow your money with Tech Kairali’s
            transparent, interest-free chit fund schemes. Join our family across Kerala.
          </p>
          <div className="space-y-4 md:space-y-0 md:flex md:justify-center md:space-x-4">
            <Button size="lg" className="bg-primary text-white hover:bg-primary-dark">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-secondary hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>
  );
}
