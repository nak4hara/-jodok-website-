import styles from './RecipeDescription.module.css'

export default function RecipeDescription({description}) {
    return (
        <p className={styles.recipeDescription}>
            {description}
        </p>
    )
}