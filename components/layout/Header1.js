import Link from "next/link";
import { useEffect, useState } from 'react';
import Menu from "./Menu";

export default function Header({ topBarStyle, handleMobileMenuOpen, transparentHeader }) {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    
    const headerClass = transparentHeader 
        ? (scroll ? "header sticky-bar stick transparent-header" : "header sticky-bar transparent-header")
        : (scroll ? "header sticky-bar stick" : "header sticky-bar");
    
    const logoSrc = (transparentHeader && !scroll) ? "/autoniukas_baltas.svg" : "/autoniukas.png";
    
    return (
        <>
            <header className={headerClass}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo"><Link className="d-flex" href="/"><img alt="Autoniukas" src={logoSrc} /></Link></div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <Menu />
                                </nav>
                                <div className="burger-icon burger-icon-white" onClick={handleMobileMenuOpen}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="d-inline-block box-dropdown-cart"><span className="font-lg icon-list icon-account"><span className="font-sm color-grey-900 arrow-down">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                                        </path>
                                    </svg>English</span></span>
                                    <div className="dropdown-account">
                                        <ul>
                                            <li><Link className="font-md" href="#"><img src="/assets/imgs/template/icons/en.png" alt="transp" />
                                                English</Link></li>
                                            <li><Link className="font-md" href="#"><img src="/assets/imgs/template/icons/fr.png" alt="transp" />
                                                French</Link></li>
                                            <li><Link className="font-md" href="#"><img src="/assets/imgs/template/icons/cn.png" alt="transp" />
                                                Chiness</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
