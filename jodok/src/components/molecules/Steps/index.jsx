import styles from './Steps.module.css'
import Recipes from '../../../json/recipes.json'

export default function Steps({index}) {
    const Recipe = Recipes[index].steps;

    return (
        <section className={styles.instructions}>
            <h3>Instructions:</h3>
            <ol>
                {Recipe.map((step) => {
                    return (
                        <li key={step[index]}>
                            {step}
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}