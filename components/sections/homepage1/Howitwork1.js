import { useLanguage } from "@/contexts/LanguageContext";

export default function Howitwork1() {
    const { currentLanguage } = useLanguage();
    const isEnglish = currentLanguage.code === 'en';

    return (
        <>
            <section className="section pt-85 bg-worldmap">
                <div className="container">
                    <div className="text-center"><img className="mb-15" src="/autoniukas_icon.svg" alt="autoniukas" style={{ height: '50px' }} />
                        <h2 className="color-grey-900 mb-20 wow animate__animated animate__fadeIn">
                            {isEnglish ? 'How It Works' : 'Kaip Tai Veikia'}
                        </h2>
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                            {isEnglish 
                                ? 'You choose the city or country where the cargo needs to be delivered. All transports are carried out according to clearly defined processes, and the service flow may vary depending on cargo specifics and location. Regardless of needs or requirements, we always find the optimal logistics solution and ensure that cargo is delivered safely and on time.' 
                                : 'Jūs pasirenkate miestą ar šalį, į kurią reikia pristatyti krovinį. Visi pervežimai vykdomi pagal aiškiai nustatytus procesus, o paslaugų eiga gali skirtis priklausomai nuo krovinio specifikos ir vietos. Nepaisant poreikių ar reikalavimų, mes visuomet randame optimalų logistikos sprendimą ir užtikriname, kad kroviniai būtų pristatyti saugiai ir laiku.'}
                        </p>
                    </div>
                    <div className="row mt-50">
                        <div className="col-lg-6 mb-30">
                            <div className="box-image-how"><img className="w-100 wow animate__animated animate__fadeIn" src="/work.webp" alt="transp" />
                                <div className="box-info-bottom-img">
                                    <div className="info-play">
                                        <h4 className="color-white mb-15 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'We have 11+ years of experience in this field' : 'Turime 11+ metų patirtį šioje srityje'}
                                        </h4>
                                        <p className="font-sm color-white wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'We offer reliable transportation solutions tailored to your business needs.' : 'Siūlome patikimus transportavimo sprendimus, pritaikytus jūsų verslo poreikiams.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <ul className="list-how-works">
                                <li>
                                    <div className="image-how"><span className="img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px', fontWeight: '800', color: '#234182', lineHeight: '1' }}>1</span></div>
                                    <div className="info-how">
                                        <h5 className="color-brand-2 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'Client places an order' : 'Klientas pateikia užsakymą'}
                                        </h5>
                                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'Collection of cargo information, verification and coordination of details.' : 'Krovinio informacijos surinkimas, patikrinimas ir detalių suderinimas.'}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image-how"><span className="img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px', fontWeight: '800', color: '#234182', lineHeight: '1' }}>2</span></div>
                                    <div className="info-how">
                                        <h5 className="color-brand-2 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'Order confirmation' : 'Užsakymas patvirtinamas'}
                                        </h5>
                                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'Delivery terms, deadlines and price are coordinated. We prepare a cargo transportation plan.' : 'Suderinamos pristatymo sąlygos, terminai ir kaina. Paruošiame krovinio pervežimo planą.'}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image-how"><span className="img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px', fontWeight: '800', color: '#234182', lineHeight: '1' }}>3</span></div>
                                    <div className="info-how">
                                        <h5 className="color-brand-2 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'Cargo transferred to warehouse / loading location' : 'Krovinys perduodamas į sandėlį / pakrovimo vietą užsakymą'}
                                        </h5>
                                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'Cargo is checked, assessed and prepared for transportation.' : 'Krovinys patikrinamas, įvertinamas ir paruošiamas transportavimui.'}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image-how"><span className="img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px', fontWeight: '800', color: '#234182', lineHeight: '1' }}>4</span></div>
                                    <div className="info-how">
                                        <h5 className="color-brand-2 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'Cargo picked up and shipped' : 'Krovinys paimamas ir išsiunčiamas'}
                                        </h5>
                                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'Our qualified drivers take care of safe loading, route execution and documents.' : 'Kvalifikuoti mūsų vairuotojai pasirūpina saugiu pakrovimu, maršruto vykdymu ir dokumentais.'}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image-how"><span className="img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '42px', fontWeight: '800', color: '#234182', lineHeight: '1' }}>5</span></div>
                                    <div className="info-how">
                                        <h5 className="color-brand-2 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'Delivery completed and confirmed' : 'Pristatymas atliktas ir patvirtintas'}
                                        </h5>
                                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                            {isEnglish ? 'Cargo is delivered to the final recipient, and information is provided to the client with order status updated.' : 'Krovinys pristatomas galutiniam gavėjui, o klientui pateikiama informacija bei atnaujinamas užsakymo statusas.'}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
