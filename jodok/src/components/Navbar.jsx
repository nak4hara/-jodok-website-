import Bars from '../assets/bars-solid.svg'
import '../index.css'
import Logo from './atoms/Logo';
import DropDownList from './molecules/DropDownList';


export default function Navbar() {
    const pages = [
        { id: '1', page: 'love-message', text: 'See my message' },
        { id: '2', page: 'top-5-recipes', text: 'Top 5 recipes' },
        { id: '3', page: 'about-me', text: 'About Karina' },
    ]

    return (
        <nav className='nav'>
            <Logo />
            <div className="menu">
                <img src={Bars} alt="Menu" />
            </div>
        </nav>
    )
}