import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Accordion() {
    const { currentLanguage } = useLanguage();
    const isEnglish = currentLanguage.code === 'en';
    
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    const faqs = isEnglish ? [
        {
            question: "What types of cargo transportation services do you provide?",
            answer: "We provide cargo transportation in Lithuania and throughout Europe, and also offer partial and full load transport, forwarding services, and specialized solutions according to client needs."
        },
        {
            question: "Can I track my cargo location?",
            answer: "Yes, we provide the ability to track cargo status for each order. We provide information in real-time or as agreed."
        },
        {
            question: "How long does cargo delivery take?",
            answer: "The delivery term depends on the type of cargo, route, and service specifics. We coordinate the exact duration individually upon request submission."
        },
        {
            question: "Can I change or cancel an order?",
            answer: "Yes, order changes or cancellation are possible if the cargo has not yet been handed over for transportation. Contact our team and we will adjust the order."
        },
        {
            question: "What are the cargo preparation requirements?",
            answer: "Cargo must be properly packed, labeled, and prepared for safe transportation. If needed — we can help with packaging solutions."
        }
    ] : [
        {
            question: "Kokius krovinių pervežimo paslaugų tipus teikiate?",
            answer: "Mes teikiame krovinių pervežimą Lietuvoje ir visoje Europoje, taip pat siūlome dalinių ir pilnų krovinių transportavimą, ekspedijavimo paslaugas bei specializuotus sprendimus pagal kliento poreikius."
        },
        {
            question: "Ar galiu sekti savo krovinio buvimo vietą?",
            answer: "Taip, kiekvienam užsakymui suteikiame galimybę sekti krovinio statusą. Informaciją teikiame realiu laiku arba pagal susitarimą."
        },
        {
            question: "Kiek užtrunka krovinio pristatymas?",
            answer: "Pristatymo terminas priklauso nuo krovinio tipo, maršruto ir paslaugos specifikos. Tikslią trukmę suderiname individualiai pateikus užklausą."
        },
        {
            question: "Ar galiu pakeisti arba atšaukti užsakymą?",
            answer: "Taip, užsakymo pakeitimai ar atšaukimas galimi, jei krovinys dar nėra perduotas transportavimui. Susisiekite su mūsų komanda, ir mes pakoreguosime užsakymą."
        },
        {
            question: "Kokie krovinio paruošimo reikalavimai?",
            answer: "Kroviniai turi būti tinkamai supakuoti, paženklinti ir paruošti saugiam transportavimui. Jei reikia — galime padėti su pakavimo sprendimais."
        }
    ];

    return (
        <>
            <div className="accordion" id="accordionFAQ">
                {faqs.map((faq, index) => (
                    <div key={index + 1} className="accordion-item wow animate__animated animate__fadeIn">
                        <h5 className="accordion-header" onClick={() => handleToggle(index + 1)}>
                            <button className={isActive.key == index + 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>
                                {faq.question}
                            </button>
                        </h5>
                        <div className={isActive.key == index + 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                            <div className="accordion-body">{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
