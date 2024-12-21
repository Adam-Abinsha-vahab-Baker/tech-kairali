import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

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
    <section id="benefits" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits of Our Chit Funds</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8">
              <CheckCircle className="h-6 w-6 text-primary mb-4" />
              <p className="text-lg">{benefit}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}