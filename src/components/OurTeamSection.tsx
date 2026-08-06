import React from 'react';
import { Phone, MessageSquare, Mail, Award, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  rating: string;
  phone: string;
  email: string;
  whatsapp: string;
  image: string;
  gradient: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Sentongo Daniel',
    role: 'Founder & Managing Director',
    experience: '14+ Yrs Experience',
    rating: '5.0',
    phone: '+971 58 273 7082',
    email: 'dsetongo@yahoo.com',
    whatsapp: 'https://wa.me/971582833390',
    image: 'https://res.cloudinary.com/dirfcqs1f/image/upload/v1785981462/Grok_Image_2026-07-14_at_18.28.37_qvk08j.jpg',
    gradient: 'from-blue-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: 'team-2',
    name: 'Jabari Osei',
    role: 'Head of VIP Chauffeur Operations',
    experience: '11+ Yrs Experience',
    rating: '4.9',
    phone: '+971 58 273 7082',
    email: 'dsetongo@yahoo.com',
    whatsapp: 'https://wa.me/971582833390',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=600',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'team-3',
    name: 'Malik Adeleke',
    role: 'Senior Executive Chauffeur',
    experience: '9+ Yrs Experience',
    rating: '5.0',
    phone: '+971 58 273 7082',
    email: 'dsetongo@yahoo.com',
    whatsapp: 'https://wa.me/971582833390',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=600',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'team-4',
    name: 'Kibalama Paul',
    role: 'Web Master & Graphics Editor',
    experience: '12+ Yrs Experience',
    rating: '4.9',
    phone: '+256757460297',
    email: 'dsetongo@yahoo.com',
    whatsapp: 'https://wa.me/256757460297',
    image: 'https://res.cloudinary.com/dirfcqs1f/image/upload/v1748599977/OBI_8725_arcf8s.jpg',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
];

export const OurTeamSection: React.FC = () => {
  return (
    <section className="w-full bg-transparent text-white font-['DM_Sans',sans-serif] py-20 px-4 sm:px-8 lg:px-12 border-t border-white/10 relative overflow-hidden">

      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-emerald-900/10 blur-[120px] pointer-events-none rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.1 }}
        className="max-w-6xl mx-auto space-y-12 relative z-10"
      >

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-white/80 uppercase">
            <Award className="w-3.5 h-3.5 text-white" />
            <span>Executive Leadership & Drivers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Meet Our Team
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed">
            Our highly trained, discreet executive chauffeurs and leaders ensure every journey meets the highest luxury standards.
          </p>
        </div>

        {/* 4 Glassmorphism Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative bg-black/40 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex flex-col justify-between hover:border-white/40 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(255,255,255,0.05)] overflow-hidden"
            >
              {/* Subtle Card Gradient Accent Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 space-y-4">

                {/* Professional Headshot */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Rating Tag */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white flex items-center space-x-1 shadow-md">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{member.rating}</span>
                  </div>

                  {/* Experience Tag */}
                  <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white tracking-wide shadow-md">
                    {member.experience}
                  </div>
                </div>

                {/* Name & Role */}
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-white/70 leading-snug mt-0.5">
                    {member.role}
                  </p>
                  <div className="mt-2 space-y-2 text-xs text-white/70">
                    <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center space-x-1 hover:underline">
                      <Phone className="w-3 h-3" />
                      <span>{member.phone}</span>
                    </a>
                    <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Glassmorphism Action Buttons */}
              <div className="relative z-10 pt-5 mt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${member.phone.replace(/\s+/g, '')}`}
                  className="py-2.5 px-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-semibold text-white flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-95"
                  title={`Call ${member.name}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>

                <a
                  href={member.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-600/80 hover:bg-emerald-600 border border-emerald-400/40 rounded-xl text-xs font-semibold text-white flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-sm hover:scale-[1.02] active:scale-95"
                  title={`WhatsApp ${member.name}`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};
