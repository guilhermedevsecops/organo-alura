import React, { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = (props) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const AoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
    }

    
    

    return (
        <section className='formulario'>
            <form onSubmit={AoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome"
                            obrigatorio={true} 
                            placeholder="Digite o seu nome"
                            value = {nome}
                            aoAlterado={valor => setNome(valor)} 
                />
                <CampoTexto label="Cargo" 
                            obrigatorio={true} 
                            placeholder="Digite o nome do cargo" 
                            value = {cargo}
                            aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto label="Imagem"
                            obrigatorio={true}
                            placeholder="Digite o nome da imagem"
                            value = {imagem}
                            aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa label="Time"
                               itens={props.times}
                               valor = {time}
                               aoAlterado={valor=>setTime(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario