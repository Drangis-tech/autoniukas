import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export default function Hero1() {
    const { currentLanguage } = useLanguage();
    const t = useTranslation(currentLanguage.code);
    const isEnglish = currentLanguage.code === 'en';

    return (
        <>
            <section className="section d-block">
                <div className="banner-1" style={{ backgroundImage: 'url(/hero_2.webp)' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <h1 className="mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s" style={{ color: 'white' }}>
                                    {isEnglish ? 'Professional Cargo Transportation ' : 'Profesionalios Krovinių Pervežimo '}
                                    <br className="d-none d-lg-block" />
                                    {isEnglish ? 'Services' : 'Paslaugos'}
                                </h1>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p className="font-md mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s" style={{ color: 'white' }}>
                                            {isEnglish 
                                                ? 'Our team ensures fast and safe cargo transportation in Lithuania and across Europe. We work responsibly, adapt to customer needs, and ensure that shipments reach their destination on time.'
                                                : 'Mūsų komanda užtikrina greitą ir saugų krovinių pervežimą Lietuvoje ir visoje Europoje. Dirbame atsakingai, prisitaikome prie klientų poreikių ir užtikriname, kad siuntos pasiektų tikslą laiku.'
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="box-button mt-30">
                                    <Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeInUp" href={isEnglish ? '/en/contact' : '/contact'}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                                        </svg>
                                        {isEnglish ? 'Contact Us' : 'Susisiekti'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
