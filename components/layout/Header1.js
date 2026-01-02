import Link from "next/link";
import { useEffect, useState } from 'react';
import Menu from "./Menu";
import LanguageSelector from "../elements/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header({ topBarStyle, handleMobileMenuOpen, transparentHeader }) {
    const [scroll, setScroll] = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { currentLanguage } = useLanguage();
    const isEnglish = currentLanguage.code === 'en';

    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
    }, [scroll])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    
    // When menu is open, we want to keep the header consistent but ensure visibility.
    // If we switch classes too drastically, layout shifts.
    // We will keep 'transparent-header' if it was there, but override background color via custom class/style if menu is open.
    
    const headerClass = transparentHeader 
        ? (scroll ? "header sticky-bar stick transparent-header" : "header sticky-bar transparent-header")
        : (scroll ? "header sticky-bar stick" : "header sticky-bar");
    
    // If menu is open, we force the logo to be the dark one because the background will be white.
    // Unless the header was already sticky/white, in which case it's already dark.
    const forceDarkLogo = isMobileMenuOpen;
    const logoSrc = (transparentHeader && !scroll && !forceDarkLogo) ? "/autoniukas_baltas.svg" : "/autoniukas.png";
    
    return (
        <>
            <header className={`${headerClass} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo"><Link className="d-flex" href={isEnglish ? '/en' : '/'}><img alt="Autoniukas" src={logoSrc} /></Link></div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <Menu />
                                </nav>
                            </div>
                            <div className="header-right">
                                <LanguageSelector 
                                    isTransparent={transparentHeader && !scroll && !isMobileMenuOpen} 
                                />
                                <div className={`burger-icon ${(!scroll && transparentHeader && !isMobileMenuOpen) ? 'burger-icon-white' : ''} ${isMobileMenuOpen ? 'burger-close' : ''}`} onClick={toggleMobileMenu}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="container">
                    <ul className="mobile-nav">
                        <li>
                            <Link 
                                href={currentLanguage.code === 'en' ? '/en/about' : '/about'} 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="mobile-menu-link"
                                style={{ fontSize: '40px', lineHeight: '80px' }}
                            >
                                {currentLanguage.code === 'en' ? 'About Us' : 'Apie mus'}
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href={currentLanguage.code === 'en' ? '/en/contact' : '/contact'} 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="mobile-menu-link"
                                style={{ fontSize: '40px', lineHeight: '80px' }}
                            >
                                {currentLanguage.code === 'en' ? 'Contact' : 'Kontaktai'}
                            </Link>
                        </li>
                    </ul>
                    <div className="mobile-language-selector">
                        <LanguageSelector isMobileMenu={true} />
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Force header background to white when menu is open to match the menu background */
                .header.mobile-menu-open {
                    background-color: #fff !important;
                    box-shadow: none !important; 
                }
                
                /* Header right alignment */
                .header-right {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 20px;
                }

                /* Ensure burger icon stays in place and visible */
                .burger-icon {
                    z-index: 1001;
                    position: relative;
                    display: block; /* Ensure it's visible when moved here, responsive css might hide it but we want it visible on mobile */
                    top: 0;
                }

                /* Hide burger on desktop if needed - relying on bootstrap d-xl-none usually, but here we use media query or existing classes */
                @media (min-width: 1200px) {
                    .burger-icon {
                        display: none;
                    }
                }

                .mobile-menu-dropdown {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh; /* Full screen to cover everything */
                    background: #fff;
                    z-index: 999; /* Below header (1000) so header stays on top */
                    padding-top: 120px; /* Start below the header */
                    padding-bottom: 30px;
                    transform: translateY(-100%);
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
                    opacity: 0;
                    visibility: hidden;
                    display: flex;
                    justify-content: center;
                }
                .mobile-menu-dropdown.active {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
                .mobile-nav {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    align-items: center;
                    width: 100%;
                    text-align: center;
                    line-height: 80px;
                }
                .mobile-nav li {
                    opacity: 0;
                    transform: translateY(-10px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    border-bottom: none;
                    width: 100%;
                    margin-bottom: 15px;
                }
                .mobile-menu-dropdown.active .mobile-nav li {
                    opacity: 1;
                    transform: translateY(0);
                    transition-delay: 0.1s;
                }
                .mobile-menu-dropdown.active .mobile-nav li:nth-child(2) { transition-delay: 0.15s; }
                .mobile-menu-dropdown.active .mobile-nav li:nth-child(3) { transition-delay: 0.2s; }

                .mobile-menu-link {
                    display: block;
                    width: 100%;
                    padding: 25px;
                    font-size: 40px !important;
                    line-height: 80px !important;
                    font-weight: 700 !important;
                    color: #1f2937 !important;
                    background-color: #f3f4f6; /* Light gray background */
                    border-radius: 12px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                }
                .mobile-menu-link:hover {
                    background-color: #E93314; /* Brand color */
                    color: #ffffff !important;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 12px rgba(233, 51, 20, 0.2);
                }

                .mobile-language-selector {
                    margin-top: 40px;
                    padding-top: 30px;
                    border-top: 2px solid #e5e7eb;
                    opacity: 0;
                    transform: translateY(-10px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }

                .mobile-menu-dropdown.active .mobile-language-selector {
                    opacity: 1;
                    transform: translateY(0);
                    transition-delay: 0.25s;
                }
            `}</style>
        </>
    )
}