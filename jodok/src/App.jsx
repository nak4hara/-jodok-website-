import Navbar from './components/Navbar.jsx';
import SearchRecipe from './components/Search-recipe.jsx';
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home.jsx'
import LoveMessage from './pages/Love-message.jsx';
import Top5 from './pages/Top5.jsx';
import AboutMe from './pages/About-me.jsx';
import BeefAndBroccoli from './pages/Beef-and-broccoli.jsx'
import FrenchCrepe from './pages/French-crepe.jsx';


export default function App() {
  return (
    <>
      <Navbar />
      <SearchRecipe />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="love-message" element={<LoveMessage />}/>
          <Route path="top-5-recipes" element={<Top5 />}/>
          <Route path="about-me" element={<AboutMe />}/>
          <Route path="beef-and-broccoli" element={<BeefAndBroccoli/>}/>
          <Route path="french-crepe" element={<FrenchCrepe/>}/>
        </Routes>
      </div>

    </>
  )
}
