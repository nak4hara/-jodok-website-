import './Card.css'

export default function Card(props){
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} alt="" className='card__image'/>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <a href="" className='card__btn'>View Recipe</a>
        </div>
    )
}