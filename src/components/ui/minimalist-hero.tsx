import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
    logoText: string;
    navLinks: { label: string; href: string }[];
    mainText: string;
    readMoreLink: string;
    imageSrc: string;
    imageAlt: string;
    overlayText: {
        part1: string;
        part2: string;
    };
    socialLinks?: { icon: LucideIcon; href: string }[];
    locationText?: string;
    className?: string;
    theme?: 'light' | 'dark';
}

// Helper component for navigation links
const NavLink = ({ href, children, theme }: { href: string; children: React.ReactNode, theme?: 'light' | 'dark' }) => (
    <a
        href={href}
        className={cn(
          "text-[10px] font-black tracking-widest transition-colors uppercase italic",
          theme === 'light' ? "text-zinc-400 hover:text-black" : "text-white/60 hover:text-white"
        )}
    >
        {children}
    </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
    logoText,
    navLinks,
    mainText,
    readMoreLink,
    imageSrc,
    imageAlt,
    overlayText,
    className,
    theme = 'dark',
}: MinimalistHeroProps) => {
    return (
        <div
            className={cn(
                'relative flex w-full flex-col items-center p-4 md:p-8 overflow-x-hidden min-h-[80vh] justify-center',
                theme === 'light' ? 'bg-white text-black' : 'bg-black text-white',
                className
            )}
        >
            {/* Header */}
            <header className="absolute top-0 left-0 z-30 flex w-full p-6 md:p-12 items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xs font-black tracking-[0.2em] italic uppercase"
                >
                    {logoText}
                </motion.div>
                <div className="hidden items-center space-x-12 md:flex">
                    {navLinks.map((link) => (
                        <NavLink key={link.label} href={link.href} theme={theme}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col space-y-1.5 md:hidden"
                    aria-label="Open menu"
                >
                    <span className={cn("block h-0.5 w-6", theme === 'light' ? "bg-black" : "bg-white")}></span>
                    <span className={cn("block h-0.5 w-6", theme === 'light' ? "bg-black" : "bg-white")}></span>
                    <span className={cn("block h-0.5 w-4", theme === 'light' ? "bg-black" : "bg-white")}></span>
                </motion.button>
            </header>

            {/* Main Content Area - Vertically Stacked */}
            <div className="relative flex flex-col items-center w-full max-w-5xl text-center space-y-4">

                {/* Image Section */}
                <div className="relative flex justify-center items-center w-full min-h-[300px] mb-4">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute z-0 h-[280px] w-[280px] rounded-full bg-yellow-400 blur-3xl opacity-30"
                    ></motion.div>
                    <motion.img
                        src={imageSrc}
                        alt={imageAlt}
                        className="relative z-10 h-auto w-72 object-contain md:w-96 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                    />
                </div>

                {/* VENDA MAIS Text Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="z-20 flex flex-col items-center w-full"
                >
                    <h1 className="text-[36px] sm:text-[48px] md:text-[84px] lg:text-[100px] font-black leading-[0.9] tracking-tighter uppercase text-center w-full italic">
                        {overlayText.part1} {overlayText.part2} <br className="md:hidden" /><span className="text-yellow-400">VIAGENS</span>
                    </h1>
                </motion.div>

                {/* Paragraph Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="z-20 px-4 max-w-xl"
                >
                    <p className={cn(
                      "text-base md:text-lg leading-relaxed font-medium opacity-80",
                      theme === 'light' ? "text-zinc-500" : "text-white"
                    )}>
                        {mainText}
                    </p>
                </motion.div>

                {/* Saiba Mais Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="z-20 pt-4 flex flex-col items-center gap-4"
                >
                    <a href={readMoreLink} className="group flex flex-col items-center gap-3">
                      <span className="text-[12px] font-black border-b-2 border-current pb-1 uppercase tracking-widest hover:opacity-70 transition-opacity italic">
                          Quero começar agora
                      </span>
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ChevronDown className="w-5 h-5 text-zinc-400" />
                      </motion.div>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};
