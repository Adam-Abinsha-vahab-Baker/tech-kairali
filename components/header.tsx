'use client';

import Link from 'next/link';
import Image from 'next/image';
import kairali from "@/app/assets/kairali-logo.png";

export default function Header() {
  return (
      <header className="sticky top-0 z-50 w-full border-b bg-green-900 text-white">
        <div className="container relative flex h-16 items-center">
          {/* Logo positioned absolutely to the left */}
          <div className="absolute left-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                  src={kairali}
                  alt="Tech Kairali Logo"
                  width={100}
                  height={100}
                  className="brightness-0 invert"
              />
            </Link>
          </div>

          {/* Centered navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-green-300">About Us</Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-green-300">Services</Link>
            <Link href="#why-us" className="text-sm font-medium transition-colors hover:text-green-300">Why Choose Us</Link>
            <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-green-300">Benefits</Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-green-300">How It Works</Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-green-300">Contact</Link>
          </nav>
        </div>
      </header>
  );
}