import "../recipe.css"

export default function FudgyBrownie() {
    return (
        <div className="recipe">
            <h2>Fudgy Brownie</h2>
            <img src="https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg?resize=1200:*" alt="Fudgy Brownie" />

            <section className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>225g good-quality chocolate, semi sweet</li>
                    <li>168g melted butter</li>
                    <li>200g sugar</li>
                    <li>2 eggs</li>
                    <li>2 tsp vanilla extract</li>
                    <li>95g all-purpose flour</li>
                    <li>30g cocoa powder</li>
                    <li>1 tsp salt</li>
                </ul>
            </section>
            <section className="instructions">
                <h3>Instructions:</h3>
                <ol>
                    <li>Preheat the oven to 180°C. Line an 20 cm square baking dish with parchment paper.</li>
                    <li>Chop the chocolate into chunks. Melt half of the chocolate in the microwave in 20-second intervals, saving the other half for later.</li>
                    <li>In a large bowl, mix the butter and sugar, then beat in the eggs and vanilla for 1-2 minutes, until the mixture becomes fluffy and light in color.</li>
                    <li>Whisk in the melted chocolate (make sure it's not too hot or else the eggs will cook), then sift in the flour, cocoa powder, and salt. Fold to incorporate the dry ingredients, being careful not to overmix as this will cause the brownies to be more cake-like in texture.</li>
                    <li>Fold in the chocolate chunks, then transfer the batter to the prepared baking dish.</li>
                    <li>Bake for 25-30 minutes, depending on how fudgy you like your brownies, then cool completely.</li>
                </ol>
            </section>
            <footer>
                <p>Original recipe: <a target="_blank" href="https://tasty.co/recipe/the-best-fudgy-brownies">Tasty</a></p>
            </footer>
        </div>
    )
}