import "../recipe.css"

export default function ChocolateCake() {
    return (
        <div className="recipe">
            <h2>Chocolate Cake</h2>
            <img src="https://i.pinimg.com/originals/20/fd/a6/20fda6aeaccc80caf68af1c1f15ea799.jpg" alt="Chocolate Cake" />

            <section className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>2 eggs</li>
                    <li>3 Tbsp sugar</li>
                    <li>50 mL neutral oil</li>
                    <li>1/2 tsp vanilla extract</li>
                    <li>50 mL milk</li>
                    <li>60g flour</li>
                    <li>3 Tbsp cacao powder (50%)</li>
                    <li>1 pinch of salt</li>
                    <li>1 tsp baking powder</li>
                </ul>
                <h3>Chocolate sauce ingredients:</h3>
                <ul>
                    <li>240ml milk</li>
                    <li>3 Tbsp butter</li>
                    <li>160g sugar</li>
                    <li>45g cacao powder</li>
                </ul>
            </section>
            <section className="instructions">
                <h3>Instructions:</h3>
                <ol>
                    <li>In a medium bowl, add the eggs, sugar, oil, and vanilla extract. Using a whisk, beat until have an homogeneous liquid.</li>
                    <li>Add the milk, flour, cacao, and salt and mix until a smooth batter forms.</li>
                    <li>Add the baking powder and stir softly.</li>
                    <li>Spread butter on the skillet, use a nonstick skillet. Pour the batter and cover with a lid.</li>
                    <li>The skillet should stay on low-heat for about 5-7min. Stick the cake with the fork, once is not sticky, it is ready.</li>
                    <li>Put all the ingredients of the sauce in a pan in medium-heat and stir  until thickened. Pour directly on top of the cake.</li>
                    <li>Wait for at least 15 min before serving.</li>
                </ol>
            </section>
            <footer>
                <p>Original recipe: <a target="_blank" href="https://www.youtube.com/watch?v=nktpjJCgXvw">Youtube channel</a></p>
            </footer>
        </div>
    )
}