import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA46buk9ewy_IWtL0c1sLQFiBtoE5iZFxA' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 43.5320,
        lng: 172.6306
    },
    zoom: 6
}

export default Map
