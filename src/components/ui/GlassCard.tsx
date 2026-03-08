"use client";

import { motion } from "framer-motion";

export function GlassCard() {
    return (
        <motion.div
            animate={{
                y: [0, -20, 0],
                rotate: [-13.38, -15, -13.38],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="relative w-[300px] h-[180px] sm:w-[500px] sm:h-[300px] md:w-[767px] md:h-[461px] rounded-[30px] md:rounded-[59px] border border-white/20 shadow-2xl overflow-hidden"
            style={{
                background: `radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.045) 77.08%, rgba(70, 144, 213, 0) 100%)`,
                backgroundBlendMode: "overlay, normal",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
            }}
        >
            {/* Inner Dark Rectangle Overlay for Contrast */}
            <div
                className="absolute w-[60%] h-[100%] right-0 top-0 mix-blend-overlay"
                style={{
                    background: "rgba(65, 65, 65, 0.4)",
                }}
            />

            {/* Dots Indicator */}
            <div className="absolute left-[10%] bottom-[30%] flex gap-2 sm:gap-4 items-center">
                <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white/50 rounded-full" />
                <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white/50 rounded-full" />
                <div className="w-2 h-2 sm:w-4 sm:h-4 bg-white/50 rounded-full" />
            </div>

            {/* Typography from Figma */}
            <div className="absolute left-[12%] bottom-[12%] max-w-[80%]">
                <h3 className="font-heading font-semibold text-2xl md:text-5xl lg:text-[60px] leading-tight text-white/70">
                    Glass Effect
                </h3>
            </div>

            {/* Edge Highlight */}
            <div className="absolute inset-0 rounded-[30px] md:rounded-[59px] ring-1 ring-inset ring-white/30 pointer-events-none" />
        </motion.div>
    );
}
