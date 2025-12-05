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
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Kokius krovinių pervežimo paslaugų tipus teikiate?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Mes teikiame krovinių pervežimą Lietuvoje ir visoje Europoje, taip pat siūlome dalinių ir pilnų krovinių transportavimą, ekspedijavimo paslaugas bei specializuotus sprendimus pagal kliento poreikius.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Ar galiu sekti savo krovinio buvimo vietą?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Taip, kiekvienam užsakymui suteikiame galimybę sekti krovinio statusą. Informaciją teikiame realiu laiku arba pagal susitarimą.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Kiek užtrunka krovinio pristatymas?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Pristatymo terminas priklauso nuo krovinio tipo, maršruto ir paslaugos specifikos. Tikslią trukmę suderiname individualiai pateikus užklausą.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Ar galiu pakeisti arba atšaukti užsakymą?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Taip, užsakymo pakeitimai ar atšaukimas galimi, jei krovinys dar nėra perduotas transportavimui. Susisiekite su mūsų komanda, ir mes pakoreguosime užsakymą.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                        <button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Kokie krovinio paruošimo reikalavimai?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Kroviniai turi būti tinkamai supakuoti, paženklinti ir paruošti saugiam transportavimui. Jei reikia — galime padėti su pakavimo sprendimais.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
