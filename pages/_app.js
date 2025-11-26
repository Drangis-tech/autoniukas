import { useEffect, useState } from "react"
import "../public/assets/css/style.css"

import 'swiper/css';
// import "swiper/css/navigation";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp
