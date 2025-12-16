import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>

            <ul className="main-menu">
                <li><Link href="/about">Apie mus</Link></li>
                <li><Link href="/contact">Kontaktai</Link></li>
            </ul>
        </>
    )
}
