import styles from './Logo.module.css'
import LogoImage from '../../../assets/logo.png'

export default function Logo() {
    return (
        <div className={styles.logo}>
            <img src= {LogoImage} alt="Logotype from the website" />
        </div>
    )
}