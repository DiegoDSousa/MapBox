import React,{useState} from "react";
import './mapping.css'
import Map,{GeolocateControl, Marker, NavigationControl} from "react-map-gl";
 

function Maping(props){
  const [centralizedlong,setCentralizedlong]=useState(props.longitude)
  const [centralizedlat,setCentralizedlat]=useState(props.latitude)
  
    return(
        <Map mapboxAccessToken='pk.eyJ1IjoiZGlzb3VzYSIsImEiOiJjbGdqZ2I2ZmgwMmRrM2RvZWZmcGF2Z2hoIn0.VbDo26YzfDzz5fylsE45Yw'
        style={{
          width:"100%",
          height:"700px",
          borderRadius:"15px",
          border:"2px solid blue"

        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        
        initialViewState={{
          latitude: 16.4, 
          longitude: -23.6,
          zoom:7
        }}
        
        >
        <NavigationControl/>
        <Marker longitude={props.longitude} latitude={props.latitude} zoom={7}/>
        
        </Map>
    );
}

export default Maping;