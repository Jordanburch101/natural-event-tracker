import  { useState, useEffect } from 'react'

// Component Imports
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'



function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  //Button state
  const [wildfireButton, setWildfireButton] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
      
      console.log(events) // Remove later
    }

    fetchEvents()
  }, [])


  return (
    <div className="App">
      <Header setWildfireButton={setWildfireButton} wildfireButton={wildfireButton} />
      { !loading ? <Map eventData={eventData} /> : <Loader />}

    </div>
  );
}

export default App;
