import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>

            <ul className="main-menu">
                <li><Link href="/about">Apie mus</Link></li>
                <li className="has-children"><Link href="#">Paslaugos</Link>
                    <div className="sub-menu five-col">
                        <div className="menu-col">
                            <h6 className="color-brand-2">Sea Forwarding</h6>
                            <Link href="/services">
                                <div className="menu-image">
                                    <img src="/assets/imgs/page/homepage1/menu1.png" alt="transp" />
                                    <div className="menu-image-overlay">
                                        <span className="overlay-text">Plačiau</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2">Air Freight Forwarding</h6>
                            <Link href="/services">
                                <div className="menu-image">
                                    <img src="/assets/imgs/page/homepage1/menu2.png" alt="transp" />
                                    <div className="menu-image-overlay">
                                        <span className="overlay-text">Plačiau</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2">Land Transportation</h6>
                            <Link href="/services">
                                <div className="menu-image">
                                    <img src="/assets/imgs/page/homepage1/menu3.png" alt="transp" />
                                    <div className="menu-image-overlay">
                                        <span className="overlay-text">Plačiau</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2">Railway Logistics</h6>
                            <Link href="/services">
                                <div className="menu-image">
                                    <img src="/assets/imgs/page/homepage1/menu4.png" alt="transp" />
                                    <div className="menu-image-overlay">
                                        <span className="overlay-text">Plačiau</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2">Warehouse</h6>
                            <Link href="/services">
                                <div className="menu-image">
                                    <img src="/assets/imgs/page/homepage1/menu5.png" alt="transp" />
                                    <div className="menu-image-overlay">
                                        <span className="overlay-text">Plačiau</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </li>
                <li><Link href="/contact">Kontaktai</Link></li>
            </ul>
        </>
    )
}
