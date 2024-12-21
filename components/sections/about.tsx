export function AboutSection() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] 
          bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed">
            Tech Kairali Chitfund Pvt. Ltd. offers a hassle-free financial solution through its reliable and transparent chit fund schemes in Kerala.
          </p>
          <p className="text-lg leading-relaxed">
            Operating under the guidelines of the Chit Funds Act, 1982, we emphasize transparency and community trust to serve as a trusted financial partner.
          </p>
        </div>
      </div>
    </section>
  );
}