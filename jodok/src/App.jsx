import Navbar from './components/Navbar.jsx';
import SearchRecipe from './components/Search-recipe.jsx';
import { Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import LoveMessage from './pages/Love-message.jsx';
import Top5 from './pages/Top5.jsx';
import AboutMe from './pages/About-me.jsx';
import BeefAndBroccoli from './pages/Beef-and-broccoli.jsx'
import FrenchCrepe from './pages/French-crepe.jsx';
import FudgyBrownie from './pages/Brownie.jsx';
import Ramen from './pages/Ramen.jsx';
import CaramelSauce from './pages/Caramel-sauce.jsx';
import Gyoza from './pages/Gyoza.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <SearchRecipe />
      <div id="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="love-message" element={<LoveMessage />} />
          <Route path="top-5-recipes" element={<Top5 />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="beef-and-broccoli" element={<BeefAndBroccoli />} />
          <Route path="french-crepe" element={<FrenchCrepe />} />
          <Route path="fudgy-brownie" element={<FudgyBrownie />}/>
          <Route path="miso-ramen" element={<Ramen />}/>
          <Route path="salted-caramel-sauce" element={<CaramelSauce />}/>
          <Route path="gyoza" element={<Gyoza />}/>
        </Routes>
      </div>

    </>
  )
}
