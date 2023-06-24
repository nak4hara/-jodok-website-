import "../recipe.css"

export default function CaramelSauce() {
    return (
        <div className="recipe">
            <h2>Salted caramel sauce</h2>
            <img src="https://www.justonecookbook.com/wp-content/uploads/2019/05/Miso-Ramen-I-768x512.jpg" alt="Salted Caramel Sauce from NY Times" />

            <section className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>200g brown sugar</li>
                    <li>90g salted butter, room temperature cut up into 6 pieces</li>
                    <li>120ml heavy cream, at room temperature</li>
                    <li>1 tsp salt</li>
                </ul>
            </section>
            <section className="instructions">
                <h3>Instructions:</h3>
                <ol>
                    <li>Heat granulated sugar in a medium heavy-duty saucepan (avoid using non-stick) over medium heat, stirring constantly with a high heat resistant rubber spatula or wooden spoon. Sugar will form clumps and eventually melt into a thick brown, amber-colored liquid as you continue to stir. Be careful not to burn it.</li>
                    <li>Once sugar is completely melted, immediately stir in the butter until melted and combined. Be careful in this step because the caramel will bubble rapidly when the butter is added. If you notice the butter separating or if the sugar clumps up, remove from heat and vigorously whisk to combine it again. (If you’re nervous for splatter, wear kitchen gloves. Keep whisking until it comes back together, even if it takes 3-4 minutes. It will eventually– just keep whisking. Return to heat when it’s combined again.)</li>
                    <li>After the butter has melted and combined with the caramelized sugar, stir constantly as you very slowly pour in the heavy cream. Since the heavy cream is colder than the hot caramel, the mixture will rapidly bubble when added. After all the heavy cream has been added, stop stirring and allow to boil for 1 minute. It will rise in the pan as it boils.</li>
                    <li>Remove from heat and stir in the salt. Allow to slightly cool down before using. Caramel thickens as it cools.</li>
                </ol>
            </section>
            <footer>
                <p>Original recipe: <a target="_blank" href="https://sallysbakingaddiction.com/homemade-salted-caramel-recipe/">Sally's Baking Addiction</a></p>
            </footer>
        </div>
    )
}