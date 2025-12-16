import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ openClass, handleMobileMenuClose }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="burger-icon burger-close" onClick={handleMobileMenuClose}><span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" /></div>
                        <div className="mobile-menu-wrap mobile-header-border">
                            <nav className="mt-15">
                                <ul className="mobile-menu font-heading">
                                    <li><Link href="/about">Apie mus</Link></li>
                                    <li><Link href="/contact">Kontaktai</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
