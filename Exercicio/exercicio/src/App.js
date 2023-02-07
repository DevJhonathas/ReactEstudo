import './App.css';

// Router dom
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

// componentes
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Project List</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
