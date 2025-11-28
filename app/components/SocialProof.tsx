import { Quote } from "lucide-react";

export function SocialProof() {
    return (
        <section className="py-24 bg-primary-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-900/20" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center mb-8">
                            <Quote className="w-6 h-6 text-white fill-current" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading leading-tight">
                            "Je ne vends pas du code. Je vends de la sérénité aux dirigeants qui veulent faire grandir leur boîte."
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-primary-800 rounded-full overflow-hidden border-2 border-accent-500">
                                {/* Placeholder for Joachim's photo */}
                                <div className="w-full h-full bg-primary-700 flex items-center justify-center text-xs text-primary-300">
                                    <img src="/images/ProfilePic.png" alt="Joachim Duplat" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold text-lg">Joachim Duplat</div>
                                <div className="text-primary-200">Expert en digitalisation BTP & Transport</div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-primary-800 grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">10+</div>
                                <div className="text-sm text-primary-200">Années d'expérience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">50+</div>
                                <div className="text-sm text-primary-200">PME accompagnées</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">100%</div>
                                <div className="text-sm text-primary-200">Sur mesure</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary-900/50 p-8 rounded-2xl border border-primary-800 backdrop-blur-sm">
                        <h3 className="text-xl font-bold mb-6">Ils nous font confiance</h3>
                        <div className="space-y-6">
                            <div className="p-4 bg-primary-900 rounded-xl border border-primary-800/50">
                                <p className="text-primary-100 italic mb-4">"Avant, je passais mes week-ends à faire des devis. Aujourd'hui, tout est prêt le vendredi soir. L'équipe a adopté l'outil en 2 semaines."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-xs font-bold">JM</div>
                                    <div>
                                        <div className="font-semibold text-sm">Julien Moreau</div>
                                        <div className="text-xs text-primary-300">Gérant, JM Transports (20 salariés)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-primary-900 rounded-xl border border-primary-800/50">
                                <p className="text-primary-100 italic mb-4">"Enfin quelqu'un qui comprend notre métier. Pas de jargon technique, que du concret. La rentabilité par chantier est devenue limpide."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-xs font-bold">SP</div>
                                    <div>
                                        <div className="font-semibold text-sm">Sophie Petit</div>
                                        <div className="text-xs text-primary-300">Dirigeante, BatiRenov (12 salariés)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
