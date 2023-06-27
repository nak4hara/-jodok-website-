import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({recipes}) {
    
    const listItems = recipes.map((recipe) =>
        <li key={recipe.id}>
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
            <div className='card__btn'>
                <Link
                    to={recipe.link}
                    style={{ color: 'inherit', textDecoration: 'none' }}>
                    View Recipe
                </Link>
            </div>
        </li>
    )
    return (
        <div className="card">
            <div className="card__body">
                <ul>{listItems}</ul>
            </div>
        </div>
    )
}


