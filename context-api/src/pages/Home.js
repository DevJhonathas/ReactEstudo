import { useContext } from "react";
import ChangeContext from "../component/ChangeContext";
import {CounterContext} from "../context/CounterContext";

const Home = () => {
    const {counter} = useContext(CounterContext);
    return(
    <div>
        <h1>Home</h1>
        <p>valor do contador: {counter}</p>
        {/* 3 - alterando valores contexto */}
        <ChangeContext />
    </div>
    );
};

export default Home;