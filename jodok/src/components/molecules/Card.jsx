import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({ recipes }) {

    const listItems = recipes.map((recipe) =>
        <li key={recipe.id}>
            <Link to={recipe.link}
                style={{ color: 'inherit', textDecoration: 'none' }}>
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
                    View Recipe
                </div>
            </Link>
        </li >
    )
    return (
        <div className="card">
            <div className="card__body">
                <ul>{listItems}</ul>
            </div>
        </div>
    )
}


