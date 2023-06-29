import "../recipe.css"

export default function Lasagna() {
    return (
        <div className="recipe">
            <h2>Homemade Lasagna</h2>
            <img src="https://www.spendwithpennies.com/wp-content/uploads/2020/05/Lasagna-SpendWithPennies-22-768x1152.jpeg" alt="Homemade Lasagna" />

            <section className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>6 lasagna noodles</li>
                    <li>170g mozzarella cheese, shredded</li>
                    <li>25g parmesan cheese</li>
                    <li>250g ricotta cheese</li>
                    <li>3g fresh parsley, chopped</li>
                    <li>1 egg beaten</li>
                </ul>
                <h3>Tomato sauce ingredients:</h3>
                <ul>
                    <li>115g ground beef</li>
                    <li>115g italian sausage</li>
                    <li>1/2 onion diced</li>
                    <li>2 cloves garlic minced</li>
                    <li>500ml pasta sauce</li>
                    <li>1 Tbsp tomato paste</li>
                    <li>1/2 tsp italian seasoning</li>
                    <li>1/4 tsp salt</li>
                    <li>pinch of black pepper</li>
                </ul>
            </section>
            <section className="instructions">
                <h3>Instructions:</h3>
                <ol>
                    <li>Preheat the oven to 180ºC. Prepare the lasagna noodles according to package instructions.</li>
                    <li>In a large pan, stir-fry beef, sausage, onion, and garlic over medium-high heat until no pink remains.</li>
                    <li>Add the pasta sauce, tomato paste, italian seasoning, salt, and pepper. Simmer uncovered over medium heat for 5 minutes or until thickened.</li>
                    <li>In a separate bowl, combine half of mozzarella, half of parmesan cheese, ricotta, parsley, egg, and a pinch of salt.</li>
                    <li>Spread the meat sauce in a 9×13 pan or casserole dish until cover the bottom. Top it with lasagna noodles. Layer with one layer of ricotta cheese mixture and layer of meat sauce. Repeat twice more. Finish with 3 noodles topped with remaining sauce.</li>
                    <li>Cover with foil and bake for 45 minutes.</li>
                    <li>Remove the foil and sprinkle with the remaining mozzarella cheese and parmesan cheese. Bake for an additional 15 minutes or until browned and bubbly. Broil for 2-3 minutes if desired.</li>
                    <li>Rest for at least 15 minutes before cutting.</li>
                </ol>
            </section>
            <footer>
                <p>Original recipe: <a target="_blank" href="https://www.spendwithpennies.com/easy-homemade-lasagna/">Spend with pennies</a></p>
            </footer>
        </div>
    )
}