import { ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                {/* CTA Section */}
                <div className="bg-primary-600 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto mb-24 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                            Prêt à passer à la vitesse supérieure ?
                        </h2>
                        <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
                            Ne laissez plus l'administratif freiner votre croissance.
                            Discutons de vos besoins lors d'un audit gratuit de 30 minutes.
                        </p>
                        <button className="px-8 py-4 bg-white text-primary-700 hover:bg-slate-100 rounded-xl font-bold text-lg transition-all shadow-xl flex items-center gap-2 mx-auto">
                            Réserver mon audit offert
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold font-heading mb-4">
                            Joachim<span className="text-primary-500">Duplat</span>
                        </div>
                        <p className="text-slate-400 max-w-sm">
                            Accompagnement et développement de logiciels sur mesure pour les PME du BTP, Transport et Déménagement.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li><a href="#" className="hover:text-white transition-colors">Audit & Conseil</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Développement Web</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Application Mobile</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Formation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>contact@joachimduplat.fr</li>
                            <li>06 12 34 56 78</li>
                            <li>Lyon, France</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} Joachim Duplat. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
