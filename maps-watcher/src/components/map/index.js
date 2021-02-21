import { useDispatch, useSelector } from 'react-redux'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import SuggestionBar from '../SuggestionBar';
import { setMapEntity } from '../../redux/actions/MapAction'

const mapStyles = {
    width: '100%',
    height: '100%'
}

const MapComponent = ({ google }) => {
    const dispatch = useDispatch();

    const markerList = useSelector(state => state.suggestions);
    const map = useSelector(state => state.map);

    return (
        <div>
            {map && <SuggestionBar />}
            <Map
                google={google}
                onReady={(_mapProps, map) => dispatch(setMapEntity(map))}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            >
                {markerList.length > 0 && markerList.map( (placeDetails, index)  =>
                    <Marker key={index} name={placeDetails.name}
                    position={{
                        lat: placeDetails.geometry.location.lat(),
                        lng: placeDetails.geometry.location.lng()
                    }}>
                </Marker>
                )}
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAtQ13fhIoe4w_bfcAD1Br_Vt8YQWKHTew')
})(MapComponent)
