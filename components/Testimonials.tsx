import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Ricardo Silva",
    role: "Sócio Advocacia RS",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
    text: "A seriedade que a trilha trouxe para meus vídeos institucionais foi imediata. Meus clientes percebem um valor muito maior nos serviços agora."
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "CEO Lojas Glow",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    text: "A retenção dos meus Stories dobrou depois que comecei a usar a trilha sonora da Sense. Minha marca agora tem peso e identidade única."
  },
  {
    id: 3,
    name: "Felipe J.",
    role: "Influencer Tech",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&auto=format&fit=crop",
    text: "O unboxing dos meus produtos mudou de nível. O 'sound branding' criou uma assinatura que meus seguidores já reconhecem antes de me verem."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
        {/* Background ambient glow just to break flat black */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD700] rounded-full filter blur-[150px] opacity-[0.03] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Impacto <span className="text-[#FFD700]">Sense.</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                    Veja o que marcas reais dizem sobre nossa identidade sonora.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t) => (
                    <div key={t.id} className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-300 bg-white/[0.02]">
                         {/* Stars */}
                         <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="fill-[#FFD700] text-[#FFD700]" />
                            ))}
                         </div>

                         {/* Quote Icon Background */}
                         <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 group-hover:text-[#FFD700]/10 transition-colors" />

                         {/* Text */}
                         <p className="text-gray-300 italic font-light leading-relaxed mb-8 flex-grow">
                            "{t.text}"
                         </p>

                         {/* Author */}
                         <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                            <img 
                                src={t.image} 
                                alt={t.name} 
                                className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                            <div>
                                <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</span>
                            </div>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;