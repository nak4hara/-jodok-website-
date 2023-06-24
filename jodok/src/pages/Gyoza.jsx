import "../recipe.css"

export default function Gyoza() {
    return (
        <div className="recipe">
            <h2>Gyoza</h2>
            <img src="https://www.justonecookbook.com/wp-content/uploads/2020/04/Gyoza-3096-II-768x1152.jpg" alt="Gyoza" />

            <section className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>1 package gyoza wrappers</li>
                    <li>140g green cabbage</li>
                    <li>2 scallions</li>
                    <li>2 shiitake mushrooms</li>
                    <li>340g ground pork or beef</li>
                    <li>2 cloves garlic</li>
                    <li>1 tsp ginger, grated</li>
                </ul>
                <h3>Seasoning ingredients:</h3>
                <ul>
                    <li>1 tsp roasted sesame oil</li>
                    <li>1 tsp soy sauce</li>
                    <li>1/4 tsp salt</li>
                    <li>1/8 tsp pepper</li>
                </ul>
            </section>
            <section className="instructions">
                <h3>Instructions:</h3>
                <ol>
                    <li>Mince the cabbage into very small pieces, sprinkle salt to dehydrate. After 20 minutes rinse quickly and squeeze the water out.</li>
                    <li>Mince the mushroom and scallions and combine with cabbage and the ground meat. Mince the garlic and ginger and add to the bowl.</li>
                    <li>Add seasoning ingredients, mix well and knead the mixture with your hands until it becomes sticky and pale in color.</li>
                    <li>To fold the gyoza, prepare a small bowl of water, open the gyoza wrapper package.  Add the filling in the center of the wrapper, dip one finger in the water and draw a circle around the outer 6mm of the wrapper.</li>
                    <li>Fold the wrappers according to original recipe link.</li>
                    <li>Heat the pan and add 1 Tbsp neutral-flavored oil. Then, place the gyoza in a single layer, in a circular pattern. Do it in batches.</li>
                    <li>Cook until the bottom turns golden brown, about 3 minutes. Then, add 1/4 cup of water to the pan. Immediately cover with a lid and steam the gyoza for about 5 minutes of until most of water evaporates.</li>
                    <li>Remove the lid to evaporate any remaing water. Serve with a combination of 1 Tbsp soy sauce, 1 Tbsp water and 1 Tbsp rice vinegar.</li>
                </ol>
            </section>
            <footer>
                <p>Original recipe: <a target="_blank" href="https://www.justonecookbook.com/gyoza/">Just One Cookbook</a></p>
            </footer>
        </div>
    )
}