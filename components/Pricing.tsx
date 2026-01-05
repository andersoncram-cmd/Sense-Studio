import React from 'react';
import { Check, Zap } from 'lucide-react';
import { CHECKOUT_LINK } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD700] rounded-full filter blur-[120px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Card Container */}
          <div className="glass-card rounded-3xl p-1 border-[#FFD700]/30 gold-glow relative">
            
            {/* Red Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-2 whitespace-nowrap z-20">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              VAGAS LIMITADAS • LOTE BETA
            </div>

            <div className="bg-[#0a0a0a]/90 backdrop-blur-xl rounded-[20px] p-8 md:p-10 text-center h-full flex flex-col relative overflow-hidden">
              <h3 className="text-gray-400 font-medium tracking-widest text-sm mb-2 uppercase">Identidade Sonora Completa</h3>
              
              <div className="flex flex-col items-center justify-center my-6">
                <span className="text-gray-500 text-lg decoration-red-500/80 decoration-2 line-through font-medium">
                  De R$ 997,00
                </span>
                <div className="flex items-start justify-center text-white mt-1">
                  <span className="text-2xl mt-2 font-light text-gray-400">R$</span>
                  <span className="text-6xl md:text-7xl font-bold tracking-tighter">297</span>
                  <span className="text-2xl mt-8 font-bold text-[#FFD700]">,00</span>
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 text-left mb-8 pl-4">
                <li className="flex items-center text-gray-300">
                  <div className="p-1 rounded-full bg-[#FFD700]/10 mr-3">
                     <Zap size={14} className="text-[#FFD700]" />
                  </div>
                  <span className="text-sm">Entrega Expressa em <strong>24 horas</strong></span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="p-1 rounded-full bg-[#FFD700]/10 mr-3">
                     <Check size={14} className="text-[#FFD700]" />
                  </div>
                  <span className="text-sm">Direitos Comerciais Inclusos (Royalty Free)</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="p-1 rounded-full bg-[#FFD700]/10 mr-3">
                     <Check size={14} className="text-[#FFD700]" />
                  </div>
                  <span className="text-sm">Arquivos Prontos (WAV Master + MP3)</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="p-1 rounded-full bg-[#FFD700]/10 mr-3">
                     <Check size={14} className="text-[#FFD700]" />
                  </div>
                  <span className="text-sm">Manual de Aplicação da Marca Sonora</span>
                </li>
              </ul>

              {/* CTA Button */}
              <a 
                href={CHECKOUT_LINK}
                className="group relative w-full py-4 bg-[#FFD700] text-[#050505] rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]"
              >
                <span className="relative z-10">GARANTIR PREÇO PROMOCIONAL</span>
                {/* Shimmer Effect */}
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:animate-[shimmer_1s_infinite]" />
              </a>
              
              <p className="mt-4 text-[10px] text-gray-600">
                Pagamento seguro. Garantia de 7 dias incondicional.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          100% { left: 200%; }
        }
      `}</style>
    </section>
  );
};

export default Pricing;