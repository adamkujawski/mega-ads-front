import React, {useContext, useEffect, useState} from "react";
import '/node_modules/leaflet/dist/leaflet.css'
import './Map.css'
import '../../utils/fix-map-icon'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../../contex/searchContext";
import {SimpleAdEntity} from 'types'
import {SingleAd} from "./SingleAd";

export const Map = () => {

    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([])

    useEffect(()=>{
        // Jeżeli chcemy użyć funkcji asynchornicznych w React Typescript, musimy uzyć takiego zapisu:
        (async ()=>{
          const res = await fetch(`http://localhost:3001/ad/search/${search}`);
          const data = await res.json();
          setAds(data);
        })();
    },[search])

    useEffect(()=>{
        console.log("Make request to search for: ", search)
    },[search])

    return (
        <div className="map">
            <h1>Search for: {search}</h1>
            <MapContainer center ={[51.1009295,17.0236415]} zoom={13}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat,ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}