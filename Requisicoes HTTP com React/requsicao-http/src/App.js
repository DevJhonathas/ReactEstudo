import './App.css';

import { useState, useEffect } from "react";
// 4- custom hook
import { useFetch } from './hook/useFetch';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]); //Server para pegarmos as informações da API

// 4- custom hook
  const { data: items } = useFetch(url); //Esse hook é responsável pela mesma validação do useEffect que usei logo abaixo, a diferença é que com ele poremos utilizar varias vezes em outras partes do código.

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1- Resgatando dados

  // useEffect(() => {
  //     async function fecthData(){ //Definindo essa funcao async dentro do UseEffect, estarei utilizando o res para pegar a informações da url, e com o data estarei transformando em json
  //       const res = await fetch(url);

  //       const data = await res.json();
    
  //       setProducts(data);
  //     }
  //     fecthData();    
  // }, []);


  // 2- add de produtos
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const product = {
      name,
      price
    };
    
    const res = await fetch(url, {
      method: "POST", //Definindo se é um POST ou GET
      headers: {
        "Content-Type": "application/json" //estou definindo que o tipo do nosso arquivo é um json
      },
      body: JSON.stringify(product) //Ele trafega o dado para backend em formato JSON
    });

      // 3- carregamento dinamico
      const addedProduct  = await res.json(); //aqui transformamos a const res em um json, fazendo ela deixar de ser uma string
      setProducts((prevProducts) => [...prevProducts, addedProduct]); //aqui pegamos os dados do json antigo e adicionamos junto com o novo, sem precisar de reload

      setName(""); //Deixa o input limpo para o usuario ao enviar o dado
      setPrice(""); //Deixa o input limpo para o usuario ao enviar o dado
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/> 
          </label>
          <label>
            Price:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
