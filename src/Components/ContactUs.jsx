import { Facebook, MapPin, Phone, Shield, UserCircle, Mail, Twitter, Linkedin, Globe } from "lucide-react";
import { NeonIcon } from "./IconEnhancer";

export default function ContactUs() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#141414] border-t border-white/5 mt-20" id="about">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Branding Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <NeonIcon 
                            icon={Shield}
                            size={40}
                            color="var(--color-secondary)"
                            glowSize={15}
                        />
                        <span className="text-2xl font-bold font-poppins text-white">
                            SecureBank
                        </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                        Empowering financial security through innovative banking solutions.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Linkedin, Globe].map((Icon, index) => (
                            <a 
                                key={index}
                                href="#" 
                                className="text-white/50 hover:text-[var(--color-secondary)] transition-colors"
                            >
                                <NeonIcon 
                                    icon={Icon}
                                    size={24}
                                    color="var(--color-secondary)"
                                    glowSize={10}
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <nav className="space-y-3">
                        {['Home', 'Accounts', 'Payments', 'Investments', 'Security'].map((item, index) => (
                            <a 
                                key={index}
                                href="#"
                                className="block text-white/60 hover:text-[var(--color-secondary)] transition-colors text-sm"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Contact Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Details</h3>
                    <div className="space-y-4">
                        {[
                            {icon: UserCircle, text: 'Emmanuel Basikolo', subtext: 'CEO & Founder'},
                            {icon: Phone, text: '+265 886 467 564', subtext: 'Mon-Fri: 8am-6pm'},
                            {icon: MapPin, text: 'Zomba, Malawi', subtext: 'Headquarters'},
                            {icon: Mail, text: 'support@securebank.mw', subtext: '24/7 Support'},
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <NeonIcon 
                                    icon={item.icon}
                                    size={20}
                                    color="var(--color-secondary)"
                                    className="flex-shrink-0 mt-1"
                                />
                                <div>
                                    <p className="text-white/90 text-sm">{item.text}</p>
                                    <p className="text-white/50 text-xs">{item.subtext}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white/80 placeholder-white/30 focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
                        />
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)/90%] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            <Mail size={16} />
                            Subscribe Newsletter
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/50">
                    <div className="mb-4 md:mb-0">
                        © 2025 SecureBank. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}