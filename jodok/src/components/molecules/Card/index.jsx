import './Card.css'

export default function Card({ recipe }) {
    return (
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
            <div className='card__btn'>
                View Recipe
            </div>
        </div>
    )
}


