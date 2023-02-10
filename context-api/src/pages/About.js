// import { useContext } from "react";
import ChangeCounter from "../component/ChangeCounter";

// import {CounterContext} from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
    // const {counter} = useContext(CounterContext);
    const {counter} = useCounterContext();

    // 5- Context mais complexo
    const {color} = useTitleColorContext();

    return(
    <div>
        <h1 style={{color: color}}>About</h1>
        <p>valor do contador no About: {counter}</p>
        {/* 3 - alterando valores contexto */}
        <ChangeCounter />
    </div>
    );
};

export default About;