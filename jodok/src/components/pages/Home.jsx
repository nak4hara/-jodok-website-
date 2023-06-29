import Card from '../molecules/Card.jsx'
import { useState } from 'react';

export default function Home() {
  const recipeList = [
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

    {
      img: "https://i0.wp.com/thehobbywife.com/wp-content/uploads/2019/03/Easy-Caramel-Popcorn-so-easy-to-make-1-1.jpg?resize=735%2C466&ssl=1",
      title: "Caramel popcorn",
      description: "Jodok said it is as awesome snacks to watch movies, I still have not tried hihi.",
      link: "caramel-popcorn",
      id: 7,
    },

    {
      img: "https://i.pinimg.com/originals/20/fd/a6/20fda6aeaccc80caf68af1c1f15ea799.jpg",
      title: "Chocolate cake",
      description:"Chocolate cake made on a skillet, try it with brazilian chocolate sauce.",
      link: "chocolate-cake",
      id: 8,
    },

    {
      img: "https://www.spendwithpennies.com/wp-content/uploads/2020/05/Lasagna-SpendWithPennies-22-768x1152.jpeg",
      title: "Homemade Lasagna",
      description: "Easy recipe but the result it's amazing, I ate for the whole week.",
      link: "lasagna",
      id: 9,
    },

    {
      img: "https://img.chefkoch-cdn.de/rezepte/1243811229272585/bilder/704511/crop-642x428/schwaebischer-zwiebelkuchen.jpg",
      title: "Zwiebelkuchen",
      description: "An german savory cake, lots of caramelized onion.",
      link: "zwiebelkuchen",
      id: 10,
    },    
  ];

  const [recipes, setRecipes] = useState([recipeList])

  return (
    <div className='wrapper'>
      <Card recipes={recipeList} />
    </div>
  )
}