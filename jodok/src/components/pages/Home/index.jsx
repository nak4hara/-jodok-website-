import styles from './Home.module.css'
import Recipes from '../../../json/recipes.json'
import RecipeCard from '../../molecules/RecipeCard';

export default function Home() {
  const cardRecipes = Recipes.sort(() => { return Math.random() - 0.5 });
  
  return (
    <main>

      <ul className={styles.cardContainer}>
        {cardRecipes.map(recipe => { return (
            <li key={recipe.id} className={styles.card}>
                <RecipeCard
                  link={recipe.link}
                  srcImage={recipe.img}
                  title={recipe.title}
                  description={recipe.description} 
                />
            </li>
          )})
        }
      </ul>
    </main>
  )
}