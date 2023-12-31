import { Link } from 'react-router-dom';
import Logo from '../../atoms/Logo';
import DropDownMenu from '../../molecules/DropDownMenu';

export default function Navbar({ menuPages }) {

    return (
        <nav className='fixed w-full bg-white p-4 flex flex-row h-20 shadow-lg justify-between'>
            <Link to="/">
                <Logo />
            </Link>
            <DropDownMenu menuPages={menuPages}/>
        </nav>
    )
}