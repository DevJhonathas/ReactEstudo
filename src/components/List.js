import Itens from "./Itens"


function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Itens marca="Renault" ano_lancamento={2015} />
                <Itens marca="Fiat" ano_lancamento={1981} />
                <Itens marca="Chevrolet" ano_lancamento={1988} />
                <Itens marca="Volkswagen" ano_lancamento={1995} />
                <Itens />
            </ul>
        </>
    )
}

export default List