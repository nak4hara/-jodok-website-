import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

export default function Logo() {
    return (
        <Link to={'/'}>
            <div className={styles.logo}>
                <img src="https://i.ibb.co/M17ydpJ/photo-4945417248504392446-x.jpg" alt="Logotype from the website" />
            </div>
        </Link>
    )
}