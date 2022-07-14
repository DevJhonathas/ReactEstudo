import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <Pessoa nome='Rodrigo' idade='29' profissao='Motoqueiro' foto='https://via.placeholder.com/150'/>
    </div>
  );
}

export default App;
