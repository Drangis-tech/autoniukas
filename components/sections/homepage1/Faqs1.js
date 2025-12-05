import Accordion from "@/components/elements/Accordion";
import Link from "next/link";

export default function Faqs1() {
    return (
        <>
            <section className="section pt-80 mb-70 bg-faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box-faqs-left">
                                <div className="mb-20 wow animate__animated animate__fadeIn">
                                    <img src="/autoniukas_icon.svg" alt="autoniukas" style={{ height: '50px' }} />
                                </div>
                                <h2 className="mb-20 wow animate__animated animate__fadeIn">DUK</h2>
                                <p className="font-md color-grey-700 mb-50 wow animate__animated animate__fadeIn">Turite
                                    klausimų? Perskaitykite mūsų DUK arba susisiekite su mumis pagalbos</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box-faqs-left">
                                <div className="box-gallery-faqs">
                                    <div className="image-top"><img src="/1.webp" alt="transp" />
                                    </div>
                                    <div className="image-bottom">
                                        <div className="image-faq-1"><img src="/3.webp" alt="transp" /></div>
                                        <div className="image-faq-2"><img src="/2.webp" alt="transp" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-accordion">
                                <Accordion />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
