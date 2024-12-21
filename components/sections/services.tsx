import { Card } from '@/components/ui/card';
import { Landmark, Building2, Shield } from 'lucide-react';

const services = [
  {
    title: 'Systematic Savings',
    description: 'Join our community of savers with fixed monthly contributions',
    icon: Landmark,
  },
  {
    title: 'Fund Auctions',
    description: 'Access pooled funds through our transparent auction system',
    icon: Building2,
  },
  {
    title: 'Low-Interest Alternative',
    description: 'Freedom from high-interest rates of conventional loans',
    icon: Shield,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8">
              <service.icon className="h-12 w-12 mb-6" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}