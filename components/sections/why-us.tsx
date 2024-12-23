import { CheckCircle } from 'lucide-react';

const points = [
  'Reliability: A trusted platform backed by years of experience',
  'Transparency: Fully compliant with the Chit Funds Act, 1982',
  'Community Trust: Serving Kerala with integrity',
  'Professional Management: Expert financial guidance',
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-green-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {points.map((point, index) => (
            <div key={index} className="flex items-center space-x-4 p-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-lg">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}