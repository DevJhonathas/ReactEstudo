const Events = () => {

    const handleMyEvent =  (e) => {
        console.log(e);
        console.log("Ativou");
    };
    
    const RenderSomething = (x) => {
        if (x){
            return <h1>Rederinzou</h1>;
        } else{
            return <h1>Também posso redenrizar isso</h1>;         
        }
    };
    

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            {RenderSomething(true)}
            {RenderSomething(false)}
        </div>
    );
};

export default Events;