import styles from './Footer.module.css'
import Logo from '../../atoms/Logo'

export default function Footer(){
    return(
       <footer className={styles.containerFooter}>
            <section className={`${styles.column} ${styles.socialMedia}`}>
                <Logo />
            </section>
            <section className={`${styles.column} ${styles.links}`}>
                links
            </section>
       </footer> 
    )
}