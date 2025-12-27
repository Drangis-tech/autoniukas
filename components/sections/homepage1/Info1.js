import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Info1() {
    const { currentLanguage } = useLanguage();
    const isEnglish = currentLanguage.code === 'en';

    return (
        <>
            <section className="section mt-85">
                <div className="container">
                    <div className="text-center"><img className="mb-15" src="/autoniukas_icon.svg" alt="autoniukas" style={{ height: '50px' }} />
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                            {isEnglish ? 'Results for Industry Leaders' : 'Rezultatai Pramonės Lyderiams'}
                        </p>
                        <h2 className="color-grey-900 mb-65 mt-15 wow animate__animated animate__fadeIn">
                            {isEnglish ? 'Why Clients Trust Our' : 'Kodėl Klientai Pasitiki Mūsų'}
                            <br className="d-none d-lg-block" />
                            {isEnglish ? 'Logistics Services.' : 'Logistikos Paslaugomis.'}
                        </h2>
                    </div>
                    <div className="row mt-50 align-items-center">
                        <div className="col-xl-7 col-lg-6 mb-30">
                            <div className="box-images-pround">
                                <div className="box-images wow animate__animated animate__fadeIn"><img className="img-main" src="/loading.webp" alt="transp" />
                                    <div className="image-2 shape-3">
                                        <div style={{
                                            maskImage: 'url(/assets/imgs/page/homepage1/icon1.png)',
                                            WebkitMaskImage: 'url(/assets/imgs/page/homepage1/icon1.png)',
                                            maskSize: 'contain',
                                            WebkitMaskSize: 'contain',
                                            maskRepeat: 'no-repeat',
                                            WebkitMaskRepeat: 'no-repeat',
                                            backgroundColor: '#E31E25',
                                            width: '100%',
                                            height: '100%'
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 mb-30">
                            <div className="box-info-pround">
                                <h3 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">
                                    {isEnglish ? 'We Are Professionals in Our Field' : 'Mes Esame Savo Srities Profesonalai'}
                                </h3>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">
                                    {isEnglish 
                                        ? 'Over many years, we have developed transparent processes based on technology and an experienced team. Our goal is to give you complete peace of mind knowing that your cargo is in safe hands.' 
                                        : 'Per daugelį metų sukūrėme skaidrius procesus, paremtus technologijomis ir patyrusia komanda. Mūsų tikslas – suteikti jums visišką ramybę žinant, kad kroviniai yra saugiose rankose.'}
                                </p>
                                <div className="mt-30">
                                    <ul className="list-ticks">
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {isEnglish ? 'Experienced drivers' : 'Patyrę vairuotojai'}
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {isEnglish ? 'On-time deliveries' : 'Laiku vykdomi pristatymai'}
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {isEnglish ? 'Continuous cargo tracking' : 'Nuolatinis krovinio sekimas'}
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {isEnglish ? 'Flexible solutions according to your needs' : 'Lankstūs sprendimai pagal jūsų poreikius'}
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {isEnglish ? 'Quick response to market changes' : 'Greita reakcija į rinkos pokyčius'}
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {isEnglish ? 'Friendly, responsible team' : 'Draugiška, atsakinga komanda'}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
