import Layout from "@/components/layout/Layout";
import Brand1Slider from "@/components/slider/Brand1Slider";
import News2Slider from "@/components/slider/News2Slider";
import Testimonial2Slider from "@/components/slider/Testimonial2Slider";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export default function AboutEN() {
    const { currentLanguage } = useLanguage();
    const t = useTranslation(currentLanguage.code);

    return (
        <>
            <Layout
                headTitle="About Us - Autoniukas | Reliable Logistics Company"
                description="Autoniukas is a reliable logistics and transport company with over 11 years of experience. We provide professional cargo transportation services in Lithuania and Europe."
                url="https://autoniukas.lt/en/about"
            >
                <div className="mt-110" />
                <section className="section pt-110 pb-100">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-6 mb-30 order-2 order-lg-1">
                                <h2 className="mb-20 wow animate__animated animate__fadeIn">{t.about.title}</h2>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">{t.about.description1}</p>
                                <p className="font-md color-grey-900 mt-20 mb-20 wow animate__animated animate__fadeIn">{t.about.description2}</p>
                                <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">{t.about.description3}</p>
                                <div className="box-button mt-40">
                                    <Link className="btn btn-brand-1 hover-up mr-40 wow animate__animated animate__fadeIn" href="/en/contact">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                                        </svg>
                                        {t.about.contactButton}
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 position-relative mb-30 order-1 order-lg-2">
                                <div className="row align-items-end">
                                    <div className="col-lg-5 col-md-5 col-sm-5"><img className="mb-20 wow animate__animated animate__fadeIn" src="/about2.webp" alt="transp" /><img className="wow animate__animated animate__fadeIn" src="/about_3.webp" alt="transp" /></div>
                                    <div className="col-lg-7 col-md-7 col-sm-7"><img className="wow animate__animated animate__fadeIn" src="/about1.webp" alt="transp" /></div>
                                </div>
                                <div className="quote-center shape-2" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-50" />

                <div className="mt-50" />
            </Layout>
        </>
    )
}

