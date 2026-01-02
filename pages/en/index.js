import Layout from "@/components/layout/Layout"
import Bgmap from "@/components/sections/homepage1/Bgmap"
import Cta1 from "@/components/sections/homepage1/Cta1"
import Faqs1 from "@/components/sections/homepage1/Faqs1"
import Hero1 from "@/components/sections/homepage1/Hero1"
import Howitwork1 from "@/components/sections/homepage1/Howitwork1"
import Info1 from "@/components/sections/homepage1/Info1"
import Info2 from "@/components/sections/homepage1/Info2"
import News1 from "@/components/sections/homepage1/News1"
import Requestquote1 from "@/components/sections/homepage1/Requestquote1"
import Services1 from "@/components/sections/homepage1/Services1"
import Services2 from "@/components/sections/homepage1/Services2"

export default function HomeEN() {
    return (
        <>
            <Layout 
                transparentHeader={true}
                headTitle="Autoniukas - Professional Cargo Transportation Services in Lithuania and Europe"
                description="Reliable logistics and cargo transportation services in Lithuania and Europe. Over 11 years of experience. Safe and timely delivery to every client."
                url="https://autoniukas.lt/en"
            >
                <Hero1 />
                <Services1 />
                <Services2 />
                <Info1 />
                <Howitwork1 />
                <Faqs1 />
                <Cta1 />
                <Bgmap />
            </Layout>
        </>
    )
}

