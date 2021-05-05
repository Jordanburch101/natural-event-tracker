import { useState } from 'react';

// Component Imports
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import MarkerInfoBox from './MarkerInfoBox';

// Icon Imports

import volcanoIcon from '@iconify-icons/maki/volcano-11';
import fireIcon from '@iconify/icons-mdi/fire-alert'

const Map = ({ eventData, center, zoom }) => {
    const [markerInfo, setMarkerInfo] = useState(null)


    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker 
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]} 
            markerIcon={fireIcon}
            onClick={() => setMarkerInfo({ id: ev.id, title: ev.title})}
            />
        } else if(ev.id === "EONET_354") {
            return null

        } else if(ev.categories[0].id === 12) {
            return <LocationMarker 
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]} 
            markerIcon={volcanoIcon}
            onClick={() => setMarkerInfo({ id: ev.id, title: ev.title})}
            />
        }
        return null
    })


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA46buk9ewy_IWtL0c1sLQFiBtoE5iZFxA' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
                options={{
                    mapTypeId: 'satellite'

                }}
            >
                {markers} 
            </GoogleMapReact>
            {markerInfo && <MarkerInfoBox info={markerInfo} onClick={() => setMarkerInfo(false)} />}
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
