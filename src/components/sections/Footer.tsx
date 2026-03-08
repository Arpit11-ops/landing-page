import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="pt-32 pb-12 relative overflow-hidden" id="contact">
            {/* Background Atmosphere */}
            <div className="mesh-blob bottom-0 right-0 w-[800px] h-[800px] bg-brand-accent1/5" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Massive CTA Block */}
                <div className="mb-32 p-12 md:p-20 rounded-[48px] bg-surface border border-brand-border relative overflow-hidden isolate shadow-premium-xl">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent1/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent2/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2 mix-blend-screen" />

                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                            Ready to scale your digital presence?
                        </h2>
                        <p className="text-text-secondary text-lg mb-8">
                            Let's craft the perfect solution for your brand. Our expert engineers and designers are ready to help you win.
                        </p>
                        <Link
                            href="mailto:hello@arsolutionsindia.com"
                            className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 text-base font-semibold text-background transition-transform hover:scale-105 gap-2"
                        >
                            Contact Us <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Traditional Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="font-heading text-2xl font-extrabold tracking-tighter mb-4 block">
                            AR Solutions
                        </Link>
                        <p className="text-text-secondary text-sm">
                            India's Leading Web development & Web hosting Company.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="flex flex-col gap-3 text-sm text-text-secondary">
                            <li><Link href="#services" className="hover:text-foreground transition-colors">Web Development</Link></li>
                            <li><Link href="#services" className="hover:text-foreground transition-colors">Mobile Apps</Link></li>
                            <li><Link href="#hosting" className="hover:text-foreground transition-colors">Web Hosting</Link></li>
                            <li><Link href="#services" className="hover:text-foreground transition-colors">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="flex flex-col gap-3 text-sm text-text-secondary">
                            <li><Link href="#about" className="hover:text-foreground transition-colors">About Us</Link></li>
                            <li><Link href="#process" className="hover:text-foreground transition-colors">Our Process</Link></li>
                            <li><Link href="#work" className="hover:text-foreground transition-colors">Portfolio</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <ul className="flex flex-col gap-3 text-sm text-text-secondary">
                            <li className="flex items-center gap-2">
                                <Mail size={16} /> <span>hello@arsolutions.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} /> <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="shrink-0 mt-1" />
                                <span>123 Tech Park, Phase 2, Mumbai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between text-sm text-text-muted gap-4">
                    <p>Copyright {new Date().getFullYear()} AR Solutions India. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
