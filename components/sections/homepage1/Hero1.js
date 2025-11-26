import Link from "next/link";

export default function Hero1() {
    return (
        <>
            <section className="section d-block">
                <div className="banner-1" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/banner.png)' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <p className="font-md color-white mb-15 wow animate__animated animate__fadeIn" data-wow-delay=".0s">Logistika ir Transportavimas</p>
                                <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Skaitmeninė ir Patikima Transporto<br className="d-none d-lg-block" />Logistikos Įmonė</h1>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Mūsų patyrusi problemų sprendėjų komanda ir
                                            įsipareigojimas visada derintis prie kliento verslo tikslų
                                            ir uždavinių yra tai, kas lemia abipusę sėkmę.</p>
                                    </div>
                                </div>
                                <div className="box-button mt-30">
                                    <Link className="btn btn-brand-1-big hover-up wow animate__animated animate__fadeInUp" href="#">Skaičiuoti kainą</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
