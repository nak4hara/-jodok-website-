import styles from'./RecipePage.module.css'
import { useParams } from "react-router-dom"
import recipes from '../../../json/recipes.json'
import RecipeModel from "../../templates/RecipeModel";
import NotFound from '../NotFound'

export default function RecipePage() {
    const parameters = useParams();
    
    const recipe = recipes.find((recipe) => {
        return recipe.link === parameters.link
    })

    if(!recipe) {
        return <NotFound />
    }

    return (
        <div className={styles.container}>
            <RecipeModel 
                title={recipe.title}
                srcImage={recipe.img}
                originalURL={recipe.originalURL}
                steps={recipe.steps}
                ingredients={recipe.ingredients}
                ingredientsSauce={recipe.ingredientsSauce}
            />
        </div>
    )
}