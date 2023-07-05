import Bars from '../assets/bars-solid.svg'
import '../index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from './atoms/Logo';


export default function Navbar() {
    const pages = [
        { id: '1', page: 'love-message', text: 'See my message' },
        { id: '2', page: 'top-5-recipes', text: 'Top 5 recipes' },
        { id: '3', page: 'about-me', text: 'About Karina' },
    ]

    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className='nav'>
                <Logo />
                <div id="menu" onClick={() => { setOpen(!open) }}>
                    <img src={Bars} alt="Menu" />
                </div>
            </nav>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'} `}>
                <p className='dropdown__item'>Jodok's Favourite recipes</p>
                <ul>
                    {pages.map((page) => {
                        return (
                            <div>
                                <li className='dropdown__item' key={page.id}>
                                    <Link to={page.page} onClick={() => setOpen(!open)}>
                                        {page.text}
                                    </Link>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}