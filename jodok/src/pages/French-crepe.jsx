import "../recipe.css"

export default function FrenchCrepe() {
    return (
        <div className="recipe">
            <h2>French crêpe</h2>
            <img src="https://www.sweetashoney.co/wp-content/uploads/French-Crepes-6-768x432.jpg" alt="French crepe" />

            <section className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>150g wheat flour</li>
                    <li>2 eggs</li>
                    <li>330ml milk</li>
                    <li>18g unsalted melted butter</li>
                    <li>2/3 Tbsp vanilla extract</li>
                    <li>1/8 tsp salt</li>
                    <li>3/4 tsp sugar</li>
                </ul>
            </section>
            <section className="instructions">
                <h3>Instructions:</h3>
                <ol>
                    <li>In a large bowl, add the flour, eggs, salt, vanilla extract, melted butter, and sugar if used. </li>
                    <li>Using a whisk, beat in the milk gradually until a smooth batter forms with no lumps.</li>
                    <li>Heat a lightly buttered crepe pan over medium/high heat.</li>
                    <li>Pour or scoop the batter onto the pan, then tip and rotate the pan to spread the batter as thinly as possible.</li>
                    <li>Cook until lightly brown on both sides – about 1-2 minutes on each side and serve hot with your favorite fillings.</li>
                </ol>
            </section>
            <footer>
                <p>Original recipe: <a target="_blank" href="https://www.sweetashoney.co/french-crepes-recipe-easy/#recipe-card">Sweet as Honey</a></p>
            </footer>
        </div>
    )
}