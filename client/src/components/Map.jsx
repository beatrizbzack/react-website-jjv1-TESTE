import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
//@iconify/icons-mdi/map-marker'

import './Map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={"mdi:map-marker"} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Venha nos Visitar - Jardim Portual, São José dos Campos</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyACdL3SD8JUGeEV-Gv9C_n0WU9dGVSP_cc' }} // chave de api do google maps (minha pessoal)
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map