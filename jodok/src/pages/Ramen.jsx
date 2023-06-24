import "../recipe.css"

export default function Ramen() {
    return (
        <div className="recipe">
            <h2>Miso Ramen</h2>
            <img src="https://www.justonecookbook.com/wp-content/uploads/2019/05/Miso-Ramen-I-768x512.jpg" alt="Miso Ramen" />

            <section className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>2 cloves garlic</li>
                    <li>1/2 tsp ginger, grated</li>
                    <li>1 onion, diced</li>
                    <li>1 Tbsp sesame oil</li>
                    <li>1 Tbsp white sesame seed, roasted</li>
                    <li>120g minced beef</li>
                    <li>3 Tbsp miso paste</li>
                    <li>1 Tbsp sugar</li>
                    <li>1 Tbsp sake</li>
                    <li>960mL chicken broth</li>
                    <li>1 tsp salt</li>
                    <li>pepper to taste</li>
                    <li>2 portions of ramen noodle</li>
                </ul>
                <h3>Optional toppings:</h3>
                <ul>
                    <li>Boiled egg marinated in soy sauce</li>
                    <li>Canned corn</li>
                    <li>Nori</li>
                    <li>Edamame (soy bean)</li>
                    <li>Chashu (steamed pork belly)</li>
                    <li>Bamboo shoots</li>
                    <li>Bean sprouts</li>
                    <li>Narutomaki</li>
                </ul>
            </section>
            <section className="instructions">
                <h3>Instructions:</h3>
                <ol>
                    <li>Prepare the toppings before you start to cook. If you want to make chashu, prepare it one day before.</li>
                    <li>Grate the garlic and ginger, dice the onion and mix them in a bowl.</li>
                    <li>In a medium pan, heat the sesame oil in low/medium heat and stir-fry the ginger, garlic and onion until golden brown.</li>
                    <li>Add the minced beef and increase the heat to medium. Cook until meat is no longer pink.</li>
                    <li>Then, add miso paste and stir fastly before burned. Add sesame seeds and sugar and mix well.</li>
                    <li>For last, add the sake and chicken broth. Mix and let it boil.</li>
                    <li>Fix the sal and pepper quantities, put the lid and let it boil while cook the noodles.</li>
                    <li>Cook the noodles according to the package instructions and arrange the bowl with the noodles, broth and toppings. Serve right away.</li>
                </ol>
            </section>
            <footer>
                <p>Original recipe: <a target="_blank" href="https://www.justonecookbook.com/homemade-chashu-miso-ramen/">Just One Cookbook</a></p>
            </footer>
        </div>
    )
}