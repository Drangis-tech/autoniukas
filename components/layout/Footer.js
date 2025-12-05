import Link from "next/link";

export default function Footer1({ }) {
    return (
        <>
            <footer className="footer">
                <div className="footer-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 mb-30">
                                <div className="mb-20"><img src="/autoniukas_baltas.svg" alt="transp" style={{ height: '50px' }} /></div>
                                <p className="font-xs mb-20 color-white">Teikiame patikimas logistikos ir krovinių pervežimo paslaugas Lietuvoje ir Europoje. Mūsų tikslas – saugus ir laiku atliekamas pristatymas kiekvienam klientui.</p>
                            </div>
                            <div className="col-lg-3 mb-30 offset-lg-1">
                                <h5 className="mb-10 color-white">Nuorodos</h5>
                                <ul className="menu-footer">
                                    <li><Link href="/">Pagrindinis</Link></li>
                                    <li><Link href="/about">Apie mus</Link></li>
                                    <li><Link href="/services">Paslaugos</Link></li>
                                    <li><Link href="/contact">Kontaktai</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 mb-30 offset-lg-1">
                                <h5 className="mb-10 color-white">Paslaugos</h5>
                                <ul className="menu-footer">
                                    <li><Link href="#">Oro krovinių gabenimas</Link></li>
                                    <li><Link href="#">Jūrų krovinių gabenimas</Link></li>
                                    <li><Link href="#">Geležinkelių krovinių gabenimas</Link></li>
                                    <li><Link href="#">Sandėliavimas</Link></li>
                                    <li><Link href="#">Distribucija</Link></li>
                                    <li><Link href="#">Pridėtinė vertė</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 text-center text-lg-start"><span className="color-grey-300 font-md">©Autoniukas, UAB {new Date().getFullYear()}. Visos teisės saugomos.</span></div>
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
