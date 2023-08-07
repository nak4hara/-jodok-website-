import FooterRecipe from "../../molecules/FooterRecipe";
import Ingredients from "../../molecules/Ingredients";
import Steps from "../../molecules/Steps";
import Title from '../../atoms/Title'

export default function RecipeModel({ title, srcImage, originalURL, steps, ingredients, ingredientsSauce }) {
    return (
        <div className="flex flex-col items-center">
            <Title styles='text-chestnut font-extrabold text-2xl sm:text-3xl pb-3'>
                {title}
            </Title>

            <img
                className="w-full object-cover sm:w-1/2 h-80 rounded pb-3"
                src={srcImage}
            />

            <Ingredients
                listIngredients={ingredients}
                subtitle='What do we need?'
            />

            {/*in case the recipe contains sauce*/}
            {ingredientsSauce !== "" ?
                <Ingredients
                    listIngredients={ingredientsSauce}
                    subtitle='But wait... we need the sauce too, right?'
                />
                : ""}

            <Steps
                steps={steps}
                subtitle='So, time to follow the rules!'
            />
            <FooterRecipe originalURL={originalURL}>
                Wanna know more details? See the original recipe clicking here ;)
            </FooterRecipe>
        </div>
    )
}