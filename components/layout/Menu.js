import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>

            <ul className="main-menu">
                <li><Link href="/about">About Us</Link></li>
                <li className="has-children"><Link href="#">Services</Link>
                    <div className="sub-menu five-col">
                        <div className="menu-col">
                            <h6 className="color-brand-2 mb-15">Sea Forwarding</h6>
                            <div className="menu-image"><img src="/assets/imgs/page/homepage1/menu1.png" alt="transp" /></div>
                            <ul className="megamenu">
                                <li><Link href="/services">Container Shipping</Link></li>
                                <li><Link href="/services">Bulk Shipping</Link></li>
                                <li><Link href="/services">Roll-on/Roll-off Shipping</Link></li>
                                <li><Link href="/services">Break Bulk Shipping</Link></li>
                                <li><Link href="/services">Project Cargo Shipping</Link></li>
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2 mb-15">Air Freight Forwarding</h6>
                            <div className="menu-image"><img src="/assets/imgs/page/homepage1/menu2.png" alt="transp" /></div>
                            <ul className="megamenu">
                                <li><Link href="/services">General Cargo</Link></li>
                                <li><Link href="/services">Express Shipping</Link></li>
                                <li><Link href="/services">Dangerous Goods</Link></li>
                                <li><Link href="/services">Oversized Cargo</Link></li>
                                <li><Link href="/services">Perishable Goods</Link></li>
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2 mb-15">Land Transportation</h6>
                            <div className="menu-image"><img src="/assets/imgs/page/homepage1/menu3.png" alt="transp" /></div>
                            <ul className="megamenu">
                                <li><Link href="/services">Road Freight</Link></li>
                                <li><Link href="/services">Rail Freight</Link></li>
                                <li><Link href="/services">Intermodal Transportation</Link></li>
                                <li><Link href="/services">Less-than-Truckload (LTL) Shipping</Link></li>
                                <li><Link href="/services">Specialized Transportation</Link></li>
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2 mb-15">Railway Logistics</h6>
                            <div className="menu-image"><img src="/assets/imgs/page/homepage1/menu4.png" alt="transp" /></div>
                            <ul className="megamenu">
                                <li><Link href="/services">Rail Freight Transportation</Link></li>
                                <li><Link href="/services">Rail Terminal Services</Link></li>
                                <li><Link href="/services">Rail Freight Forwarding</Link></li>
                                <li><Link href="/services">Intermodal Transportation</Link></li>
                                <li><Link href="/services">Rail Logistics Consulting</Link></li>
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6 className="color-brand-2 mb-15">Warehouse</h6>
                            <div className="menu-image"><img src="/assets/imgs/page/homepage1/menu5.png" alt="transp" /></div>
                            <ul className="megamenu">
                                <li><Link href="/services">Warehousing</Link></li>
                                <li><Link href="/services">Distribution Center Operations</Link></li>
                                <li><Link href="/services">E-Commerce Fulfillment</Link></li>
                                <li><Link href="/services">Reverse Logistics</Link></li>
                                <li><Link href="/services">Inventory Management</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
