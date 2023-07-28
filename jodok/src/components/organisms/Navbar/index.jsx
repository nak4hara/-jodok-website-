import styles from './Navbar.module.css'
import Logo from '../../atoms/Logo';
import MenuBar from '../../atoms/MenuBar';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className={styles.nav}>
            <Link to={'/'}>
                <Logo />
            </Link>

            <MenuBar />
        </nav>
    )
}