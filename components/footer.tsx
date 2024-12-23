import Link from 'next/link';
import Image from 'next/image';
import kairali from "@/app/assets/kairali-logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
      <footer className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <Image
                  src={kairali}
                  alt="Tech Kairali Logo"
                  width={200}
                  height={200}
                  className="mb-4 brightness-0 invert"
              />
              <p className="text-sm text-green-300 text-center  md:text-left">
                your trusted partner for all your financial needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-green-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#services" className="text-green-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#how-it-works" className="text-green-300 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="#contact" className="text-green-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-green-300">
                <li>SRA-29 Aman Vadakkumbhagam Kazhakkootam</li>
                <li>Phone: +91 6238175537</li>
                <li>Email: techkairali24@gmail.com</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-green-300 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-green-300 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-green-300 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-green-300 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-green-700 text-center text-sm text-green-300">
            <p>© {new Date().getFullYear()} Tech Kairali Chitfund Pvt. Ltd. All rights reserved.</p>
            <p className="mt-2">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link> |
              <Link href="#" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
  );
}

