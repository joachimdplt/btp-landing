import { Smartphone, LayoutDashboard, FileCheck, Zap } from "lucide-react";

export function Solution() {
    return (
        <section className="py-24 bg-secondary-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                        <Zap className="w-4 h-4 fill-current" />
                        La Solution Sur Mesure
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-6 font-heading">
                        L'outil qui s'adapte à votre métier, <br />
                        <span className="text-primary-600">pas l'inverse</span>
                    </h2>
                    <p className="text-lg text-secondary-600">
                        Nous construisons votre application selon vos process.
                        On part du terrain pour remonter vers le bureau.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Feature 1 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative rounded-2xl bg-white shadow-2xl border border-secondary-100 p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="aspect-[4/3] bg-secondary-100 rounded-xl overflow-hidden relative">
                                    {/* Abstract UI: Dashboard */}
                                    <div className="absolute inset-0 bg-primary-950 p-6">
                                        <div className="flex justify-between items-center mb-8">
                                            <div className="w-32 h-6 bg-primary-800 rounded" />
                                            <div className="w-8 h-8 bg-primary-500 rounded-full" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-primary-900 p-4 rounded-lg border border-primary-800">
                                                <div className="w-8 h-8 bg-accent-500/20 rounded mb-2" />
                                                <div className="w-16 h-4 bg-primary-700 rounded mb-1" />
                                                <div className="w-24 h-6 bg-primary-600 rounded" />
                                            </div>
                                            <div className="bg-primary-900 p-4 rounded-lg border border-primary-800">
                                                <div className="w-8 h-8 bg-primary-500/20 rounded mb-2" />
                                                <div className="w-16 h-4 bg-primary-700 rounded mb-1" />
                                                <div className="w-24 h-6 bg-primary-600 rounded" />
                                            </div>
                                            <div className="col-span-2 bg-primary-900 p-4 rounded-lg border border-primary-800 h-32">
                                                <div className="w-full h-full bg-primary-800/20 rounded" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                                <LayoutDashboard className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-950 mb-4">Cockpit de pilotage en temps réel</h3>
                            <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                                Visualisez l'ensemble de votre activité en un coup d'œil.
                                Chantiers en cours, retards potentiels, marge estimée...
                                Prenez les bonnes décisions basées sur des chiffres réels, pas des suppositions.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-secondary-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                    Vision globale de l'activité
                                </li>
                                <li className="flex items-center gap-3 text-secondary-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                    Alertes automatiques en cas de problème
                                </li>
                                <li className="flex items-center gap-3 text-secondary-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                    Suivi de trésorerie simplifié
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2">
                            <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                                <Smartphone className="w-6 h-6 text-accent-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-950 mb-4">Pensé "Terrain-First"</h3>
                            <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                                Vos équipes ne sont pas derrière un bureau. Votre application non plus.
                                Interface simplifiée, gros boutons, fonctionne même avec une mauvaise connexion.
                                L'adoption par les équipes est notre priorité n°1.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-secondary-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                                    Accessible sur smartphone et tablette
                                </li>
                                <li className="flex items-center gap-3 text-secondary-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                                    Saisie ultra-rapide (photos, dictée vocale)
                                </li>
                                <li className="flex items-center gap-3 text-secondary-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                                    Mode hors-ligne inclus
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative mx-auto w-[300px] h-[600px] bg-primary-950 rounded-[3rem] border-8 border-primary-900 shadow-2xl overflow-hidden">
                                {/* Mobile UI Mockup */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary-900 rounded-b-xl z-20" />
                                <div className="h-full w-full bg-white pt-12 px-4 pb-4 flex flex-col">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="w-8 h-8 bg-secondary-100 rounded-full" />
                                        <div className="w-24 h-4 bg-secondary-100 rounded" />
                                    </div>
                                    <div className="bg-primary-500 p-4 rounded-xl text-white mb-6 shadow-lg shadow-primary-500/30">
                                        <div className="w-16 h-4 bg-white/30 rounded mb-2" />
                                        <div className="w-32 h-6 bg-white/50 rounded" />
                                    </div>
                                    <div className="space-y-3 flex-1 overflow-hidden">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="p-3 border border-secondary-100 rounded-lg flex items-center gap-3">
                                                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex-shrink-0" />
                                                <div className="flex-1">
                                                    <div className="w-24 h-3 bg-secondary-200 rounded mb-1" />
                                                    <div className="w-16 h-2 bg-secondary-100 rounded" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 h-14 bg-primary-950 rounded-xl flex items-center justify-center text-white font-medium">
                                        Valider l'intervention
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative rounded-2xl bg-white shadow-xl border border-secondary-100 p-8">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-secondary-100 pb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                                <FileCheck className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-primary-950">Devis #2024-042</div>
                                                <div className="text-sm text-secondary-500">Validé par le client</div>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Signé</span>
                                    </div>
                                    <div className="flex items-center justify-center py-4">
                                        <div className="h-8 w-0.5 bg-secondary-200" />
                                    </div>
                                    <div className="flex items-center justify-between border-b border-secondary-100 pb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                                <LayoutDashboard className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-primary-950">Chantier Créé</div>
                                                <div className="text-sm text-secondary-500">Planning mis à jour auto.</div>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Auto</span>
                                    </div>
                                    <div className="flex items-center justify-center py-4">
                                        <div className="h-8 w-0.5 bg-secondary-200" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                                <FileCheck className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-primary-950">Facture Générée</div>
                                                <div className="text-sm text-secondary-500">Envoyée au client</div>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">Prêt</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <FileCheck className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-950 mb-4">Zéro double saisie</h3>
                            <p className="text-secondary-600 text-lg leading-relaxed mb-6">
                                Un devis signé devient un chantier. Un chantier terminé devient une facture.
                                L'information circule toute seule. Vous gagnez des heures chaque semaine et éliminez les erreurs.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-secondary-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    Génération de documents en 1 clic
                                </li>
                                <li className="flex items-center gap-3 text-secondary-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    Bibliothèque de prix et d'ouvrages
                                </li>
                                <li className="flex items-center gap-3 text-secondary-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    Signature électronique intégrée
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
