import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ConversionPopupProps {
  onClose: () => void;
  onConhecerPlanos: () => void;
  variation?: 1 | 2 | 3;
}

export const ConversionPopup = ({ onClose, onConhecerPlanos, variation = 1 }: ConversionPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const demoGifs = [
    "/assets/real-destinations/dest-new-1.gif",
    "/assets/real-destinations/dest-new-2.gif",
    "/assets/real-destinations/dest-new-3.gif",
    "/assets/real-destinations/dest-new-4.gif",
  ];

  const copy = {
    1: {
      title: "PARE DE",
      highlight: "PERDER TEMPO",
      description: "Tenha acesso imediato ao maior catálogo de vídeos e artes para agências de viagens do país.",
      button: "DESBLOQUEAR TUDO AGORA",
      footer: "O catálogo completo que sua agência precisa"
    },
    2: {
      title: "O MELHOR",
      highlight: "CUSTO-BENEFÍCIO",
      description: "Por menos de R$ 0,60 por dia, você profissionaliza todo o seu marketing e vende 3x mais.",
      button: "ASSINAR COM DESCONTO",
      footer: "O investimento mais inteligente do ano"
    },
    3: {
      title: "TENHA UMA",
      highlight: "IA CRIATIVA",
      description: "Economize milhares de reais em designers e redatores. Tenha tudo pronto em segundos.",
      button: "GARANTIR ACESSO PRO",
      footer: "A tecnologia que substitui processos caros"
    }
  }[variation];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-md bg-white border-[1px] border-purple-500/30 rounded-[40px] overflow-hidden shadow-2xl text-black"
          >
            <div className="relative">
              <div className="bg-zinc-950 text-white text-center py-2.5 text-[9px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-2">
                <Sparkles className="h-3 w-3 text-yellow-500" />
                ACESSO IMEDIATO LIBERADO
              </div>

              <button 
                onClick={handleClose}
                className="absolute top-12 right-6 p-2 text-zinc-400 hover:text-black transition-colors z-20"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-8 md:p-10 text-center text-black">
                <div className="mb-8">
                  <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4">
                    {copy.title} <span className="text-purple-600 block mt-1">{copy.highlight}</span>
                  </h2>
                  <p className="text-zinc-500 font-bold text-sm tracking-tight max-w-xs mx-auto">
                    {copy.description}
                  </p>
                </div>

                {/* Showcase Carousel */}
                <div className="mb-8 relative group">
                  <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-[170px] mx-auto relative z-10"
                  >
                    <CarouselContent>
                      {demoGifs.map((gif, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[9/16] rounded-3xl overflow-hidden border border-zinc-100 bg-zinc-50 shadow-xl relative">
                            <img 
                              src={gif} 
                              alt={`Preview ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={onConhecerPlanos}
                    className="w-full bg-black text-white hover:bg-zinc-900 font-black uppercase text-sm tracking-widest h-16 rounded-2xl shadow-xl transition-all"
                  >
                    {copy.button}
                  </Button>
                  
                  <p className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.2em] mt-6">
                    {copy.footer}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
