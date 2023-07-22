import "../recipe.css"
import FooterRecipe from "../components/molecules/FooterRecipe";
import Ingredients from "../components/molecules/Ingredients";
import Steps from "../components/molecules/Steps";
import Recipes from '../json/recipes.json'

export default function RecipePage(props) {
    const indexfromRecipe = Recipes.findIndex(x => x.title === 'Beef and Broccoli')
    
    return (
        <div className="recipe">
            <h2>{Recipes[indexfromRecipe].title}</h2>
            <img
                src={Recipes[indexfromRecipe].img}
                alt={Recipes[indexfromRecipe].title} />
            <Ingredients index={indexfromRecipe} />
            <Steps index={indexfromRecipe} />
            <FooterRecipe originalURL={Recipes[indexfromRecipe].originalURL} />
        </div>
    )
}