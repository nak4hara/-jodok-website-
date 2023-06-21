import Ramen from "./recipes/Ramen"
import BeefAndBroccoli from "./recipes/Beef-and-broccoli"

export default function App() {

  return (
    <>
      <header>
        <a href="/"><h1>Jodok's recipe v1.0</h1></a>

      </header>
      <div id="love-message">
        Hi, my love!<br />
        I am happy to make this project aaaaall for you :)<br />
        I hope you like this online recipe book, <br />
        it might reminds you of one of the things<br />
        we appreciate the most in our lives,<br />
        cooking together!<br />
        I love you more than anything
      </div>
      <div id="search-recipe">
        <input type="text" name="search" id="search" 
        placeholder="Search here..."/>
        <input type="button" className="button" value="Search" />
      </div>

      <BeefAndBroccoli />
      
    </>
  )
}
