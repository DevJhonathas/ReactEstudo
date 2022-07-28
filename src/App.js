import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/ui/__test__/Footer';
import Navbar from './components/ui/__test__/Navbar';
import Contato from './pages/__test__/Contato';
import Empresa from './pages/__test__/Empresa';
import Home from './pages/__test__/Home';

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
