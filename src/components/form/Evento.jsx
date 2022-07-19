import Button from "./evento/Button"

function Evento(){
    function meuEvento(){
        console.log(`Opa, fui ativado!`)
    }
    function meuSegundoEvento(){
        console.log(`Opa, ativado o segundo evento!`)
    }

    return(
        <div>
            <p id="center">Clique aqui para disparar o evento:</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={meuSegundoEvento} text="Segundo evento"/>
            {/* <button onClick={meuEvento}>Ativar!</button> */}
        </div>
    )
}

export default Evento