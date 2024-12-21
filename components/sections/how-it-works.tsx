const steps = [
  {
    title: 'Monthly Fixed Contributions',
    description: 'Members contribute a fixed amount each month',
  },
  {
    title: 'Fund Pooling & Auctions',
    description: 'Contributions are pooled and auctioned to members',
  },
  {
    title: 'Access to Liquid Funds',
    description: 'Winners receive funds for their financial needs',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                {index + 1}
              </div>
              <p className="text-xl font-medium mb-4">{step.title}</p>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}