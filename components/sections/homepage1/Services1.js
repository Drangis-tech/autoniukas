import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services1() {
    const { currentLanguage } = useLanguage();
    const isEnglish = currentLanguage.code === 'en';

    return (
        <>
            <section className="section mt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30">
                            <div className="wow animate__animated animate__fadeIn">
                                <h2 className="mb-25" style={{ lineHeight: '50px' }}>
                                    {isEnglish 
                                        ? 'Ground Cargo Transportation in Lithuania and Europe' 
                                        : 'Sausumos krovinių pervežimas Lietuvoje ir Europoje'}
                                </h2>
                                <p className="font-md color-gray-700 mb-20">
                                    {isEnglish 
                                        ? '"Autoniukas" specializes in ground cargo transportation, ensuring safe, fast, and reliable transport in Lithuania and throughout Europe. We work with experienced drivers-forwarders and adapt to each client\'s needs.' 
                                        : '„Autoniukas" specializuojasi sausumos krovinių pervežime, užtikrindama saugų, greitą ir patikimą transportavimą Lietuvoje ir visoje Europoje. Dirbame su patyrusiais vairuotojais-ekspeditoriais ir prisitaikome prie kiekvieno kliento poreikių.'}
                                </p>
                                <p className="font-md color-gray-700 mb-40">
                                    {isEnglish 
                                        ? 'Whether it\'s a one-time transport or ongoing cooperation – we take care of the entire process from loading to final delivery.' 
                                        : 'Nesvarbu, ar tai vienkartinis pervežimas, ar nuolatinis bendradarbiavimas – pasirūpiname visu procesu nuo pakrovimo iki galutinio pristatymo.'}
                                </p>
                                <div className="d-lg-none mb-30 text-center">
                                    <img className="img-responsive" src="/paslaugos.jpeg" alt="Sausumos transportas" style={{ borderRadius: '10px', maxWidth: '280px' }} />
                                </div>
                                <h5 className="color-brand-2 mb-20">{isEnglish ? 'What We Offer:' : 'Ką siūlome:'}</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-unstyled">
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'Full and partial load transportation' : 'Pilnų ir dalinių krovinių pervežimas'}</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'Domestic and international transport' : 'Vietiniai ir tarptautiniai pervežimai'}</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'Flexible routes according to needs' : 'Lankstūs maršrutai pagal poreikius'}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-unstyled">
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'Experienced drivers-forwarders' : 'Patyrę vairuotojai-ekspeditoriai'}</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'Safe cargo transportation' : 'Saugus krovinio transportavimas'}</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{isEnglish ? 'On-time deliveries' : 'Laiku vykdomi pristatymai'}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30 d-none d-lg-block">
                            <div className="box-image-info wow animate__animated animate__fadeIn">
                                <img className="img-responsive" src="/paslaugos.jpeg" alt="Sausumos transportas" style={{ borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
