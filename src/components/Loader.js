import Spinner from './Spinner';

const Loader = ({ errorState }) => {
    return (
        <div className="loader-container">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            {!errorState ? <Spinner /> : ''}
            
            <h1 className="loader-title">{!errorState ? `Fetching Data` : `Unable to Fetch Data..`} </h1>
        </div>
    )
}

export default Loader


