import styles from './Ingredients.module.css'

export default function Ingredients({ listIngredients, classNameTitle, subtitle}) {
    return (
        <section className={styles.ingredients}>
            <h3 className={classNameTitle}>
                {subtitle}
            </h3>
            <ul>
                {listIngredients.map((ingredient, index) => {
                    return (
                        <li key={index}>
                            {ingredient.quantity} {ingredient.name}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}