import "../recipe.css"

export default function BeefAndBroccoli() {
    return (
        <div className="recipe">
            <h2>Beef and Broccoli</h2>
            <img src="https://i.ibb.co/PTsH2HL/broccoli-and-beef.jpg" alt="Broccoli and Beef" />

            <section className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>230g flank steak, very thinly sliced into bite-sized strips</li>
                    <li>1 Tbsp olive oil , (or vegetable oil), divided</li>
                    <li>200g broccoli</li>
                    <li>1 tsp sesame seeds, optional</li>
                </ul>
                <h3>Sauce ingredients:</h3>
                <ul>
                    <li>1 tsp fresh ginger, grated</li>
                    <li>3 cloves of garlic, grated</li>
                    <li>120mL hot water</li>
                    <li>6 Tbsp low sodium soy sauce</li>
                    <li>3 Tbsp light brown sugar</li>
                    <li>1.5 Tbsp corn starch</li>
                    <li>0.25 tsp black pepper</li>
                    <li>2 Tbsp sesame oil</li>
                </ul>
                <p>P.s. Recipe for 2 with double sauce;)</p>
            </section>
            <section className="instructions">
                <h3>Instructions:</h3>
                <ol>
                    <li>Prep: Start cooking white rice first so it's ready when the stir fry is done. Cover and freeze steak 30 minutes for easier slicing.</li>
                    <li>Combine all stir fry sauce ingredients in a bowl, stir well to dissolve the sugar, and set aside.</li>
                    <li>Place a large skillet over medium heat and add 1 Tbsp oil.  Add broccoli florets and sauté 4-5 minutes, partially covered with lid, stirring or tossing several times until broccoli is bright green and crisp-tender then remove from pan. Tip: If you prefer softer broccoli, add 2 Tbsp water before covering with the lid and it will steam cook the broccoli.</li>
                    <li>Increase heat to high heat and add 1 Tbsp oil. Add beef in a single layer and sauté 2 minutes per side or just until cooked through. Quickly pull out a piece to test for doneness.</li>
                    <li>Add the sauce, reduce heat to medium/low and simmer 3-4 minutes. It will thicken. Add broccoli and stir to combine. Stir in 1-2 Tbsp water to thin the sauce if desired. Serve over white rice.</li>
                </ol>
            </section>
            <footer>
                <p>Original recipe: <a target="_blank" href="https://natashaskitchen.com/beef-and-broccoli/">Natasha's kitchen</a></p>
            </footer>
        </div>
    )
}