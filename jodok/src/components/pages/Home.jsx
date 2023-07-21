import Card from '../molecules/Card'
import Recipes from '../../json/recipes.json'
import {Link} from 'react-router-dom'

export default function Home() {

  return (
    <main className="card">

      <ul>
        {Recipes.map((recipe) => {
          return (
            <li key={recipe.id}>
              <Link
                to={recipe.link}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Card recipe={recipe} />
              </Link>
            </li >
          )
        })
        }
      </ul>
    </main>
  )
}