import styles from './Navbar.module.css'
import Logo from '../../atoms/Logo';
import Menu from '../../atoms/Menu';

export default function Navbar() {

    return (
        <nav className={styles.nav}>
            <Logo />
            <Menu />
        </nav>
    )
}