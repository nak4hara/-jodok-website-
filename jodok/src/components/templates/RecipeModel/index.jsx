import "./RecipeModel.css"
import FooterRecipe from "../../molecules/FooterRecipe";
import Ingredients from "../../molecules/Ingredients";
import Steps from "../../molecules/Steps";

export default function RecipeModel({ title, srcImage, originalURL, steps, ingredients }) {
    
    return (
        <div className="recipe">
            <h2>{title}</h2>
            <img
                src={srcImage}
                alt={title} />
            <Ingredients listIngredients={ingredients} />
            <Steps steps={steps} />
            <FooterRecipe originalURL={originalURL} />
        </div>
    )
}