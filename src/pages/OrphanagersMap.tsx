import React, {useEffect , useState} from 'react';
import { Link } from 'react-router-dom'
import { FiPlus , FiArrowRight} from 'react-icons/fi'
import { Map , TileLayer, Marker, Popup} from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import '../styles/pages/orphanagers-map.css'
import api from '../services/api';

interface Orphanage {
    id:number,
    latitude:number,
    longitude:number,
    name:string
}

interface Error {
    code:string,
    message:string
}

function OrphanagersMap(){
    const [ orphanages , setOrphanages] = useState<Orphanage[]>([])
    const [theme,setTheme] = useState('Dark');
    const [latitude,setLatitude] = useState(-19.3779046)
    const [longitude,setLongitude] = useState(-40.0530468)
    const [urlMap,setUrlMap] = useState(`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
    //Assim que o componente for exibido em tela executará a função apenas uma vez,devido o vetor vazio
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data)
        })
    },[])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude:latitudeUser,longitude:longitudeUser} = position.coords

            setLatitude(latitudeUser);
            setLongitude(longitudeUser)
        },(err) => {
            console.error('ERROR(' + err.code + '): ' + err.message)
        },
        {
            enableHighAccuracy: true,
        }
    )},[])
    
    useEffect(() => {
        if(theme === 'Light'){
            setUrlMap(`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
        }else{
            setUrlMap(`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
        }
    },[ theme ])
    

    return (
        <div id="page-map">
            <aside>
                <header>
                    <Link to="/">
                        <img src={mapMarkerImg} alt="Happy"/>
                    </Link>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Linhares</strong>
                    <span>Espírito Santo</span>
                </footer>
            </aside>

            <button className="btn-change-theme" onClick={() => {
                if(theme === 'Light'){
                    setTheme('Dark')
                }
                else{
                    setTheme('Light')
                }
            }}>{theme}</button>

            <Map 
                center={[latitude,longitude]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >

                <TileLayer url={urlMap} />

                {orphanages.map(orphanage => {
                    return (
                        <Marker 
                            icon={mapIcon}
                            position={[orphanage.latitude,orphanage.longitude]}
                            key={orphanage.id}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                )})}

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"></FiPlus>
            </Link>
        </div>
    );
}

export default OrphanagersMap;