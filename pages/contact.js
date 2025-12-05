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
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-30">
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Turite klausimų apie krovinių pervežimą ar mūsų teikiamas paslaugas? Mielai padėsime ir pateiksime visą reikiamą informaciją.</p>
                            </div>
                            <div className="col-md-6 mb-30 text-md-end text-start">
                            </div>
                        </div>
                        <div className="row mt-20">
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team1.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Devon Lane</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team2.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Lori Stevens</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team3.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Devon Lane</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team4.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Devon Lane</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/about/team5.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Devon Lane</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/about/team6.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Lori Stevens</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/about/team7.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Devon Lane</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/about/team8.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Devon Lane</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-20" />
                <div className="section d-block" style={{ background: '#FFFFFF', padding: '80px 0' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3 className="color-brand-2 mb-50 wow animate__animated animate__fadeIn" style={{ fontWeight: '700' }}>Susisiekite su mumis</h3>
                            </div>
                        </div>
                        <div className="row justify-content-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                            <div className="col-lg-4 col-md-6 mb-30 wow animate__animated animate__fadeIn">
                                <div className="card-contact-info hover-up" style={{ 
                                    background: '#0B2954', 
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
                                    background: '#0B2954', 
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
                                    <a href="mailto:contact@transp.com" style={{ 
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
                                    background: '#0B2954', 
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
                                    <a href="tel:+38050318470" style={{ 
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
                    </div>
                </div>
            </Layout>
        </>
    )
}