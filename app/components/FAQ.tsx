import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FAQ() {
    const faqs = [
        {
            question: "Est-ce que c'est compliqué à utiliser pour mes équipes ?",
            answer: "Non. C'est notre priorité absolue. Nous concevons l'interface AVEC vos équipes terrain. Gros boutons, vocabulaire métier, simplicité. Si ils savent utiliser WhatsApp, ils sauront utiliser votre application.",
        },
        {
            question: "Combien ça coûte un logiciel sur mesure ?",
            answer: "Moins cher que ce que vous perdez chaque année en inefficacité. Plus sérieusement, nous proposons des budgets adaptés aux PME, souvent amortis en moins de 12 mois grâce aux gains de productivité. Demandez un audit pour avoir une estimation précise.",
        },
        {
            question: "Est-ce que je peux garder mon logiciel de compta ?",
            answer: "Oui ! Nous ne remplaçons pas votre expert-comptable ni son logiciel (Sage, Cegid, etc.). Nous nous connectons à eux pour leur envoyer les factures automatiquement. Fini la double saisie.",
        },
        {
            question: "Combien de temps ça prend à mettre en place ?",
            answer: "Comptez entre 4 et 8 semaines pour une première version opérationnelle. Nous procédons par étapes pour ne pas perturber votre activité.",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-950 mb-4 font-heading">
                        Questions Fréquentes
                    </h2>
                    <p className="text-secondary-600">
                        Tout ce que vous devez savoir avant de vous lancer.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-secondary-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-secondary-50 transition-colors"
            >
                <span className="font-semibold text-primary-950 pr-8">{question}</span>
                {isOpen ? (
                    <Minus className="w-5 h-5 text-primary-500 flex-shrink-0" />
                ) : (
                    <Plus className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                )}
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 pt-0 bg-white text-secondary-600 leading-relaxed border-t border-secondary-100">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}
