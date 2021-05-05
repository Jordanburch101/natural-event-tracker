const MarkerInfoBox = ({ info, onClick }) => {
    return (
        <div className="location-markerInfo">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>Title: <strong>{ info.title }</strong></li>
            </ul>
            <button className="location-button" onClick={onClick} value="Close">Close</button>
        </div>
    )
}

export default MarkerInfoBox
