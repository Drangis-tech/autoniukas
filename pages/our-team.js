import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
export default function OurTeam() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                <section className="section mt-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30"><span className="btn btn-tag wow animate__animated animate__fadeIn">Meet Our Team</span>
                                <h3 className="color-grey-900 mb-25 mt-15 wow animate__animated animate__fadeIn">We're excited to introduce you to the dedicated individuals who make up our logistics services company</h3>
                                <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                <div className="mt-70 wow animate__animated animate__fadeIn"><Link className="btn btn-brand-2 mr-20" href="/contact">Contact Us</Link><Link className="btn btn-link-medium" href="#">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path srokelinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="box-img-testimonials-4"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage4/img-testimonial-4.png" alt="transp" />
                                    <div className="box-info-testimonial-4">
                                        <h3 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Satisfied</h3>
                                        <p className="font-sm color-grey-900 wow animate__animated animate__fadeIn">We always strive to serve our customers in the best way.</p>
                                        <div className="box-button mt-30"><Link className="btn btn-link font-sm color-brand-2 wow animate__animated animate__fadeIn" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path srokelinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-110 pb-5">
                    <div className="container">
                        <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">Our Leadership Team</h2>
                        <div className="row align-items-end">
                            <div className="col-lg-8 col-md-8 mb-30">
                                <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">Welcome to our tranporation services agency. We are the best at our<br className="d-none d-lg-block" />trans-portation service ever.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="/request-a-quote">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path srokelinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>Get a quote</Link></div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-6 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team1.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Jolanta</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Švedija, Lietuva</p>
                                            <p className="color-grey-500"><Link href="tel:+37063881847">+370 638 81847</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team2.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Neringa</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Danija, Vokietija, Lietuva</p>
                                            <p className="color-grey-500"><Link href="tel:+37063094599">+370 630 94599</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 position-relative">
                    <div className="container">
                        <div className="banner-786">
                            <div className="box-banner-ads box-banner-ads-team">
                                <div className="box-banner-left">
                                    <h6 className="color-brand-2 wow animate__animated animate__fadeIn">Fast shipping with the<br className="d-none d-lg-block" />most modern technology</h6>
                                </div>
                                <div className="box-banner-right wow animate__animated animate__fadeIn" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-50">
                                <div className="box-info-6 box-info-8"><span className="btn btn-tag wow animate__animated animate__fadeIn">Who We Are?</span>
                                    <h2 className="color-grey-900 mb-20 mt-15 wow animate__animated animate__fadeIn">We are the world's leading shipping service provider</h2>
                                    <p className="font-md color-grey-900 mb-35 wow animate__animated animate__fadeIn">Over the years, we have worked together to expand our network of partners to deliver reliability and consistency. We’ve also made significant strides to tightly integrate technology with our processes, giving our clients greater visibility into every engagement.</p>
                                    <div className="row">
                                        <div className="col-lg-6 mb-30">
                                            <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Boost your sale</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Boost your sale</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className="feature2-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Introducing New Features</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className="feature3-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Introducing New Features</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-50">
                                <div className="box-image-why box-image-why-info-8"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage3/img-info-6.png" alt="transp" />
                                    <div className="box-button-play"><a className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeIn" onClick={() => setOpen(true)}><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/template/icons/play.svg" alt="transp" /><span className="color-white wow animate__animated animate__fadeIn">How it work ?<br />Watch video tour</span></a></div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-90" />
                <div className="section bg-map d-block">
                    <div className="container">
                        <div className="box-newsletter">
                            <h3 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">Get in Touch</h3>
                            <div className="row">
                                <div className="col-lg-5 mb-30">
                                    <div className="form-newsletter wow animate__animated animate__fadeIn">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your email *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Weight" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Height" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Message / Note" rows={5} defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-7 mb-30">
                                    <div className="d-flex box-newsletter-right">
                                        <div className="box-map-2 wow animate__animated animate__fadeIn">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.960389549842!2d-83.76408938441998!3d37.15364135542302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1svi!2s!4v1678013229780!5m2!1svi!2s" height={242} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                        <ul className="list-info-footer">
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/address.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Address</h6>
                                                    <p className="font-sm color-grey-900">65 Allerton Street 901 N Pitt Str, USA</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/email.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Email</h6>
                                                    <p className="font-sm color-grey-900">contact@transp.com</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/phone.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Telephone</h6>
                                                    <p className="font-sm color-grey-900">(+380) 50 318 47 07 - (+182) 50 318 47 07</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}