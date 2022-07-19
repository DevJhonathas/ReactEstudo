import './App.css';
import OutraLista from './components/OutraLista';



function App() {
  const meusItens = ['React','Vue','angular'];
  return (
    <div className="App">
      <h1>Redenrizacao de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  )
}

export default App
