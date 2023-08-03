import Recipes from '../../../json/recipes.json'
import Cards from '../../molecules/Cards';

export default function Home() {
  const cardRecipes = Recipes.sort(() => { return Math.random() - 0.5 });

  return (
    <div className='p-4 pt-6 flex justify-center'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {
          cardRecipes.map((recipe) => (
            <li key={recipe.id} className='w-72 shadow-lg'>
              <Cards
                link={recipe.link}
                srcImage={recipe.img}
                title={recipe.title}
                description={recipe.description}
              />
            </li>
          ))
        }

      </ul>

    </div>
  )
}