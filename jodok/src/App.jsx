import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx';
import Home from './components/pages/Home.jsx'
import LoveMessage from './pages/Love-message.jsx';
import Top5 from './pages/Top5.jsx';
import AboutMe from './pages/About-me.jsx';
import PatternPage from './components/templates/PatternPage/index.jsx';
import TestPage from './pages/TestPage.jsx';
import RecipePage from './pages/RecipePage.jsx';

export default function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<PatternPage />}>
          <Route index element={<Home />} />
          <Route path="love-message" element={<LoveMessage />} />
          <Route path="top-5-recipes" element={<Top5 />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="*" element={<div>Page not found.</div>} />
          <Route path='test' element={<TestPage />} />
        </Route>
        <Route path='/recipe' element={<RecipePage />}>
          <Route />
        </Route>
      </Routes>
    </>
  )
}
