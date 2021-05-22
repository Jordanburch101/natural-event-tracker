const MarkerInfoBox = ({ info, onClick }) => {
    return (
        <div className="location-markerInfo">
            <h2>Event Location Info</h2>
            <ul>
                <li><strong>ID:</strong> { info.id }</li>
                <li><strong>Title:</strong> { info.title }</li>
                <li><strong>Info:</strong> <a href={info.src} target="_blank" rel="noreferrer">{ info.src }</a></li>
            </ul>
            <button className="location-button button" onClick={onClick} value="Close">Close</button>
        </div>
    )
}

export default MarkerInfoBox
