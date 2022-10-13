const CalcValues = () => {
    const A = 10;
    const B = 12;

    const handleValor = () => {
        console.log(A + B);
    };
    
    return(
        <div>
            <p>A: {A}</p>
            <p>B: {B}</p>
            <button onClick={handleValor}>Clique aqui para somar</button>
        </div>
    );
};

export default CalcValues;