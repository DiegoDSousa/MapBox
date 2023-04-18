import React,{useState} from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map,{GeolocateControl, Marker, NavigationControl} from "react-map-gl";
import Maping from './component/maping';
import ListaIlhas from './component/ListaIlhas';

function App() {
  
  const infos=[{
      id:0,
      nome:'Porto Novo',
      ilha:'Santo Antão',
      lat: 17.017733285442702,
      long: -25.05909286505595
  },
    { id:1,
      nome:'Porto Grande',
      ilha:'São vicente',
      lat:16.889619,
      long:-24.995448
    },{
      id:2,
      nome:'Porto do Tarrafal',
      ilha:'São Nicolau',
      lat: 16.566596769480974,
      long: -24.359811464664205

    },{
      id:3,
      nome:'Porto da palmeira',
      ilha:'Sal',
      lat:16.752980517423733, 
      long:-22.981837447196927
    },{
      id:4,
      nome:'Porto de Sal-Rei',
      ilha:'Boa Vista',
      lat:16.179530020513123,
      long: -22.923644285828757
    },{
      id:5,
      nome:'Porto Inglês',
      ilha:'Maio',
      lat:15.139534451831624, 
      long:-23.218338953864738
    },{
      id:6,
      nome:'Porto da Praia',
      ilha:'Santiago',
      lat:14.912857986448246,
      long: -23.500459811332863
    },{
      id:7,
      nome:'Porto Vale Cavaleiros',
      ilha:'Fogo',
      lat:14.921866012826605,
      long: -24.503411936707995
    },{
      id:8,
      nome:'Porto Furna',
      ilha:'Brava',
      lat:14.888204471644187,
      long: -24.679861226876007
    }]

    const [listaIlhas,setlistaIlhas] = useState([])
    const [id,setId]=useState(0)
    const [control,setcontrol]=useState(false)

    console.log(infos[id].long)
    console.log(infos[id].lat)
   
    
    const changehandler = ()=>{
      
      console.log(infos[1].lat)
    
      const ilhasProcessadas = infos.map((dados)=>{
        return{
          id:dados.id,
          nome:dados.nome,
          ilha:dados.ilha
        }
      })
      setlistaIlhas(ilhasProcessadas)
      console.log(ilhasProcessadas)
    
    }
    if(!control){
      console.log(infos[1].lat)
    
      const ilhasProcessadas = infos.map((dados)=>{
        return{
          id:dados.id,
          nome:dados.nome,
          ilha:dados.ilha
        }
      })
      setlistaIlhas(ilhasProcessadas)
      console.log(ilhasProcessadas)
      setcontrol(true)
    }
    
    
    
//<ListaIlhas lista={listaIlhas} funcao={setId}/>
  return (
    <div className="App">
        
      <ListaIlhas lista={listaIlhas} funcao={setId}/>
      <Maping longitude={infos[id].long} latitude={infos[id].lat}></Maping>
      
    
        
    </div>
  );
}

export default App;
