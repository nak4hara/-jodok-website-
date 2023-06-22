import Ramen from "./recipes/Ramen"
import BeefAndBroccoli from "./recipes/Beef-and-broccoli"
import Lens from './assets/magnifying-glass-solid.svg';
import Bars from './assets/bars-solid.svg'

export default function App() {

  return (
    <>
      <header>
        <a href="/"><img src="./src/assets/logo.jpg" alt="" /></a>
        <a id="menu" href="/">
          <img src={Bars} alt="Menu" />
        </a>
      </header>
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
        placeholder="Search here..."/>
        <a href="/">
          <img src={Lens} alt="Search button" />
        </a>
        
      </div>

      <BeefAndBroccoli />
      
    </>
  )
}
