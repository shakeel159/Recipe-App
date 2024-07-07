import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Sevices from './pages/Sevices.jsx'
import NoPage from './pages/NoPage.jsx';
import RecipePage from './pages/RecipePage.jsx';

function App() {
  return(
    <div>
      <BrowserRouter basename="/Recipe-App">
        <Routes> 
          <Route index element={<Home />}/>
          <Route path='/Home' index element={<Home />}/>
          <Route path='/About' index element={<About />}/>
          <Route path='/Contact' index element={<Contact />}/>
          <Route path='/Sevices' index element={<Sevices />}/>
          <Route path='/recipe/:id' element={<RecipePage />} />
          <Route path='*' element={<NoPage></NoPage>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App