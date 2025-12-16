import Link from "next/link";

export default function Services1() {
    return (
        <>
            <section className="section mt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30">
                            <div className="wow animate__animated animate__fadeIn">
                                <h2 className="mb-25" style={{ lineHeight: '50px' }}>Sausumos krovinių pervežimas Lietuvoje ir Europoje</h2>
                                <p className="font-md color-gray-700 mb-20">
                                    „Autoniukas“ specializuojasi sausumos krovinių pervežime, užtikrindama saugų, greitą ir patikimą transportavimą Lietuvoje ir visoje Europoje. Dirbame su patyrusiais vairuotojais-ekspeditoriais ir prisitaikome prie kiekvieno kliento poreikių.
                                </p>
                                <p className="font-md color-gray-700 mb-40">
                                    Nesvarbu, ar tai vienkartinis pervežimas, ar nuolatinis bendradarbiavimas – pasirūpiname visu procesu nuo pakrovimo iki galutinio pristatymo.
                                </p>
                                <div className="d-lg-none mb-30 text-center">
                                    <img className="img-responsive" src="/paslaugos.jpeg" alt="Sausumos transportas" style={{ borderRadius: '10px', maxWidth: '280px' }} />
                                </div>
                                <h5 className="color-brand-2 mb-20">Ką siūlome:</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-unstyled">
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Pilnų ir dalinių krovinių pervežimas</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Vietiniai ir tarptautiniai pervežimai</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Lankstūs maršrutai pagal poreikius</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-unstyled">
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Patyrę vairuotojai-ekspeditoriai</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Saugus krovinio transportavimas</span>
                                            </li>
                                            <li className="mb-20 d-flex">
                                                <svg className="w-6 h-6 icon-16 mr-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Laiku vykdomi pristatymai</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30 d-none d-lg-block">
                            <div className="box-image-info wow animate__animated animate__fadeIn">
                                <img className="img-responsive" src="/paslaugos.jpeg" alt="Sausumos transportas" style={{ borderRadius: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
