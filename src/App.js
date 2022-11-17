import React, { useEffect, useState } from 'react';
import Nav from "./Nav"
import Header from './Header';
import NewRideRequest from './NewRideRequest';
import NewRidePost from './NewRidePost';
import RideList from './RideList';

function App() {

  const [rides, setRides] = useState([])
  const [searchDeparture, setSearchDeparture] = useState("")
  const [searchDestination, setSearchDestination] = useState("")
  // const [searchDate, setSearchDate] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3000/rides')
      .then(res => res.json())
      .then(rides => setRides(rides))
  }, [])


  function addPostRide(newRide) {
    fetch("http://localhost:3000/rides", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRide)
    })
      .then(response => response.json())
      .then(data => setRides([...rides, data]))

  }

  const filterRides = rides.filter(ride => {
    return (
      ride.departure.toLowerCase().includes(searchDeparture.toLowerCase())
      && ride.destination.toLowerCase().includes(searchDestination.toLowerCase()
      // && ride.date.includes(searchDate) && (ride.date === searchDate)
      )
    )
  }
  )
 
  return (
    <div className="App">
      <Nav />
      <br></br>
      <Header />
      <NewRideRequest searchDeparture={searchDeparture} setSearchDeparture={setSearchDeparture}
                      searchDestination={searchDestination} setSearchDestination={setSearchDestination} 
                      // searchDate={searchDate} setSearchDate={setSearchDate} 
                      />

      <h3 id="listAvailableRides">
        List Available Rides
      </h3>
      <RideList rides={filterRides} />
      <NewRidePost addPostRide={addPostRide} />
    </div>
  );
}

export default App;
