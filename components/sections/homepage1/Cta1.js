import Link from "next/link";

export default function Cta1() {
    return (
        <>
            <section className="section pt-70 pb-70 bg-get-quote">
                <div className="container">
                    <div className="box-get-quote">
                        <div className="get-quote-left">
                            <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn">Turite idėjų?</p>
                            <h2 className="color-white wow animate__animated animate__fadeIn">Kurkite savo kitą projektą su mumis
                            </h2>
                        </div>
                        <div className="get-quote-right">
                            <Link className="btn btn-get-quote wow animate__animated animate__fadeIn" href="/contact">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                                </svg>
                                SUSISIEKTI
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
