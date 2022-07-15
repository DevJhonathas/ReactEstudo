function Evento({numero}){
    function meuEvento(){
        console.log(`Opa, fui ativado! ${numero}`)
    }

    return(
        <div>
            <p>Clique aqui para disparar o evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento