import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

import Message from './components/pages/Message';
import Navbar from './components/organisms/Navbar';
import AboutMe from './components/pages/AboutMe';
import Home from './components/pages/Home'
import PatternPage from './components/templates/PatternPage';
import RecipePage from './components/pages/RecipePage'
import NotFound from './components/pages/NotFound';
import TestPage from './components/pages/TestPage';
import Footer from './components/organisms/Footer';

export default function AppRoutes() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  {/** If you add a new page in menu, please add path here **/ }
  const menuPages = [
    { path: "love-message",title:'Message', id: 1 },
    { path: "about-me", title:'About Karina', id: 2 }
  ];

  return (
    <div className='page-container relative min-h-screen'>
      <Navbar menuPages={menuPages}/>

      <Routes>
        <Route path='/' element={<PatternPage />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path='test' element={<TestPage />} />
          {/** menu pages below here **/}
          <Route path="love-message" element={<Message />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path='/recipe/:link' element={<RecipePage />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}
