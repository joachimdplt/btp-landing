import { ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export function Hero() {
    useEffect(() => {
  const testApi = async () => {
    try {
      const res = await fetch("http://72.61.101.96:4000/health");
      console.log("[TEST API VPS] status:", res.status);
      const data = await res.json().catch(() => null);
      console.log("[TEST API VPS] body:", data);
    } catch (error) {
      console.error("[TEST API VPS] erreur:", error);
    }
  };

  testApi();
}, []);

    return (
        <section className="relative overflow-hidden bg-primary-950 pt-20 pb-32 lg:pt-32 lg:pb-40">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/50 border border-primary-700/50 text-primary-300 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                        </span>
                        Spécialisé BTP, Transport & Déménagement
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 font-heading leading-tight">
                        Réduisez de 30%
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">le temps passé dans l'opérationnel</span>
                    </h1>

                    <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Fini les tableaux Excel, les papiers perdus et les doubles saisies.
                        Pilotez vos chantiers, vos équipes et votre rentabilité en temps réel avec une application sur mesure.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#contact-form" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary-900/20 flex items-center gap-2 group">
                            Demander un audit gratuit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-primary-200 text-sm">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent-500" />
                            <span>Adapté terrain (mobile/tablette)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent-500" />
                            <span>Zéro double saisie</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent-500" />
                            <span>Rentabilité en temps réel</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Dashboard Preview */}
            <div className="mt-16 container mx-auto px-4 relative z-10">
                <div className="relative rounded-xl bg-primary-900/50 border border-primary-800/50 p-2 md:p-4 shadow-2xl max-w-5xl mx-auto backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent rounded-xl pointer-events-none" />
                    <div className="aspect-[16/9] bg-primary-950 rounded-lg overflow-hidden relative border border-primary-900">
                        {/* Placeholder for UI Mockup */}
                        <div className="absolute inset-0 flex items-center justify-center text-primary-700">
                            <div className="text-center">
                                <p className="text-sm uppercase tracking-widest mb-2">Interface de Pilotage</p>
                                <div className="w-32 h-1 bg-primary-900 mx-auto rounded-full overflow-hidden">
                                    <div className="w-1/2 h-full bg-primary-500 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Mock UI Elements */}
                        <div className="absolute top-4 left-4 right-4 h-12 bg-primary-900/50 rounded flex items-center px-4 gap-4 border border-primary-800/50">
                            <div className="w-32 h-4 bg-primary-800 rounded" />
                            <div className="flex-1" />
                            <div className="w-8 h-8 rounded-full bg-primary-800" />
                        </div>
                        <div className="absolute top-20 left-4 w-64 bottom-4 bg-primary-900/30 rounded border border-primary-800/30 p-4 hidden md:block">
                            <div className="w-full h-4 bg-primary-800/50 rounded mb-4" />
                            <div className="w-3/4 h-4 bg-primary-800/50 rounded mb-2" />
                            <div className="w-3/4 h-4 bg-primary-800/50 rounded mb-2" />
                            <div className="w-3/4 h-4 bg-primary-800/50 rounded mb-2" />
                        </div>
                        <div className="absolute top-20 left-4 md:left-72 right-4 bottom-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-primary-900/30 rounded border border-primary-800/30 p-4">
                                <div className="flex justify-between mb-4">
                                    <div className="w-24 h-4 bg-primary-800/50 rounded" />
                                    <div className="w-4 h-4 bg-accent-500 rounded-full" />
                                </div>
                                <div className="space-y-2">
                                    <div className="w-full h-20 bg-primary-800/20 rounded" />
                                    <div className="w-full h-8 bg-primary-800/20 rounded" />
                                </div>
                            </div>
                            <div className="bg-primary-900/30 rounded border border-primary-800/30 p-4">
                                <div className="flex justify-between mb-4">
                                    <div className="w-24 h-4 bg-primary-800/50 rounded" />
                                    <div className="w-4 h-4 bg-primary-500 rounded-full" />
                                </div>
                                <div className="space-y-2">
                                    <div className="w-full h-8 bg-primary-800/20 rounded" />
                                    <div className="w-full h-8 bg-primary-800/20 rounded" />
                                    <div className="w-full h-8 bg-primary-800/20 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
