import Link from "next/link"
import { ThemeController } from "./ThemeController"

function Navbar() {
    return(
        <div className="navbar bg-base-100 ">
            <div className="flex-1">
                <Link href="/" className="text">Eduardo Tovar - ET</Link>
            </div>
            <ThemeController />
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a href="https://www.linkedin.com/in/eduardo-tovar-34a816204/" target="_blank" className="text">CV</a></li>
                <li><Link href="/page" className="text">Sobre mi</Link></li>
                {/* <li>
                    <details>
                    <summary>
                        Sobre mi
                    </summary>
                    
                    <ul className="p-2 bg-base-100">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar