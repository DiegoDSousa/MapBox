import React,{useState} from "react";
import './mapping.css'
import Map,{GeolocateControl, Marker, NavigationControl} from "react-map-gl";
 

function Maping(props){

    return(
        <Map mapboxAccessToken='pk.eyJ1IjoiZGlzb3VzYSIsImEiOiJjbGdqZ2I2ZmgwMmRrM2RvZWZmcGF2Z2hoIn0.VbDo26YzfDzz5fylsE45Yw'
        style={{
          width:"500px",
          height:"700px",
          borderRadius:"15px",
          border:"2px solid red"

        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        initialViewState={{
          Longitude:props.longitude,
          Latitude:props.latitude
        }}
        
        >
          <NavigationControl/>
         <Marker longitude={props.longitude} latitude={props.latitude} />
         
         
         <GeolocateControl positionOptions={{enableHighAccuracy:true}}
            trackUserLocation={true}
         ></GeolocateControl>
        </Map>
    );
}

export default Maping;