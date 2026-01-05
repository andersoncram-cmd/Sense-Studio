import React from 'react';

// NOTE FOR USER: Replace 'src' values with your actual PNG transparent logos
const logos = [
  { name: "Partner 1", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" }, // Placeholder
  { name: "Partner 2", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" }, // Placeholder
  { name: "Partner 3", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" }, // Placeholder
  { name: "Partner 4", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" }  // Placeholder
];

const SocialProof: React.FC = () => {
  return (
    <section className="w-full py-10 border-b border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.2em] mb-8 font-medium">
          Estratégias validadas em nichos de alta performance
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           {logos.map((logo, index) => (
             <div key={index} className="w-32 h-12 relative flex items-center justify-center">
                {/* 
                   IMPORTANT: 
                   1. Use transparent PNGs.
                   2. The filter 'brightness-0 invert' makes them white. 
                   3. Remove 'brightness-0 invert' if your logos are already white/light gray.
                */}
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-w-full max-h-full object-contain brightness-0 invert" 
                />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;