import { Icon } from '@iconify/react'

const LocationMarker = ({ lat, lng, onClick, markerIcon, className }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={markerIcon} className={className} />
        </div>
    )
}

export default LocationMarker
