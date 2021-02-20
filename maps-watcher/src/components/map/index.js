import { Map, GoogleApiWrapper } from 'google-maps-react';
import SuggestionBar from '../SuggestionBar';

const mapStyles = {
    width: '100%',
    height: '100%'
}

const fetchPlaces = (mapProps, map) => {
    const { google } = mapProps;

    const options = {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "geometry", "icon", "name"],
    origin: { lat: 50.064192, lng: -130.605469 },
    strictBounds: false,
    types: ["establishment"],
    };
    const autocomplete = new google.maps.places.Autocomplete('bar', options);
}

const MapComponent = ({ google }) => {
    
    return (
        <div>
            <SuggestionBar />
            <Map
                google={google}
                onReady={fetchPlaces}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            />
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAtQ13fhIoe4w_bfcAD1Br_Vt8YQWKHTew')
})(MapComponent)
