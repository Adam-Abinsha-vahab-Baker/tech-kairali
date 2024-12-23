import { Card } from '@/components/ui/card';
import { CheckCircle,Smile } from 'lucide-react';

const benefits = [
  'Flexible financial planning and savings',
  'Access to funds for investments',
  'Support for unforeseen expenses',
  'Structured approach to growth',
  'Community-based saving system',
  'Regular financial discipline',
];

export function BenefitsSection() {
  return (
      <section id="benefits" className="py-20 bg-gradient-to-b from-white to-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-950 mb-12">
            Benefits of Our Chit Funds
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
                <Card
                    key={index}
                    className="p-8 bg-green-900 text-white rounded-lg shadow-md transition duration-300 hover:shadow-xl"
                >
                  <div className="flex flex-col items-center">
                    <Smile className="h-10 w-10 text-green-500 mb-4"/>
                    <p className="text-lg font-medium">{benefit}</p>
                  </div>
                </Card>
            ))}
          </div>
        </div>
      </section>


  );
}