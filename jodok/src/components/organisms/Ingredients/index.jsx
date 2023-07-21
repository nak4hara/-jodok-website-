import styles from './Ingredients.module.css'

export default function Ingredients({ingredients}) {
    return (
        <section className={styles.ingredients}>
            <h3>Ingredients:</h3>
            <ul>
                <li key={ingredients.name}>
                    {ingredients.quantity} {ingredients.name}
                </li>
            </ul>
        </section>
    )
}