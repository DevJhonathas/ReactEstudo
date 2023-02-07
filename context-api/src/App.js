// Router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

// Component
import Navbar from '../src/component/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Products' element={<Products />}/>
          <Route path='/About' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
