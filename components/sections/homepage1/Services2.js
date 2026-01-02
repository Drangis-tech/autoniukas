import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services2() {
    const { currentLanguage } = useLanguage();
    const isEnglish = currentLanguage.code === 'en';

    return (
        <>
            <section className="section mt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30 d-none d-lg-block">
                            <div className="box-gallery-faqs">
                                <div className="image-top"><img src="/paslaugos2.webp" alt="Logistikos paslaugos" /></div>
                                <div className="image-bottom">
                                    <div className="image-faq-1"><img src="/paslaugos2_2.webp" alt="Logistikos paslaugos" /></div>
                                    <div className="image-faq-2"><img src="/paslaugos2_3.webp" alt="Logistikos paslaugos" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="wow animate__animated animate__fadeIn">
                                <h2 className="mb-25" style={{ lineHeight: '50px' }}>
                                    {isEnglish 
                                        ? 'Oversized Cargo Transportation' 
                                        : 'Negabaritinių krovinių pervežimas'}
                                </h2>
                                <p className="font-md color-gray-700 mb-40">
                                    {isEnglish 
                                        ? 'With years of experience in transporting oversized and heavy cargo, we offer reliable and individually tailored logistics solutions for your business.' 
                                        : 'Turėdami ilgametę negabaritinių ir sunkiasvorių krovinių pervežimo patirtį, siūlome patikimus ir individualiai pritaikytus logistikos sprendimus Jūsų verslui.'}
                                </p>
                                <div className="d-lg-none mb-30">
                                    <div className="box-gallery-faqs">
                                        <div className="image-top"><img src="/paslaugos2.webp" alt="Logistikos paslaugos" /></div>
                                        <div className="image-bottom">
                                            <div className="image-faq-1"><img src="/paslaugos2_2.webp" alt="Logistikos paslaugos" /></div>
                                            <div className="image-faq-2"><img src="/paslaugos2_3.webp" alt="Logistikos paslaugos" /></div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="color-brand-2 mb-30">{isEnglish ? 'Our Services:' : 'Mūsų teikiamos paslaugos:'}</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-unstyled">
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'We select optimal routes for oversized cargo transportation' : 'Parenkame optimaliausius negabaritinių krovinių gabenimo maršrutus'}</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'We organize special escort for oversized and heavy cargo' : 'Organizuojame specialią negabaritinių ir sunkiasvorių krovinių palydą'}</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'We execute complex multimodal transport (road, sea, ferry)' : 'Vykdome sudėtingus multimodalinius pervežimus (keliais, jūra, keltais)'}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-unstyled">
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'We handle all necessary permits and customs documentation' : 'Pasirūpiname visais reikalingais leidimais ir muitinės dokumentais'}</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'We provide door-to-door oversized cargo transport services' : 'Teikiame didžiagabaričių krovinių gabenimo paslaugas nuo durų iki durų'}</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'We operate in European Union and Scandinavian countries' : 'Pervežimus vykdome Europos Sąjungos ir Skandinavijos šalyse'}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

