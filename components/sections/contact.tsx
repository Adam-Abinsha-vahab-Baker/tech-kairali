'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactSection() {
  return (
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-950 mb-8 text-center">
            Contact Us
          </h2>
          <p className="text-xl text-center text-green-800 mb-12 max-w-2xl mx-auto">
            At Tech Kairali Chitfund, we pride ourselves on providing transparent and reliable chit fund solutions.
            Our experienced team is here to help you find the best plan tailored to your financial needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Phone className="h-8 w-8 text-green-600"/>
                <h3 className="text-2xl font-bold text-green-950">Phone</h3>
              </div>
              <p className="text-lg text-green-800 mb-2">+91-6238175537</p>
              <p className="text-gray-600">Available for your queries</p>
            </div>

            {/* Address Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="h-8 w-8 text-green-600"/>
                <h3 className="text-2xl font-bold text-green-950">Location</h3>
              </div>
              <p className="text-lg text-green-800 mb-2">
                Tech Kairali Chitfund Pvt. Ltd.
              </p>
              <p className="text-gray-600">
                SRA 29, Aman Vadakkumbhagam,
                <br />
                Kazhakootam, Trivandrum,
                <br />
                Kerala
              </p>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="h-8 w-8 text-green-600"/>
                <h3 className="text-2xl font-bold text-green-950">Business Hours</h3>
              </div>
              <p className="text-lg text-green-800 mb-2">Monday - Saturday</p>
              <p className="text-gray-600">9:30 AM - 6:30 PM</p>
              <p className="text-red-600 mt-2">Closed on Sundays</p>
            </div>
          </div>

          {/* Map Section */}
          {/*<div className="mt-16 max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">*/}
          {/*  <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">*/}
          {/*    <p className="text-gray-500">Map placeholder - Integration required</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </section>
  );
}