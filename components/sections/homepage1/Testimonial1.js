import Testimonial1Slider from "@/components/slider/Testimonial1Slider";

export default function Testimonial1() {
    return (
        <>
            <section className="section mt-50 bg-customers-say">
                <div className="container">
                    <div className="mb-20 wow animate__animated animate__fadeIn">
                        <img src="/autoniukas_icon_baltas.svg" alt="autoniukas" style={{ height: '50px' }} />
                    </div>
                    <h2 className="color-white mb-20 wow animate__animated animate__fadeIn">
                        Ką sako mūsų klientai</h2>
                    <p className="font-lg color-white wow animate__animated animate__fadeIn">Išgirskite iš mūsų vartotojų, kurie
                        sutaupė tūkstančius savo<br className="d-none d-lg-block" />Startup ir SaaS sprendimams.</p>
                </div>
                <div className="container">
                    <div className="box-slide-customers mt-50">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-3-customers pb-50">
                                <Testimonial1Slider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
