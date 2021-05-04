import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const Map = ({ eventData, center, zoom }) => {
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
        return null
    })


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA46buk9ewy_IWtL0c1sLQFiBtoE5iZFxA' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers} 
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 37.09024,
        lng: -95.712891
    },
    zoom: 4
}

export default Map
