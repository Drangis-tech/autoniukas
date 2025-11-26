import { useState } from "react";

export default function Accordion() {
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
    return (
        <>
            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Kaip galiu grąžinti internetu įsigytą prekę?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Prekę galite grąžinti per 14 dienų nuo gavimo, jei ji nebuvo naudota ir yra originalioje pakuotėje. Susisiekite su mumis el. paštu dėl grąžinimo formos.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Ar galiu atšaukti arba pakeisti užsakymą?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Taip, užsakymą galite atšaukti arba pakeisti, kol jis dar nėra išsiųstas. Prašome kuo skubiau susisiekti su mūsų klientų aptarnavimo skyriumi.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Turiu reklaminį ar nuolaidos kodą?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Nuolaidos kodą galite įvesti atsiskaitymo metu į tam skirtą laukelį. Nuolaida bus pritaikyta automatiškai.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Kokius pristatymo būdus naudojate?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Mes siūlome pristatymą per kurjerius, paštomatus bei atsiėmimą vietoje. Pristatymo laikas priklauso nuo pasirinkto būdo ir vietovės.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                        <button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Kaip galiu atsiskaityti už pirkinius?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Atsiskaityti galite banko kortelėmis, elektronine bankininkyste arba pavedimu. Taip pat priimame mokėjimus per PayPal.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
