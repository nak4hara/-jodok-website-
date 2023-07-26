import { Link } from 'react-router-dom'
import './Card.css'
import Button from '../../atoms/Button'

export default function Card({ recipe }) {
    return (
        <Link
            to={`/recipe/${recipe.link}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
        >
            <div className="card__body">
                <img
                    src={recipe.img}
                    alt={recipe.title}
                    className='card__image'
                />
                <h2 className="card__title">
                    {recipe.title}
                </h2>
                <p className="card__description">
                    {recipe.description}
                </p>
                <Button>
                    View Recipe
                </Button>
            </div>
        </Link>
    )
}


