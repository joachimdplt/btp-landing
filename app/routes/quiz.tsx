import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowRight, Check, ChevronLeft, Building2, Truck, Box, Users, TrendingUp, AlertTriangle, Clock } from "lucide-react";

export function meta() {
    return [
        { title: "Évaluation de vos besoins - Joachim Duplat" },
        { name: "description", content: "Définissons ensemble vos besoins pour votre logiciel sur mesure." },
    ];
}

export default function Quiz() {
    const location = useLocation();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        ...location.state, // Pre-fill from footer form if available
        sector: "",
        teamSize: "",
        painPoint: "",
    });

    const totalSteps = 4;

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            // Submit logic here (e.g., send to API)
            alert("Merci ! Nous avons bien reçu vos réponses. Nous vous recontacterons sous 24h.");
            navigate("/");
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const updateField = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
        // Auto-advance for single selection steps
        if (step < totalSteps) {
            setTimeout(() => setStep(step + 1), 300);
        }
    };
    const API_URL = "http://72.61.101.96:4000";

    const handleFinish = async () => {
        try {
            console.log("[QUIZ] Envoi de la 2ème partie du lead :", formData);

            const res = await fetch(`${API_URL}/lead-quiz`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // contient déjà firstname, lastname, email, phone, sector, teamSize, painPoint
            });

            const data = await res.json().catch(() => null);
            console.log("[QUIZ] Réponse API lead-quiz :", res.status, data);
        } catch (error) {
            console.error("[QUIZ] Erreur lors de l'envoi de la 2ème partie :", error);
        } finally {
            navigate("/");
        }
        };

    return (
        <div className="min-h-screen bg-brand-gradient flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-primary-200 text-sm mb-2 font-medium">
                        <span>Étape {step} sur {totalSteps}</span>
                        <span>{Math.round((step / totalSteps) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-primary-900/50 rounded-full overflow-hidden backdrop-blur-sm border border-primary-800/50">
                        <div
                            className="h-full bg-accent-500 transition-all duration-500 ease-out"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        {/* Back Button */}
                        {step > 1 && (
                        <button
                            onClick={handleBack}
                            className="absolute -top-2 -left-2 p-2 text-primary-200 hover:text-white transition-colors"
                            aria-label="Revenir à l'étape précédente"
                            type="button"
                        >
                            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                        </button>
                        )}

                        {/* Step 1: Sector */}
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
                                    Quel est votre secteur d'activité ?
                                </h1>
                                <p className="text-primary-200 text-center mb-8 text-lg">
                                    Pour adapter l'outil à votre jargon et vos contraintes.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <OptionCard
                                        icon={Building2}
                                        label="BTP / Construction"
                                        selected={formData.sector === "btp"}
                                        onClick={() => updateField("sector", "btp")}
                                    />
                                    <OptionCard
                                        icon={Truck}
                                        label="Transport"
                                        selected={formData.sector === "transport"}
                                        onClick={() => updateField("sector", "transport")}
                                    />
                                    <OptionCard
                                        icon={Box}
                                        label="Déménagement"
                                        selected={formData.sector === "moving"}
                                        onClick={() => updateField("sector", "moving")}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Team Size */}
                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
                                    Quelle est la taille de votre équipe ?
                                </h1>
                                <p className="text-primary-200 text-center mb-8 text-lg">
                                    Pour dimensionner l'infrastructure et l'accompagnement.
                                </p>

                                <div className="space-y-4">
                                    <OptionRow
                                        label="1 à 10 personnes"
                                        selected={formData.teamSize === "1-10"}
                                        onClick={() => updateField("teamSize", "1-10")}
                                    />
                                    <OptionRow
                                        label="11 à 50 personnes"
                                        selected={formData.teamSize === "11-50"}
                                        onClick={() => updateField("teamSize", "11-50")}
                                    />
                                    <OptionRow
                                        label="Plus de 50 personnes"
                                        selected={formData.teamSize === "50+"}
                                        onClick={() => updateField("teamSize", "50+")}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 3: Pain Point */}
                        {step === 3 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
                                    Quel est votre plus gros défi actuel ?
                                </h1>
                                <p className="text-primary-200 text-center mb-8 text-lg">
                                    Nous commencerons par résoudre ce problème en priorité.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <OptionCard
                                        icon={Clock}
                                        label="Perte de temps (Planning/Admin)"
                                        selected={formData.painPoint === "time"}
                                        onClick={() => updateField("painPoint", "time")}
                                    />
                                    <OptionCard
                                        icon={AlertTriangle}
                                        label="Erreurs & Oublis"
                                        selected={formData.painPoint === "errors"}
                                        onClick={() => updateField("painPoint", "errors")}
                                    />
                                    <OptionCard
                                        icon={TrendingUp}
                                        label="Manque de visibilité / Rentabilité"
                                        selected={formData.painPoint === "visibility"}
                                        onClick={() => updateField("painPoint", "visibility")}
                                    />
                                    <OptionCard
                                        icon={Users}
                                        label="Adoption par les équipes"
                                        selected={formData.painPoint === "adoption"}
                                        onClick={() => updateField("painPoint", "adoption")}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 4: Confirmation */}
                        {step === 4 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500 text-center">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                                    <Check className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                                    Merci {formData.firstname || "!"}
                                </h1>
                                <p className="text-primary-100 text-lg mb-8 max-w-lg mx-auto">
                                    Nous avons bien noté vos besoins. Joachim va analyser votre profil et vous recontactera au <strong>{formData.phone || "numéro indiqué"}</strong> sous 24h pour votre audit offert.
                                </p>

                                <div className="bg-primary-900/50 p-6 rounded-xl border border-primary-800/50 text-left mb-8">
                                    <h3 className="text-primary-200 text-sm uppercase tracking-wider font-bold mb-4">Récapitulatif</h3>
                                    <ul className="space-y-2 text-white">
                                        <li className="flex justify-between border-b border-primary-800 pb-2">
                                            <span>Secteur</span>
                                            <span className="font-medium">{formData.sector}</span>
                                        </li>
                                        <li className="flex justify-between border-b border-primary-800 pb-2">
                                            <span>Taille d'équipe</span>
                                            <span className="font-medium">{formData.teamSize}</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Défi principal</span>
                                            <span className="font-medium">{formData.painPoint}</span>
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    onClick={handleFinish}
                                    className="px-8 py-3 bg-white text-primary-900 hover:bg-primary-50 rounded-xl font-bold transition-colors"
                                    >
                                    Retour à l'accueil
                                    </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function OptionCard({ icon: Icon, label, selected, onClick }: { icon: any, label: string, selected: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`p-6 rounded-xl border text-left transition-all duration-300 group flex flex-col items-center justify-center gap-4 h-40
                ${selected
                    ? "bg-accent-600 border-accent-400 shadow-lg shadow-accent-600/30"
                    : "bg-primary-900/40 border-primary-800/50 hover:bg-primary-800/60 hover:border-primary-700"
                }
            `}
        >
            <Icon className={`w-8 h-8 ${selected ? "text-white" : "text-primary-300 group-hover:text-white"}`} />
            <span className={`font-medium text-center ${selected ? "text-white" : "text-primary-200 group-hover:text-white"}`}>
                {label}
            </span>
        </button>
    );
}

function OptionRow({ label, selected, onClick }: { label: string, selected: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group
                ${selected
                    ? "bg-accent-600 border-accent-400 shadow-lg shadow-accent-600/30"
                    : "bg-primary-900/40 border-primary-800/50 hover:bg-primary-800/60 hover:border-primary-700"
                }
            `}
        >
            <span className={`font-medium text-lg ${selected ? "text-white" : "text-primary-200 group-hover:text-white"}`}>
                {label}
            </span>
            {selected && <Check className="w-5 h-5 text-white" />}
        </button>
    );
}
