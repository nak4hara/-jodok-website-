import styles from './Ingredients.module.css'
import Recipes from '../../../json/recipes.json'

export default function Ingredients({index}) {
    const Recipe = Recipes[index].ingredients;

    return (
        <section className={styles.ingredients}>
            <h3>Ingredients:</h3>
            <ul>
                {Recipe.map((ingredient) => {
                    return (
                        <li key={ingredient.name}>
                            {ingredient.quantity} {ingredient.name}
                        </li>   
                    )
                })}
            </ul>
        </section>
    )
}