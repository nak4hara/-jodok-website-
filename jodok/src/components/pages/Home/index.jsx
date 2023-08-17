import Recipes from '../../../json/recipes.json'
import Banner from '../../atoms/Banner';
import Cards from '../../molecules/Cards';
import SearchBar from '../../molecules/SearchBar';

export default function Home() {
  {/* alphabetic order*/}
  const cardRecipes = Recipes.sort(
    function (a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
  );

  return (
    <div className='flex flex-col items-center'>
      <Banner />     
      <SearchBar data={Recipes}/>
      <ul className='grid grid-cols-1 pt-8 pb-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
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