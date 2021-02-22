import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
//actions
import { setMapEntity } from '../../redux/Map/Action'
import { removeMarker } from '../../redux/Markers/Action'

import './index.scss'

const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '96vh'
  }

  const style = {
    width: '100%',
    height: '100%'
  }

const MapComponent = ({  google }) => {
    const dispatch = useDispatch();

    const markerList = useSelector(state => state.suggestions);
    const defaultLocation = useSelector(state => state.autocomplete.default_location);
    
    const handleRemoveMarker = ({ id }) => {
        dispatch(removeMarker(id))
    }

    return (
        <div className="main-map">
            <Map
                google={google}
                onReady={(_mapProps, map) => dispatch(setMapEntity(map))}
                zoom={8}
                mapTypeControl={false}
                zoomControl={false}
                initialCenter={defaultLocation}
                center={markerList.length? markerList[markerList.length-1].geometry.location : defaultLocation}
                streetViewControl={false}
                fullscreenControl={false}
                style={style}
                containerStyle={containerStyle}
                initialCenter={defaultLocation}
            >
                {markerList.map((placeDetails) =>
                    <Marker key={placeDetails.place_id} name={placeDetails.name}
                        id={placeDetails.place_id}
                        onClick={handleRemoveMarker}
                        position={placeDetails.geometry.location}>
                    </Marker>
                )}
            </Map>
        </div>
      
    );
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAtQ13fhIoe4w_bfcAD1Br_Vt8YQWKHTew')
})(MapComponent)
