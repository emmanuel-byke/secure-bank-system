import { Shield } from "lucide-react";
import { NeonIcon } from "./IconEnhancer";

export default function Hero() {
    return (
        <main className="w-full h-screen bg-[#1b1e24] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-[var(--color-secondary)/10%] to-transparent rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-l from-[var(--color-secondary)/10%] to-transparent rounded-full blur-3xl" />
            </div>

            {/* Content container */}
            <div className="z-10 flex flex-col items-center gap-8 px-4 max-w-full text-center">
                {/* Welcome badge */}
                <div className="border border-white/10 bg-white/5 rounded-2xl px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/10 mt-5">
                    <h3 className="text-[var(--color-secondary)] font-semibold text-lg tracking-wide">
                        Welcome Guest
                    </h3>
                </div>

                {/* Main heading */}
                <h1 className="w-full text-white text-5xl md:text-6xl font-poppins leading-tight">
                    <span className="text-[var(--color-secondary)] font-bold bg-gradient-to-r from-[var(--color-secondary)]/30 to-transparent px-4 py-2 rounded-xl">
                        Secure
                    </span>{' '}
                    banking, empowering lives<br className="hidden md:block" /> with innovation.
                </h1>

                {/* CTA Section */}
                <div className="w-full max-w-2xl group relative mt-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)/30%] rounded-full blur opacity-20 group-hover:opacity-30 transition duration-1000" />
                    <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-white/20 transition-colors duration-300">
                        <div className="flex-1 py-5 pl-8 pr-4 text-left">
                            <p className="text-white/80 text-lg font-light tracking-wide">
                                Stay Protected
                            </p>
                        </div>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)/80%] text-white px-8 py-5 rounded-full font-semibold tracking-wide hover:bg-gradient-to-l transition-all duration-300 shadow-lg hover:shadow-[var(--color-secondary)/20%]">
                            Get Started
                            <span className="ml-2 opacity-80 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>

                {/* Security icon */}
                <div className="mt-12 animate-float">
                    <NeonIcon 
                        icon={Shield}
                        size={120}
                        color="var(--color-secondary)"
                        color2="#ffffff"
                        glowSize={40}
                    />
                </div>
            </div>
        </main>
    );
}