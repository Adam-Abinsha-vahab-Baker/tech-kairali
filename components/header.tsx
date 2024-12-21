'use client';

import { ThemeToggle } from './theme-toggle';
import Link from 'next/link';
import Image from 'next/image';
import kairali from "@/app/assets/kairali-logo.png"; // Ensure the path is correct

export default function Header() {
  return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
                src={kairali}
                alt="Tech Kairali Logo"
                width={100} // Adjusted to fit header
                height={100} // Adjusted to fit header
                 // Ensures proportions are maintained
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">About Us</Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">Services</Link>
            <Link href="#why-us" className="text-sm font-medium transition-colors hover:text-primary">Why Choose Us</Link>
            <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-primary">Benefits</Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">How It Works</Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>
  );
}
