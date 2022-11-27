import { useState } from 'react';
import './App.css';
import MyComponent from './Components/MyComponents';
import Title from './Components/Title';

function App() {
  const n = 15;
  const [name] = useState("jhonathas")
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com Css</h1>

      {/* CSS de component 
      Ele pode vazar para os outros componentes, por isso é bom usar uma class para definir o css, pois se não ele ir vazar para as outras pages
      */}
      <MyComponent />

      <p>Esté pargrafo é do app JS</p>

        {/* inline CSS 
        Com o style podemos utilizar para definir objetos pelo js como se fosse CSS, não é muito recomendado
        Para podermos definir isso, devemos usar syle={{}}

        Defninimos dois pares de parenteses para ser objeto, pois se fosse só um par seria considerado dinamico
        */}
      <p style={{color: "blue", padding: "20px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p> 
      {/* Inline não é recomendado pois em grande quantidades gera demora para realizar as trocas nos CSS */}


        {/* CSS Inline Dinâmico */}
        <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>Css Dinamico</h2>
        <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>Css Dinamico</h2>
        {/* usando com o useState */}
        <h2 style={name === "jhonathas" ? {color: "green", backgroundColor: "#000"} : null}>Css Dinamico</h2>
        
        {/* classe dinamica */}
        <h2 className={redTitle ? "red-title" : "title"}>Este Título vai ter classe dinamica</h2>

        {/* css modules */}
        <Title/>
        <h2 className='my_title'>Test</h2>
    </div>
  );
}

export default App;
