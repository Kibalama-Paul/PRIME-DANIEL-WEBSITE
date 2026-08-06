import React from 'react';
import { motion } from 'motion/react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Executive Vice President',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80',
    quote: "Prime Daniel has transformed my business travel routine. From seamless airport pickups to late-night executive meetings, their chauffeurs are always punctual, discrete, and exceptionally professional.",
  },
  {
    name: 'David Patel',
    role: 'Private Wealth Advisor',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&h=256&q=80',
    quote: "I booked Prime Daniel for a full-day private city tour with VIP clients. The immaculate vehicle condition and chauffeur's attentive service exceeded all expectations.",
  },
  {
    name: 'Emily Carter',
    role: 'Luxury Event Coordinator',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&h=256&q=80',
    quote: 'Managing guest transit for international galas demands absolute reliability. Prime Daniel delivers smooth, safe, and first-class chauffeur services every single journey.',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-transparent text-white font-['DM_Sans',sans-serif] py-20 px-4 sm:px-8 lg:px-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow/Grid effect as in reference */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, #1e3a8a 0%, transparent 60%), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto space-y-12 relative z-10"
      >
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            What people say
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed">
            Discover what our distinguished clients have to say about their journey experiences with Prime Daniel Luxury Chauffeur services.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="bg-black/40 backdrop-blur-md border border-white/15 rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:bg-white/[0.07] hover:border-white/30 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden border border-white/30 shadow-md bg-neutral-800">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-white/60 font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal pt-2">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};
