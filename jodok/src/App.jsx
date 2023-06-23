import Navbar from './components/Navbar';
import Lens from './assets/magnifying-glass-solid.svg';
import Card from './components/Card'
import BeefAndBroccoli from "./recipes/Beef-and-broccoli"

export default function App() {

  return (
    <>
      <Navbar />
      <div id="love-message">
        Hi, my lovely Jodoko,<br />
        I am proud to show you this project.
        It is aaaaall for you :)<br />
        I hope you like this online recipe book,
        it might reminds you of one of the things
        we appreciate the most in our lives,
        cooking together!<br />
        I love you more than anything!!
      </div>
      <div id="search-recipe">
        <input type="text" name="search" id="search"
          placeholder="Search here..." />
        <a href="/">
          <img src={Lens} alt="Search button" />
        </a>

      </div>
      <div className="wrapper">
        <Card img="https://i.ibb.co/PTsH2HL/broccoli-and-beef.jpg"
        title="Beef and Broccoli"
        description="One of the best recipes we found out and probably top 5 of Jodok's favourite dishes"/>
        <Card img="https://i.ibb.co/PTsH2HL/broccoli-and-beef.jpg"
        title="Beef and Broccoli"
        description="One of the best recipes we found out and probably top 5 of Jodok's favourite dishes"/>
        <Card img="https://i.ibb.co/PTsH2HL/broccoli-and-beef.jpg"
        title="Beef and Broccoli"
        description="One of the best recipes we found out and probably top 5 of Jodok's favourite dishes"/>
      </div>

    </>
  )
}
