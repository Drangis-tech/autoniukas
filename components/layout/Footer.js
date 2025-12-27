import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export default function Footer1({ }) {
    const { currentLanguage } = useLanguage();
    const t = useTranslation(currentLanguage.code);
    const isEnglish = currentLanguage.code === 'en';

    return (
        <>
            <footer className="footer">
                <div className="footer-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-30">
                                <div className="mb-20"><img src="/autoniukas_baltas.svg" alt="transp" style={{ height: '50px' }} /></div>
                                <p className="font-xs mb-20 color-white">{t.footer.aboutText}</p>
                            </div>
                            <div className="col-lg-4 mb-30 offset-lg-2">
                                <h5 className="mb-10 color-white">{t.footer.quickLinks}</h5>
                                <ul className="menu-footer">
                                    <li><Link href={isEnglish ? '/en' : '/'}>{t.nav.home}</Link></li>
                                    <li><Link href={isEnglish ? '/en/about' : '/about'}>{t.nav.about}</Link></li>
                                    <li><Link href={isEnglish ? '/en/contact' : '/contact'}>{t.nav.contact}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 text-center text-lg-start"><span className="color-grey-300 font-md">©Autoniukas, UAB {new Date().getFullYear()}. {t.footer.allRightsReserved}.</span></div>
                                <div className="col-lg-6 col-md-12 text-center text-lg-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
