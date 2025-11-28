import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

export function Footer() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // { firstname, lastname, email, phone }
    });

    const data = await res.json().catch(() => null);
    console.log("[LEAD] status:", res.status, "data:", data);

    if (!res.ok) {
      console.error("[LEAD] Erreur API, on ne navigue pas");
      return;
    }

    // si tout va bien, on continue vers le quiz
    navigate("/quiz", { state: formData });
  } catch (error) {
    console.error("[LEAD] Erreur réseau vers l'API Vercel :", error);
  }
};

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <footer className="bg-primary-950 text-white pt-24 pb-12 border-t border-primary-900">
            <div className="container mx-auto px-4">
                {/* CTA Section */}
                <div id="contact-form" className="bg-primary-600 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                                Prêt à passer à la vitesse supérieure ?
                            </h2>
                            <p className="text-primary-100 text-lg mb-8 max-w-md">
                                Ne laissez plus l'administratif freiner votre croissance.
                                Remplissez ce formulaire pour demander votre audit gratuit de 30 minutes.
                            </p>
                            <div className="hidden lg:block space-y-4 text-primary-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary-500/50 flex items-center justify-center text-white font-bold">1</div>
                                    <span>Analyse de vos process actuels</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary-500/50 flex items-center justify-center text-white font-bold">2</div>
                                    <span>Démonstration personnalisée</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary-500/50 flex items-center justify-center text-white font-bold">3</div>
                                    <span>Plan d'action sur mesure</span>
                                </div>
                            </div>
                        </div>

                        <form className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-medium text-primary-100 mb-1">Prénom</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 text-primary-950 placeholder:text-primary-400 focus:ring-2 focus:ring-accent-400"
                                        placeholder="Julien"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block text-sm font-medium text-primary-100 mb-1">Nom</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 text-primary-950 placeholder:text-primary-400 focus:ring-2 focus:ring-accent-400"
                                        placeholder="Moreau"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-1">Email professionnel</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 text-primary-950 placeholder:text-primary-400 focus:ring-2 focus:ring-accent-400"
                                    placeholder="julien@transport-moreau.fr"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="phone" className="block text-sm font-medium text-primary-100 mb-1">Numéro de téléphone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 text-primary-950 placeholder:text-primary-400 focus:ring-2 focus:ring-accent-400"
                                    placeholder="06 12 34 56 78"
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full px-8 py-4 bg-white text-primary-700 hover:bg-secondary-100 rounded-xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2">
                                Réserver mon audit offert
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <p className="text-xs text-primary-200 text-center mt-4">
                                Gratuit & sans engagement. Réponse sous 24h.
                            </p>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-primary-900 pb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold font-heading mb-4">
                            Joachim<span className="text-primary-500">Duplat</span>
                        </div>
                        <p className="text-primary-200 max-w-sm">
                            Accompagnement et développement de logiciels sur mesure pour les PME du BTP, Transport et Déménagement.
                        </p>
                    </div>

                    {/* <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-primary-200">
                            <li><a href="#" className="hover:text-white transition-colors">La Méthode Q4C</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Développement Web</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Application Mobile</a></li>
                        </ul>
                    </div> */}

                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <ul className="space-y-2 text-primary-200">
                            <li>contact@joachimduplat.fr</li>
                            <li>Marseille, France</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 text-center text-primary-300 text-sm">
                    © {new Date().getFullYear()} Joachim Duplat. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
