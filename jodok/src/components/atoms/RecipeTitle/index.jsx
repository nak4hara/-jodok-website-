import styles from './RecipeTitle.module.css'

export default function RecipeTitle({title}) {
    return (
        <h2 className={styles.RecipeTitle}>
            {title}
        </h2>
    )
}