import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Navbar />  
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/Empresa' element={<Empresa/>}></Route>
          <Route path='/Contato' element={<Contato/>}></Route>
        </Routes>
        <Footer />
    </Router>
    
  )
}

export default App;
