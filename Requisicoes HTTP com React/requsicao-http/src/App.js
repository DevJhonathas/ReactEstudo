import './App.css';

import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 1- Resgatando dados

  useEffect(() => {
      async function fecthData(){
        const res = await fetch(url);

        const data = await res.json();
    
        setProducts(data);
      }
      fecthData();    
  }, [])
  console.log(products);

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
    </div>
  );
}

export default App;
