import '../src/assets/App.css';
import OutraLista from './components/form/OutraLista';



function App() {

  const meusItens = ['React','Vue','angular']

  return (
    <div className="App">
      <h1>Redenrizacao de listas</h1>
      <OutraLista itens={meusItens} />
    </div>
  )
}

export default App;
