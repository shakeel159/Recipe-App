
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Sevices from './pages/Sevices.jsx'

function App() {
  return(
    <div>
      <BrowserRouter basename="/Recipe-App">
        <Routes> 
          <Route index element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App