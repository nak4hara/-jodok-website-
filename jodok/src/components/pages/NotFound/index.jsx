import ErrorImage from'../../../assets/404.svg'
import styles from './NotFound.module.css'

export default function NotFound(){
    return (
        <div className={styles.errorContainer}>
            <img className={styles.errorImage} src={ErrorImage} />
            <p className={styles.paragraph}>
                Come back later or wait for Karina to finish her work!
            </p>
            <p className={styles.paragraph}>
                Click on logo to go back, thanks!
            </p>
        </div>
    )
}