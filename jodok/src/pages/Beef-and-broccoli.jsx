import "../recipe.css"

export default function RecipePage(props) {
    return (
        <div className="recipe">
            <h2>Beef and Broccoli</h2>
            <img src="https://i.ibb.co/PTsH2HL/broccoli-and-beef.jpg" alt="Broccoli and Beef" />


            <section className={styles.instructions}>
            <h3>Instructions:</h3>
            <ol>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </section>

            <footer>
                <p>Original recipe: <a target="_blank" href="https://natashaskitchen.com/beef-and-broccoli/">Natasha's kitchen</a></p>
            </footer>
        </div>
    )
}