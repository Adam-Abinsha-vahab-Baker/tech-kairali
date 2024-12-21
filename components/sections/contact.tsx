'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-xl font-medium">Get in touch</p>
                  <p className="text-muted-foreground">Learn how Tech Kairali Chitfund can help you</p>
                </div>
              </div>
              <Button className="w-full text-lg py-6" onClick={toggleModal}>
                Schedule a Consultation
              </Button>
            </Card>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/80">
              <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
                {/* Close Button */}
                <button
                    onClick={toggleModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500"
                >
                  ✕
                </button>

                {/* Modal Content */}
                <h2 className="text-2xl font-bold mb-4">Schedule a Consultation</h2>
                <p className="text-lg mb-4">
                  Tech Kairali Chitfund Pvt. Ltd.
                  <br />
                  SRA 29, Aman
                  Vadakkumbhagam, Kazhakootam, Trivandrum,Kerala

                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2">Phone Numbers</h3>
                <p className="text-lg mb-4">
                  +91-6238175537
                  <br />

                </p>
                <p className="text-muted-foreground">
                  At Tech Kairali Chitfund, we pride ourselves on providing transparent and reliable chit fund solutions. Our experienced team is here to help you find the best plan tailored to your financial needs.
                </p>

                {/* Action Button */}
                <Button className="mt-6 w-full" onClick={toggleModal}>
                  Close
                </Button>
              </div>
            </div>
        )}
      </section>
  );
}
