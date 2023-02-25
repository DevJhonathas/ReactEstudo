import {useRef, useState, useEffect} from 'react';

const HookUseRef = () => {
    // 1 - useref
    const numbeRef = useRef(0);
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0);

    useEffect(() => {
        numbeRef.current = numbeRef.current + 1;
    });

    //2- useRef e dom
    const inputRef = useRef();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setText("");

        inputRef.current.focus();
    }
  return (
    <div>
        <h2>HookUseRef</h2>
        {/* 1- useRef */}
        <p>O componente renderizou: {numbeRef.current} vezes.</p>
        <p>Counter A: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Contador A</button>
        <p>Counter B: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>Contador A</button>

        {/* 2 - useRef e DOM */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="Enviar"/>
        </form>
        <hr />  
    </div>
  );
}

export default HookUseRef