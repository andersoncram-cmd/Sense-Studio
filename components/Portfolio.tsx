import React, { useState } from 'react';
import { PlayCircle, PauseCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    client: "ZÉ BURGER",
    category: "HYPE & ENERGY",
    description: "Batidas rápidas e cortes secos para retenção imediata.",
    type: "video",
    // Link de vídeo vertical ou cropado
    src: "https://player.vimeo.com/external/371843336.sd.mp4?s=d010d9657f225d3df2436f560e9d40df34102c77&profile_id=165&oauth2_token_id=57447761", 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop", // Burger vertical
  },
  {
    id: 2,
    client: "PLAENGE",
    category: "CINEMATIC TRUST",
    description: "Sons profundos que transmitem solidez e luxo imobiliário.",
    type: "image",
    src: "",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop", // Prédio/Arquitetura
  },
  {
    id: 3,
    client: "NEXT LEVEL",
    category: "MINIMAL LUXURY",
    description: "O som do silêncio. Foco e produtividade.",
    type: "image",
    src: "",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop", // Escritório Clean
  },
  {
    id: 4,
    client: "DRA. CLARA",
    category: "ESTÉTICA PREMIUM",
    description: "Delicadeza e sofisticação para harmonização facial.",
    type: "image",
    src: "",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2525&auto=format&fit=crop", // Skincare/Mulher
  }
];

const Portfolio: React.FC = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    if (playing === id) {
      setPlaying(null);
    } else {
      setPlaying(id);
    }
  };

  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Social <span className="text-[#FFD700]">Media</span></h2>
            <p className="text-gray-400">Identidade sonora formatada para retenção máxima no Reels e TikTok.</p>
          </div>
        </div>

        {/* SHORTS GRID LAYOUT (4 Columns Vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => togglePlay(project.id)}
              className="relative aspect-[9/16] group overflow-hidden rounded-2xl border border-white/10 bg-gray-900 cursor-pointer transition-all duration-300 hover:border-[#FFD700]/50 hover:shadow-[0_0_30px_-10px_rgba(255,215,0,0.3)]"
            >
              {/* Media Handling: Video or Image */}
              {project.type === 'video' ? (
                <video
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 ${playing === project.id ? 'opacity-100' : ''}`}
                  autoPlay={false} // Só toca se interagir (ou autoplay muted se preferir)
                  muted
                  loop
                  playsInline
                  ref={(el) => {
                    // Simples lógica para tocar/pausar baseado no estado
                    if (el) {
                        if (playing === project.id) el.play();
                        else el.pause();
                    }
                  }}
                  poster={project.image}
                >
                  <source src={project.src} type="video/mp4" />
                </video>
              ) : (
                 <img 
                  src={project.image} 
                  alt={project.client} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 ${playing === project.id ? 'scale-105 opacity-60' : ''}`}
                />
              )}
             
              {/* Strong Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              
              {/* Playing Animation Overlay */}
              {playing === project.id && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="flex gap-1 h-8 items-end">
                     <div className="w-1 bg-[#FFD700] animate-[bounce_1s_infinite] h-4" />
                     <div className="w-1 bg-[#FFD700] animate-[bounce_1.2s_infinite] h-8" />
                     <div className="w-1 bg-[#FFD700] animate-[bounce_0.8s_infinite] h-6" />
                  </div>
                </div>
              )}

              {/* Card Content - Bottom Left */}
              <div className="absolute bottom-0 left-0 p-6 w-full z-20">
                <div className="flex justify-between items-end gap-2">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#FFD700] uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-black text-white mb-2 leading-none uppercase tracking-tight">
                      {project.client}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {project.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <div className="bg-white/10 p-3 rounded-full backdrop-blur-md group-hover:bg-[#FFD700] transition-colors duration-300">
                      {playing === project.id ? (
                        <PauseCircle size={20} className="text-white group-hover:text-black" />
                      ) : (
                        <PlayCircle size={20} className="text-white group-hover:text-black" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;