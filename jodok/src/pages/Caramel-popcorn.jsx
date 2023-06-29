import "../recipe.css"

export default function CaramelPopcorn() {
    return (
        <div className="recipe">
            <h2>Caramel Popcorn</h2>
            <img src="https://i0.wp.com/thehobbywife.com/wp-content/uploads/2019/03/Easy-Caramel-Popcorn-so-easy-to-make-1-1.jpg?resize=735%2C466&ssl=1" alt="Caramel Popcorn" />

            <section className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>8-10 cups of popped popcorn</li>
                    <li>226g butter</li>
                    <li>213g sugar</li>
                    <li>2 tsp vanilla extract</li>
                    <li>1/2 tsp sodium bicarbonate</li>
                </ul>
            </section>
            <section className="instructions">
                <h3>Instructions:</h3>
                <ol>
                    <li>Pop the popcorn as you normally would. Sprinkle some salt on the popcorn and then set aside.</li>
                    <li>In a medium pan, add the sugar at medium-heat. Once start to become caramel, stir sometimes until the caramel is homogeneous.</li>
                    <li>Once the color is light caramelised, add in the butter at room temperature and stir until it's mixed well</li>
                    <li>Keep stirring while bringing the butter and sugar mixture up to a boil.</li>
                    <li>Once butter and caramel are combined (it might take a while, do not give up!), add in the vanilla and stir to make sure it has mixed well.</li>
                    <li>Continue to boil for the last additional minute to reach the five total minutes previously mentioned, and then add the baking soda, and stir to combine.</li>
                    <li>Pour the mixture over the popped popcorn, trying to evenly distribute the caramel mixture on top.</li>
                    <li>Line a baking sheet with parchment paper. Then put the popcorn onto the baking sheet and allow it to cool completely.</li>
                </ol>
            </section>
            <footer>
                <p>Original recipe: <a target="_blank" href="https://thehobbywife.com/easy-caramel-popcorn-recipe/">The hobby wife</a></p>
            </footer>
        </div>
    )
}