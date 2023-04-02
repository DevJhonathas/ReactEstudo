import './App.css';
import { createContext } from 'react';

//4- importação de compoentes
import FirstComponent from './components/firstComponent'
import SecondComponent from './components/SecondComponent';
import Desctructuring, {Category} from './components/Desctructuring';
import State from './components/State';
import Context from './components/Context';

//  Type
type textOrNull = string | null;
type fixed = "Typescript" | "Java" | "Nodejs";

  // Context Api
  interface IAppContext{
    language: string,
    framework: string,
    projects: number,
  }

  export const AppContext = createContext<IAppContext | null>(null);


function App() {

  // 1- variaveis
  const name: string = "Jhonathas";
  const age: number = 19;
  const isWorking: boolean = true;

  // 2- funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  // type
  const myText:textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;
  // mySecondText = "opa";
  const testandoFixed: fixed = "Typescript";


  // Context Api
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Meu nome: {name}</h2>
        <p>Minha idade: {age}</p>
        {isWorking && (
          <div>
            <p>Estou trabalhando</p>
          </div>
        )}

        <h3>{userGreeting(name)}</h3>

        <FirstComponent />
        <SecondComponent name = "Jhonathas" />
        <Desctructuring 
          title = "Pondo props" 
          content="Utilizando props para desestruturar" 
          comentsQty={10}
          tags={["ts ", "js ", "react "]}
          category={Category.TS}
        />
        <Desctructuring 
          title = "Coisas do dia-dia de um programador" 
          content="Coisas do dia" 
          comentsQty={10}
          tags={["dia ", "dia ", "de ", "um ", "programador "]}
          category={Category.P}
        />

        <State />

        {myText && <p>Tem texto na variavel</p>}
        {mySecondText && <p>Tem texto na variavel</p>}
        {testandoFixed && <p>{testandoFixed}</p>}
          <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
