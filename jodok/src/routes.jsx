import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

import LoveMessage from './pages/Love-message.jsx';

import Navbar from './components/organisms/Navbar';
import AboutMe from './components/pages/AboutMe';
import Home from './components/pages/Home'
import PatternPage from './components/templates/PatternPage';
import RecipePage from './components/pages/RecipePage'
import NotFound from './components/pages/NotFound';
import TestPage from './components/pages/TestPage';

export default function AppRoutes() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<PatternPage />}>
          <Route index element={<Home />} />
          <Route path="love-message" element={<LoveMessage />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
          <Route path='test' element={<TestPage />} />
        </Route>

        <Route path='/recipe/:link' element={<RecipePage />} />
      </Routes>
    </>
  )
}
