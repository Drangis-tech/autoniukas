import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslation } from "@/translations"

export default function ContactEN() {
    const { currentLanguage } = useLanguage()
    const t = useTranslation(currentLanguage.code)

    return (
        <>
            <style jsx>{`
                .card-contact-info:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25) !important;
                }
            `}</style>
            <Layout>
                <div className="mt-110" />
                <section className="section pt-110 pb-100">
                    <div className="container">
                        <h2 className="mb-20 wow animate__animated animate__fadeIn">{t.contact.title}</h2>
                        <div className="row align-items-center mb-50">
                            <div className="col-md-6 mb-30">
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">{t.contact.description}</p>
                            </div>
                        </div>
                        
                        <div className="row justify-content-center mb-60">
                            <div className="col-lg-4 col-md-6 mb-30 wow animate__animated animate__fadeIn">
                                <div className="card-contact-info hover-up" style={{ 
                                    background: '#234182', 
                                    borderRadius: '0', 
                                    padding: '32px 28px', 
                                    textAlign: 'left',
                                    boxShadow: '0 18px 40px rgba(0, 0, 0, 0.15)',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}>
                                    <div style={{ 
                                        width: '56px', 
                                        height: '56px', 
                                        borderRadius: '50%', 
                                        background: '#C62828',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px'
                                    }}>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="white"/>
                                        </svg>
                                    </div>
                                    <h4 style={{ 
                                        fontSize: '20px', 
                                        fontWeight: '600', 
                                        color: '#FFFFFF',
                                        marginBottom: '4px'
                                    }}>{t.contact.info.email}</h4>
                                    <a href="mailto:niukasauto@gmail.com" style={{ 
                                        fontSize: '22px', 
                                        color: '#FFFFFF',
                                        lineHeight: '1.5',
                                        textDecoration: 'none',
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        transition: 'color 0.3s ease'
                                    }} onMouseEnter={(e) => e.target.style.color = '#C62828'} onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}>niukasauto@gmail.com</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30 wow animate__animated animate__fadeIn">
                                <div className="card-contact-info hover-up" style={{ 
                                    background: '#234182', 
                                    borderRadius: '0', 
                                    padding: '32px 28px', 
                                    textAlign: 'left',
                                    boxShadow: '0 18px 40px rgba(0, 0, 0, 0.15)',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}>
                                    <div style={{ 
                                        width: '56px', 
                                        height: '56px', 
                                        borderRadius: '50%', 
                                        background: '#C62828',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px'
                                    }}>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                                        </svg>
                                    </div>
                                    <h4 style={{ 
                                        fontSize: '20px', 
                                        fontWeight: '600', 
                                        color: '#FFFFFF',
                                        marginBottom: '4px'
                                    }}>Jolanta</h4>
                                    <a href="tel:+37063881847" style={{ 
                                        fontSize: '22px', 
                                        color: '#FFFFFF',
                                        lineHeight: '1.5',
                                        textDecoration: 'none',
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        transition: 'color 0.3s ease'
                                    }} onMouseEnter={(e) => e.target.style.color = '#C62828'} onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}>+370 638 81847</a>
                                    <p style={{ 
                                        fontSize: '14px', 
                                        color: '#B0B0B0',
                                        lineHeight: '1.5',
                                        margin: '0',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>Sweden, Lithuania</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-30 wow animate__animated animate__fadeIn">
                                <div className="card-contact-info hover-up" style={{ 
                                    background: '#234182', 
                                    borderRadius: '0', 
                                    padding: '32px 28px', 
                                    textAlign: 'left',
                                    boxShadow: '0 18px 40px rgba(0, 0, 0, 0.15)',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}>
                                    <div style={{ 
                                        width: '56px', 
                                        height: '56px', 
                                        borderRadius: '50%', 
                                        background: '#C62828',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px'
                                    }}>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                                        </svg>
                                    </div>
                                    <h4 style={{ 
                                        fontSize: '20px', 
                                        fontWeight: '600', 
                                        color: '#FFFFFF',
                                        marginBottom: '4px'
                                    }}>Neringa</h4>
                                    <a href="tel:+37063094599" style={{ 
                                        fontSize: '22px', 
                                        color: '#FFFFFF',
                                        lineHeight: '1.5',
                                        textDecoration: 'none',
                                        display: 'block',
                                        marginBottom: '8px',
                                        fontWeight: '600',
                                        transition: 'color 0.3s ease'
                                    }} onMouseEnter={(e) => e.target.style.color = '#C62828'} onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}>+370 630 94599</a>
                                    <p style={{ 
                                        fontSize: '14px', 
                                        color: '#B0B0B0',
                                        lineHeight: '1.5',
                                        margin: '0',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>Denmark, Germany, Lithuania</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

