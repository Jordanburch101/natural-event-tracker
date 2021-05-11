import  { useState, useEffect } from 'react'

// Component Imports
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'



function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  //Button state
  const [wildfires, setWildfires] = useState(true)
  const [storms, setStorms] = useState(true)
  const [volcanos, setVolcanos] = useState(false)


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
      <Header 
        wildfires={wildfires}
        storms={storms}
        volcanos={volcanos}
        setWildfires={setWildfires}
        setStorms={setStorms}
        setVolcanos={setVolcanos}
      />
      { !loading ? <Map 
        eventData={eventData} 
        wildfires={wildfires}
        storms={storms}
        volcanos={volcanos}
      /> : <Loader />}

    </div>
  );
}

export default App;
