import Bars from '../assets/bars-solid.svg'
import '../index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from './atoms/Logo';


export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className='nav'>
                <Logo />
                <div id="menu" onClick={() => { setOpen(!open) }}>
                    <img src={Bars} alt="Menu" />
                </div>
            </nav>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'} `}>
                <p className='dropdown__item'>Olá, amor da minha vida</p>
                <ul>
                    <DropDownItem page="love-message" text="See my message" />
                    <DropDownItem page="top-5-recipes" text="Top 5 recipes" />
                    <DropDownItem text="About Karina" />
                </ul>
            </div>
        </>
    )
}

function DropDownItem(props) {
    return (
        <li className='dropdown__item'>
            <Link className="dropdown__btn" to={props.page}
                onClick={() => setOpen(!open)}>{props.text}</Link>
        </li>
    )
}