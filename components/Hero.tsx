import React from 'react';
import { Play } from 'lucide-react';
import { CHECKOUT_LINK } from '../constants';
import SonicWaves from './SonicWaves';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* THE SONIC WAVES (Liquid Gold Animation) */}
        <SonicWaves />
        
        {/* Vignettes for cinematic focus (Top and Bottom Fade) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] opacity-80" />

        {/* Ambient Glow (The "Spotlight" Effect) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.08] z-0" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center mt-20 md:mt-0">
        
        {/* Badge refinado */}
        <div className="inline-block mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-lg shadow-black/20">
          <span className="text-[10px] md:text-xs font-medium text-[#C5A059] tracking-[0.2em] uppercase">
            Neurociência Aplicada a Marcas
          </span>
        </div>

        {/* Headline Premium - Responsividade Extrema */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-white mb-6 leading-[1.15] tracking-tight max-w-5xl mx-auto drop-shadow-2xl">
          Sua Marca é <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#C5A059] pb-2 inline-block">
            Invisível
          </span> no Instagram?
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-[#CCCCCC] font-light mb-12 leading-relaxed mix-blend-plus-lighter px-4">
          Não é música. É <strong className="text-white font-medium">Engenharia Sonora</strong>. Utilizamos Neurociência e IA para criar a identidade auditiva que instala sua marca na mente do cliente.
        </p>

        {/* Botão Luxury Metallic - Touch Target Otimizado */}
        <div className="flex flex-col items-center">
          <a 
            href={CHECKOUT_LINK}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-bold text-[#1a1a1a] transition-all duration-300 bg-[#C5A059] rounded-full hover:bg-[#d6b064] active:scale-95 hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(197,160,89,0.3)] hover:shadow-[0_0_50px_-10px_rgba(197,160,89,0.5)] z-20 w-full md:w-auto"
          >
            <Play className="w-5 h-5 mr-3 fill-[#1a1a1a] stroke-[#1a1a1a]" />
            CRIAR MINHA IDENTIDADE SONORA
          </a>

          <p className="mt-8 text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium opacity-60">
            Apenas 4 Vagas Disponíveis essa semana
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;