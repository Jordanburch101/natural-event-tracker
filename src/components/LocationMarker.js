import { Icon } from '@iconify/react'

const LocationMarker = ({ lat, lng, onClick, markerIcon }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={markerIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker
