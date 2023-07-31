import styles from './FooterRecipe.module.css'

export default function FooterRecipe({ originalURL, children }) {
    return (
        <footer className={styles.footer}>
            <a target="_blank" href={originalURL}>
                {children}
            </a>
        </footer>
    )
}