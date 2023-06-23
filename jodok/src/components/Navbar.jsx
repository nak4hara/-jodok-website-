import Bars from '../assets/bars-solid.svg'
import '../index.css'

export default function Navbar() {
    return (
        <>
            <nav className='nav'>
            <a href="/" className='logo'>
                <img src="https://i.ibb.co/M17ydpJ/photo-4945417248504392446-x.jpg" alt="Logo" />
            </a>
            <a id="menu" href="/">
                    <img src={Bars} alt="Menu" />
                </a>
            </nav>
        </>
    )
}