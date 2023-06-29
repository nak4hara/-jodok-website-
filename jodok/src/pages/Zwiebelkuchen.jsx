import "../recipe.css"

export default function Zwiebelkuchen() {
    return (
        <div className="recipe">
            <h2>Zwiebelkuchen</h2>
            <img src="https://img.chefkoch-cdn.de/rezepte/1243811229272585/bilder/704511/crop-642x428/schwaebischer-zwiebelkuchen.jpg" alt="Zwiebelkuchen" />

            <section className="ingredients">
                <h3>Ingredients for dough:</h3>
                <ul>
                    <li>250g flour</li>
                    <li>50g butter, soft</li>
                    <li>1 package dry yeast</li>
                    <li>1 tsp of salt</li>
                    <li>1 tsp of sugar</li>
                    <li>150mL warm milk</li>
                </ul>
                <h3>Ingredients:</h3>
                <ul>
                    <li>500g Onion, medium slices</li>
                    <li>50g butter</li>
                    <li>1 Tbsp flour</li>
                    <li>2 eggs</li>
                    <li>100mL süsse sahne (heavy cream)</li>
                    <li>1 pinch of salt</li>
                    <li>Kümmel (caraway)</li>
                    <li>75g bacon, diced</li>
                </ul>
            </section>
            <section className="instructions">
                <h3>Instructions:</h3>
                <ol>
                    <li>Prepare a pre-dough. To do this, crumble the yeast in a small bowl and dissolve it in some of the warmed milk. Then add the sugar and some flour and stir until smooth. The pre-dough should have a viscous consistency. Sprinkle with a little flour and leave covered in a warm place to rise.</li>
                    <li>When the pre-dough has doubled in volume, it has risen sufficiently. Then add it to the flour. Add the salt and milk straight away. Knead the dough and then add the very soft butter. Leave the kneaded dough to rise.</li>
                    <li>When it has risen, cover the casserole with the dough. How high you make the edge depends on the diameter of the casserole.</li>
                    <li>Sauté the finely diced onions in the butter until translucent, stirring constantly. This can take a 10 minutes. However, the onions must not turn brown. Then stir in the flour immediately and leave the mixture to cool. Only when the dough has risen in the casserole, add the 2 beaten eggs and the cream and stir in well. Season with enough salt, because the onions need a lot of salt.</li>
                    <li>Then pour the topping into the casserole lined with the pastry and sprinkle with the bacon and caraway seeds. Finally, add a few flakes of butter.</li>
                    <li>Bake on the middle shelf in a preheated oven at 200 °C (top/bottom heat) for approx. 35 to 45 minutes.</li>
                    <li>Serve warm!</li>
                </ol>
            </section>
            <footer>
                <p>Original recipe: <a target="_blank" href="https://www.chefkoch.de/rezepte/1243811229272585/Schwaebischer-Zwiebelkuchen.html">Chef Koch</a></p>
            </footer>
        </div>
    )
}