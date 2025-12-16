import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

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
                        <h2 className="mb-20 wow animate__animated animate__fadeIn">Susisiekite su Mumis</h2>
                        <div className="row align-items-center mb-50">
                            <div className="col-md-6 mb-30">
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Turite klausimų apie krovinių pervežimą ar mūsų teikiamas paslaugas? Mielai padėsime ir pateiksime visą reikiamą informaciją.</p>
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
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                                        </svg>
                                    </div>
                                    <h4 style={{ 
                                        fontSize: '20px', 
                                        fontWeight: '600', 
                                        color: '#FFFFFF',
                                        marginBottom: '8px'
                                    }}>Adresas</h4>
                                    <p style={{ 
                                        fontSize: '16px', 
                                        color: '#E0E0E0',
                                        lineHeight: '1.5',
                                        margin: '0'
                                    }}>Lietuva</p>
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
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="white"/>
                                        </svg>
                                    </div>
                                    <h4 style={{ 
                                        fontSize: '20px', 
                                        fontWeight: '600', 
                                        color: '#FFFFFF',
                                        marginBottom: '8px'
                                    }}>El. paštas</h4>
                                    <a href="mailto:info@autoniukas.lt" style={{ 
                                        fontSize: '16px', 
                                        color: '#E0E0E0',
                                        lineHeight: '1.5',
                                        textDecoration: 'none',
                                        display: 'block',
                                        transition: 'color 0.3s ease'
                                    }} onMouseEnter={(e) => e.target.style.color = '#C62828'} onMouseLeave={(e) => e.target.style.color = '#E0E0E0'}>info@autoniukas.lt</a>
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
                                        marginBottom: '8px'
                                    }}>Telefonas</h4>
                                    <a href="tel:+3700000000" style={{ 
                                        fontSize: '16px', 
                                        color: '#E0E0E0',
                                        lineHeight: '1.5',
                                        textDecoration: 'none',
                                        display: 'block',
                                        transition: 'color 0.3s ease'
                                    }} onMouseEnter={(e) => e.target.style.color = '#C62828'} onMouseLeave={(e) => e.target.style.color = '#E0E0E0'}>(+370) 00 000 00</a>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-20">
                            <div className="col-lg-12 text-center mb-40">
                                <h4 className="color-brand-2 mb-10">Mūsų komanda</h4>
                                <p className="font-md color-grey-500">Susisiekite su mūsų komandos nariais tiesiogiai</p>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-30 wow animate__animated animate__fadeIn">
                                <div className="cardTeam pt-30 pb-30 text-center hover-up" style={{ backgroundColor: '#fff', borderRadius: '0', border: '1px solid #CED4DA', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}>
                                    <h6 className="color-brand-2 mb-10">Devon Lane</h6>
                                    <p className="font-xs color-grey-500 mb-20">Founder / CEO</p>
                                    <div className="text-center">
                                        <a href="tel:+37060000000" className="font-sm color-grey-900 d-block mb-5">+370 600 00000</a>
                                        <a href="mailto:name@autoniukas.lt" className="font-sm color-grey-900 d-block">name@autoniukas.lt</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-30 wow animate__animated animate__fadeIn">
                                <div className="cardTeam pt-30 pb-30 text-center hover-up" style={{ backgroundColor: '#fff', borderRadius: '0', border: '1px solid #CED4DA', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}>
                                    <h6 className="color-brand-2 mb-10">Lori Stevens</h6>
                                    <p className="font-xs color-grey-500 mb-20">Founder / CEO</p>
                                    <div className="text-center">
                                        <a href="tel:+37060000000" className="font-sm color-grey-900 d-block mb-5">+370 600 00000</a>
                                        <a href="mailto:name@autoniukas.lt" className="font-sm color-grey-900 d-block">name@autoniukas.lt</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-30 wow animate__animated animate__fadeIn">
                                <div className="cardTeam pt-30 pb-30 text-center hover-up" style={{ backgroundColor: '#fff', borderRadius: '0', border: '1px solid #CED4DA', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}>
                                    <h6 className="color-brand-2 mb-10">Devon Lane</h6>
                                    <p className="font-xs color-grey-500 mb-20">Founder / CEO</p>
                                    <div className="text-center">
                                        <a href="tel:+37060000000" className="font-sm color-grey-900 d-block mb-5">+370 600 00000</a>
                                        <a href="mailto:name@autoniukas.lt" className="font-sm color-grey-900 d-block">name@autoniukas.lt</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-30 wow animate__animated animate__fadeIn">
                                <div className="cardTeam pt-30 pb-30 text-center hover-up" style={{ backgroundColor: '#fff', borderRadius: '0', border: '1px solid #CED4DA', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}>
                                    <h6 className="color-brand-2 mb-10">Devon Lane</h6>
                                    <p className="font-xs color-grey-500 mb-20">Founder / CEO</p>
                                    <div className="text-center">
                                        <a href="tel:+37060000000" className="font-sm color-grey-900 d-block mb-5">+370 600 00000</a>
                                        <a href="mailto:name@autoniukas.lt" className="font-sm color-grey-900 d-block">name@autoniukas.lt</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
