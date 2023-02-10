// import { useContext } from "react";
import ChangeCounter from "../component/ChangeCounter";
// import {CounterContext} from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

//5- context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
    // const {counter} = useContext(CounterContext);
    const {counter} = useCounterContext() ;

    // 5- Context mais complexo
    const {color, dispatch} = useTitleColorContext();

    // 6- alterando state complexo
    const setTitleColor = (color) => {
        dispatch({type: color})
    }
    return(
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>valor do contador: {counter}</p>
        {/* 3 - alterando valores contexto */}
        <ChangeCounter />
        {/* 6 - alterando contexto complexo */}
        <div>
            <button onClick={() => setTitleColor("RED")}>Vermelho</button>
            <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>
    </div>
    );
};

export default Home;