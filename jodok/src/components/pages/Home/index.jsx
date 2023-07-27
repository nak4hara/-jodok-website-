import Card from '../../molecules/Card'
import Recipes from '../../../json/recipes.json'

export default function Home() {

  return (
    <main className="card">

      <ul>
        {Recipes.map((recipe) => { return (
            <li key={recipe.id}>
                <Card recipe={recipe} />
            </li >)})
        }
      </ul>
    </main>
  )
}