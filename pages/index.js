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

export default function Home() {
    return (
        <>
            <Layout 
                transparentHeader={true}
                headTitle="Autoniukas - Profesionalios Krovinių Pervežimo Paslaugos Lietuvoje ir Europoje"
                description="Patikimos logistikos ir krovinių pervežimo paslaugos Lietuvoje ir Europoje. Daugiau nei 11 metų patirtis. Saugus ir laiku atliekamas pristatymas kiekvienam klientui."
                url="https://autoniukas.lt"
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