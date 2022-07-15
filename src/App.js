import './App.css';
import Pessoa from './components/Pessoa';
import Frases from './components/Frases';
import SayMyName from './components/SayMyName';

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <SayMyName nome = {nome}/>
      <SayMyName nome = {nome}/>
      <Pessoa nome='Rodrigo' idade='29' profissao='Desenvolvedor Front End' foto='https://via.placeholder.com/150'/>
      <Frases />
      <Frases />
    </div>
  );
}

export default App;
