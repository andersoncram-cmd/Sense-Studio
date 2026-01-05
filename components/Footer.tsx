import React from 'react';
    import { MessageCircle } from 'lucide-react';
    import { WHATSAPP_LINK } from '../constants';
    
    const Footer: React.FC = () => {
      return (
        <footer className="bg-black border-t border-white/5 py-12 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xl font-bold tracking-tighter text-white">
                SENSE <span className="text-[#FFD700]">STUDIO</span>
              </div>
              
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#FFD700] transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-[#FFD700] transition-colors">Privacidade</a>
                <a href="#" className="hover:text-[#FFD700] transition-colors">Instagram</a>
              </div>
              
              <div className="text-xs text-gray-600">
                &copy; 2024 Sense Studio. All rights reserved.
              </div>
            </div>
          </div>
    
          {/* Floating WhatsApp Button */}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            aria-label="Fale conosco no WhatsApp"
          >
            <MessageCircle size={28} fill="white" />
          </a>
        </footer>
      );
    };
    
    export default Footer;