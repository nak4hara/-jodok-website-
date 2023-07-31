import styles from './RecipeModel.module.css'
import FooterRecipe from "../../molecules/FooterRecipe";
import Ingredients from "../../molecules/Ingredients";
import Steps from "../../molecules/Steps";

export default function RecipeModel({ title, srcImage, originalURL, steps, ingredients, ingredientsSauce }) {
    return (
        <div className={styles.recipe}>
            <h2 className={styles.recipeTitle}>{title}</h2>
            <img
                className={styles.recipeImage}
                src={srcImage}
                alt={title} />
            <Ingredients
                classNameTitle={styles.recipeSubtitle}
                listIngredients={ingredients}
                subtitle='Ingredients:'
            />

            {ingredientsSauce !== "" ?
                <Ingredients
                    classNameTitle={styles.recipeSubtitle}
                    listIngredients={ingredientsSauce}
                    subtitle='Sauce Ingredients:'
                />
                : ""}
            
            <Steps
                classNameTitle={styles.recipeSubtitle}
                steps={steps} />
            <FooterRecipe originalURL={originalURL}>
                Click here to see the original recipe
            </FooterRecipe>
        </div>
    )
}