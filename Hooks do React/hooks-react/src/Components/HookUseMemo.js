import {useState, useEffect, useMemo} from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0);

    // const premiumNumbers = ["0", "100", "200"]; Gera erro liquidMemory
    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"];
    },[]); //Evita o memoryLiquid e faz com que a lista seja executada apenas uma vez, evitando de ficar excutando varias vezes a lista.

    useEffect(() => {
        console.log("Premium number foi alterado");
    },[premiumNumbers]);
  return (
    <div>
        <h2>HookUseMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ""}
        <hr />
    </div>
  )
}

export default HookUseMemo