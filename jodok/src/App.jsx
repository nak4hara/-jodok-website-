import Navbar from './components/Navbar.jsx';
import SearchRecipe from './components/Search-recipe.jsx';
import Card from './components/Card.jsx'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />
      <SearchRecipe />
      <div>
        <Routes>

        </Routes>
      </div>
      <div className="wrapper">
        <Card img="https://i.ibb.co/PTsH2HL/broccoli-and-beef.jpg"
          title="Beef and Broccoli"
          description="One of the best recipes we found out and probably top 5 of Jodok's favourite dishes" />

        <Card img="https://www.sweetashoney.co/wp-content/uploads/French-Crepes-6-768x432.jpg"
          title="French crêpe"
          description="Easy recipe, it fits perfectly with salted caramel sauce or doce de leite." />

        <Card img="https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg?resize=1200:*"
          title="Fudgy Brownie"
          description="Irresistible dessert full of cacao flavor, perfect for a picnic." />

        <Card img="https://www.justonecookbook.com/wp-content/uploads/2020/04/Gyoza-3096-II-768x1152.jpg"
          title="Gyoza"
          description="A classic japanese recipe, perfect to make with friends and family" />

        <Card img="https://static01.nyt.com/images/2019/01/19/dining/12CHOCPANCAKES3/12CHOCPANCAKES3-articleLarge.jpg"
          title="Salted caramel sauce"
          description="Jeeesus, you should try this one. Jodok is crazy about this sauce." />
      </div>
    </>
  )
}
