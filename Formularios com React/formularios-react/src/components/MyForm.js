import {useState} from 'react';
import './MyForm.css'

const MyForm = ({user}) => {
    // 6- Controlled inputs
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o Formulário");
        console.log(name, email);
    };
    
    return(
        <div>
            {/* 5 -envio de form */}
            {/* 1- Criação de Form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" 
                        name="name" 
                        placeholder='Digite o seu nome...' 
                        onChange={handleName} 
                        value={name}
                    /> 
                </div>
                {/* 2- Label envolvendo input - sugerida pela documentação do react*/}
                <label>
                    {/*4 - Simplificação de manipulação de state */}
                    <span>E-mail</span>
                    <input type="email"
                        name="email" 
                        placeholder='Digite seu e-mail...' 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm