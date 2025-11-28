import { AlertTriangle, FileX, Clock, TrendingDown } from "lucide-react";

export function Problem() {
    const problems = [
        {
            icon: Clock,
            title: "Planning à l'arrache",
            description: "Géré sur tableau blanc ou Excel. Difficile à modifier, impossible à partager en temps réel avec les équipes.",
        },
        {
            icon: FileX,
            title: "Papiers perdus",
            description: "Bons de livraison, heures, factures... L'information se perd entre le camion et le bureau.",
        },
        {
            icon: TrendingDown,
            title: "Rentabilité floue",
            description: "Impossible de savoir combien vous gagnez vraiment par chantier avant la fin du mois (ou de l'année).",
        },
        {
            icon: AlertTriangle,
            title: "Erreurs de saisie",
            description: "Recopier les infos du papier vers Excel puis vers la compta. C'est long et source d'erreurs.",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
                        Vous êtes expert sur le terrain, <br />
                        <span className="text-primary-600">mais le bureau vous ralentit ?</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Votre entreprise grandit, mais vos outils sont restés les mêmes qu'à vos débuts.
                        Résultat : vous passez plus de temps à gérer les problèmes qu'à développer votre boîte.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow group">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
