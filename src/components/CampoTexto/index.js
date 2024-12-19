import React, { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

const AoDigitado = (evento)=> {
  props.aoAlterado(evento.target.value)  
}
  return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input value={props.valor} onChange={AoDigitado} required = {props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto