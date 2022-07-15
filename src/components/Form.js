import { useState } from 'react'

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`O usuário: ${name} com a senha: ${password} foi cadastrado com sucesso.`)
        console.log('Cadastrou com sucesso!')
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome aqui" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Digite o sua senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form