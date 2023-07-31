import styles from './Logo.module.css'
import LogoImage from '../../../assets/logo.png'

export default function Logo({size}) {
    return (
        <div className={styles.logo}>
            <img className={styles.small}
                src= {LogoImage}
                alt="Logotype from the website" />
        </div>
    )
}