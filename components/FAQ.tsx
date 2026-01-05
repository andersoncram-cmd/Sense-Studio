import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { 
    q: "O que é exatamente uma Identidade Sonora?", 
    a: "É a tradução da essência da sua marca em som. Assim como você tem um logotipo visual, o Sound Branding cria um logotipo auditivo e uma trilha proprietária que ativam a memória do seu cliente instantaneamente ao ouvir." 
  },
  { 
    q: "O que eu recebo neste pacote?", 
    a: "Você receberá sua Assinatura Sonora (Sound Logo), a Trilha Proprietária completa (para vídeos de fundo), variações para Stories/Reels e um Manual de Aplicação da Marca Sonora. Tudo em alta qualidade (WAV/MP3)." 
  },
  { 
    q: "Serve para qualquer nicho?", 
    a: "Sim. Trabalhamos com arquétipos universais. Seja você um advogado (autoridade/sério), uma loja de roupas (hype/energia) ou um infoprodutor (conexão/ensino), adaptamos a engenharia de som para o seu público." 
  },
  { 
    q: "Qual o prazo de entrega?", 
    a: "Devido à nossa metodologia híbrida (IA + Produtores), conseguimos entregar a primeira versão da sua identidade em até 24 horas após o preenchimento do briefing." 
  },
  { 
    q: "E se eu não gostar?", 
    a: "Oferecemos garantia incondicional de 7 dias. Se a identidade sonora não elevar a percepção da sua marca, devolvemos 100% do seu investimento." 
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dúvidas <span className="text-[#FFD700]">Frequentes</span></h2>
          <p className="text-gray-400">Tudo o que você precisa saber antes de transformar sua marca.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`glass-card rounded-xl transition-all duration-300 ${openIndex === i ? 'border-[#FFD700]/30 bg-white/[0.05]' : 'border-white/5 hover:border-white/10'}`}
            >
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className={`font-semibold text-lg transition-colors pr-4 ${openIndex === i ? 'text-[#FFD700]' : 'text-white'}`}>
                  {faq.q}
                </h3>
                {openIndex === i ? (
                  <Minus size={20} className="text-[#FFD700] shrink-0" />
                ) : (
                  <Plus size={20} className="text-gray-500 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-300 text-sm leading-relaxed border-t border-white/5 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;