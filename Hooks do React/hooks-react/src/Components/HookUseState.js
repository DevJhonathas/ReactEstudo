import {useState} from 'react';

const HookUseState = () => {
    //1 - usestate
    let useName = "João";

   const [name, setName] = useState("João");

   const changeName = () => {
    useName = "Jhonathas";

    setName("Jhonathas");

    // console.log(name, `\n` ,useName);
   }

   // 2- Usestate input
   const [age, setAge] = useState(18);

   const handleSubmit = (e) => {
    e.preventDefault();

    //Envio a uma Api
    console.log(age);
   }
  return (
    <div>
        {/* 1- Usestate */}
        <h2>UseState</h2>
        <p>Variável: {useName}</p>
        <p>useState: {name}</p>
        <button onClick={changeName}>MudaNome</button>
        
        {/* 2 - usestate e input */}
        <p>Digite Sua idade:</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
        <p>você tem {age}, {name}!</p>
        <hr />
    </div>
  )
}

export default HookUseState