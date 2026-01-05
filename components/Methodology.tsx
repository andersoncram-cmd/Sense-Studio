import React from 'react';
import { BrainCircuit, Fingerprint, Activity } from 'lucide-react';

const steps = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-[#FFD700]" />,
    title: "Mapeamento",
    desc: "Análise de Arquétipo e Semiótica da sua marca para descobrir o tom exato de autoridade.",
    step: "01"
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-[#FFD700]" />,
    title: "Síntese",
    desc: "Criação Híbrida unindo Inteligência Artificial avançada com a curadoria de um Produtor Sênior.",
    step: "02"
  },
  {
    icon: <Activity className="w-8 h-8 text-[#FFD700]" />,
    title: "Refino",
    desc: "Engenharia de Áudio focada em retenção e dopamina. O som que vende sem falar nada.",
    step: "03"
  }
];

const Methodology: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Protocolo <span className="text-[#FFD700]">SENSE</span></h2>
          <p className="text-gray-400 max-w-xl">
            Uma metodologia proprietária que transforma ruído em lucro através de psicoacústica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent z-0" />

          {steps.map((item, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className="glass-card p-8 rounded-2xl h-full hover:border-[#FFD700]/30 transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#FFD700]/50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-white/5 font-sans group-hover:text-white/10 transition-colors">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;