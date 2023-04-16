import React from "react";
import Ilha from "./Ilha";
import './listailha.css';
const ListaIlhas=(props)=>{
    console.log("lista ilhas")
    console.log(props.lista)
    
    return(
        <ul className="container-ilhas">
            {props.lista.map((infos)=>(
                <Ilha 
                    key={infos.id}
                    nome={infos.nome}
                    id={infos.id}
                    ilha={infos.ilha}
                    funcao={props.funcao}/>
            ))}
        </ul>
    );

}
export default ListaIlhas