import { useEffect, useState } from "react"
import "../public/assets/css/style.css"

import 'swiper/css';
// import "swiper/css/navigation";
import "swiper/css/pagination";

import { LanguageProvider } from "@/contexts/LanguageContext"

function MyApp({ Component, pageProps }) {
    return (
        <LanguageProvider>
            <Component {...pageProps} />
        </LanguageProvider>
    )
}

export default MyApp
