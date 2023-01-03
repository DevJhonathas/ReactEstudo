import { useState } from 'react';
import './MyForm.css'

const MyForm = ({user}) => {
    // 6- Controlled inputs
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [role, setRole] = useState(user ? user.role : '');

    const [bio, setBio] = useState(user ? user.bio : '');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o Formulário");
        console.log(name, email, bio, role);

        // 7 - Limpar Form
        setName("");
        setEmail("");
        setBio("");
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
                {/* 8 - Textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrilçao do Usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                <input type="submit" value="Enviar" />
                {/* 9 - select */}
                <label>
                    <span>Função do Sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
            </form>
        </div>
    )
}

export default MyForm