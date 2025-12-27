import Link from "next/link"
import { useRouter } from "next/router"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Menu() {
    const router = useRouter()
    const { currentLanguage } = useLanguage()
    
    const isEnglish = currentLanguage.code === 'en'

    return (
        <>
            <ul className="main-menu">
                <li>
                    <Link href={isEnglish ? '/en/about' : '/about'}>
                        {isEnglish ? 'About Us' : 'Apie mus'}
                    </Link>
                </li>
                <li>
                    <Link href={isEnglish ? '/en/contact' : '/contact'}>
                        {isEnglish ? 'Contact' : 'Kontaktai'}
                    </Link>
                </li>
            </ul>
        </>
    )
}
