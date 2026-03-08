import Link from "next/link";
import MagneticButton from "../ui/MagneticButton";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/70 backdrop-blur-xl border-b border-brand-border">
            <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-heading text-2xl font-extrabold tracking-tighter">
                    AR Solutions
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent1 to-brand-accent2 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#services" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors relative group">
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent1 to-brand-accent2 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#hosting" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors relative group">
                        Hosting
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent1 to-brand-accent2 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="#work" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors relative group">
                        Work
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent1 to-brand-accent2 transition-all group-hover:w-full"></span>
                    </Link>
                    <a href="http://arhost.supersite2.myorderbox.com/" target="_blank" rel="noreferrer" className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors relative group">
                        Domain
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent1 to-brand-accent2 transition-all group-hover:w-full"></span>
                    </a>
                </div>

                <div className="flex items-center gap-6">
                    <MagneticButton className="hidden md:block">
                        <Link
                            href="#contact"
                            className="inline-flex h-10 items-center justify-center rounded-full bg-brand-accent1 px-6 text-sm font-medium text-white shadow-lg shadow-brand-accent1/20 transition-all hover:bg-brand-accent1/90 hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </MagneticButton>

                    <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle Menu">
                        <span className="w-6 h-0.5 bg-foreground block"></span>
                        <span className="w-6 h-0.5 bg-foreground block"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
