import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import Button from '../components/Button';
import SEO from '../components/SEO';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      <SEO 
        title="Client Stories" 
        description="Read success stories from leaders, parents, and partners who have transformed their emotional lives with Mubell Empathy Academy."
      />

      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Stories of Transformation</h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          Real people. Real struggles. Real breakthroughs. See how emotional intelligence changes lives.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div 
              key={t.id} 
              className="bg-white/5 border border-white/5 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-accent/20 transition-all duration-300 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="mb-6 text-brand-accent/30">
                <Quote size={40} className="transform scale-x-[-1]" />
              </div>

              {/* Content */}
              <blockquote className="text-lg text-white/90 leading-relaxed italic mb-8 flex-grow">
                "{t.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-darker border border-brand-accent/30 overflow-hidden shrink-0">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${t.id}`} 
                    alt={t.author} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-white font-serif font-medium">{t.author}</div>
                  {t.role && (
                    <div className="text-xs text-brand-accent uppercase tracking-wider font-semibold">
                      {t.role}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured / Highlight Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="bg-gradient-to-r from-brand-accent/10 to-brand-dark border border-brand-accent/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-6 text-brand-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <h2 className="text-2xl md:text-4xl font-serif text-white mb-6">
              "This isn't just coaching. It's an entire paradigm shift for how to exist in the world."
            </h2>
            <p className="text-brand-muted mb-0 font-medium">— Jonathan R., Senior VP</p>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-12 text-center">
         <h2 className="text-3xl font-serif text-white mb-6">Write Your Own Story</h2>
         <p className="text-brand-muted mb-8">Join the hundreds of individuals who have reclaimed their emotional agency.</p>
         <Button to="/contact" variant="primary">Begin Your Journey</Button>
      </section>
    </div>
  );
};

export default Testimonials;