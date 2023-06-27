import './Card.css'
import { Link } from 'react-router-dom'

const recipes = [
    {
        img: "https://i.ibb.co/PTsH2HL/broccoli-and-beef.jpg",
        title: "Beef and Broccoli",
        description: "One of the best recipes we found out and probably top 5 of Jodok's favourite dishes",
        link: "beef-and-broccoli",
        id: 1,
    },
  
    {
        img: "https://www.sweetashoney.co/wp-content/uploads/French-Crepes-6-768x432.jpg",
        title: "French crêpe",
        description: "Easy recipe, it fits perfectly with salted caramel sauce or doce de leite.",
        link: "french-crepe",
        id: 2,
    },
  
    {
        img: "https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg",
        title: "Fudgy Brownie",
        description: "Irresistible dessert full of cacao flavor, perfect for a picnic.",
        link: "fudgy-brownie",
        id: 3,
    },
  
    {
        img: "https://www.justonecookbook.com/wp-content/uploads/2020/04/Gyoza-3096-II-768x1152.jpg",
        title: "Gyoza",
        description: "A classic japanese recipe, perfect to make with friends and family",
        link: "gyoza",
        id: 4,
    },
  
    {
        img: "https://static01.nyt.com/images/2019/01/19/dining/12CHOCPANCAKES3/12CHOCPANCAKES3-articleLarge.jpg",
        title: "Salted caramel sauce",
        description: "Jeeesus, you should try this one. Jodok is crazy about this sauce.",
        link: "salted-caramel-sauce",
        id: 5,
    },
  
    {
        img: "https://www.justonecookbook.com/wp-content/uploads/2019/05/Miso-Ramen-I-768x512.jpg",
        title: "Miso Ramen",
        description: "I don't even know how many times we did this ramen, really tasty.",
        link: "miso-ramen",
        id: 6,
    },
  ];

export default function Card() {
    const listItems = recipes.map(recipe =>
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


