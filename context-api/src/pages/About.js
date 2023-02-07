import { useContext } from "react";
import ChangeContext from "../component/ChangeContext";
import {CounterContext} from "../context/CounterContext";


const About = () => {
    const {counter} = useContext(CounterContext);
    return(
    <div>
        <h1>About</h1>
        <p>valor do contador no About: {counter}</p>
        {/* 3 - alterando valores contexto */}
        <ChangeContext />
    </div>
    );
};

export default About;