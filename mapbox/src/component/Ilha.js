import React from "react";
import './ilha.css'
const Ilha = (props)=>{
    console.log("ilha")
    console.log(props.nome)
    const teste=()=>{
        props.funcao(props.id)
        console.log(props.id)
    }
    return(
        <li className="ilha-container" onClick={teste}>
            <h3 className="nome-ilha" >{props.nome}</h3>
            <p>{props.ilha}</p>
        </li>
    );
}

export default Ilha;