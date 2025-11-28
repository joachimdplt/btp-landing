import type { Route } from "./+types/home";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { Solution } from "../components/Solution";
import { SocialProof } from "../components/SocialProof";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { RevealOnScroll } from "../components/RevealOnScroll";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Logiciels sur mesure BTP & Transport - Joachim Duplat" },
    { name: "description", content: "Transformez votre entreprise de BTP/Transport en machine opérationnelle avec une application sur mesure." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-primary-950 selection:bg-primary-500 selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-950/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-white font-heading">
            Joachim<span className="text-primary-500">Duplat</span>
          </div>
          <a href="#contact-form" className="hidden md:block px-6 py-2.5 bg-white text-primary-950 hover:bg-secondary-100 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
            Réserver un audit
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <RevealOnScroll>
          <Problem />
        </RevealOnScroll>
        <RevealOnScroll>
          <Solution />
        </RevealOnScroll>
        <RevealOnScroll>
          <SocialProof />
        </RevealOnScroll>
        <RevealOnScroll>
          <FAQ />
        </RevealOnScroll>
      </main>

      <Footer />
    </div>
  );
}
