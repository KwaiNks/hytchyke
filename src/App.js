import React, { useEffect, useState } from 'react';
import Nav from "./Nav"
import Header from './Header';
import NewRideRequest from './NewRideRequest';
import NewRidePost from './NewRidePost';
import RideList from './RideList';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [rides, setRides] = useState([])
  const [searchDeparture, setSearchDeparture] = useState("")
  const [searchDestination, setSearchDestination] = useState("")

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
      )
    )
  }
  )

  function updateBookings(data) {
    const newBookings = rides.map((ride) => {
      if (ride.id === data.id) {
        return data;
      }
      else {
        return ride;
      }
    })
    setRides(newBookings)
  }

  return (
    <div className="App">
      <Nav />
      <br></br>
      <br></br>
      <br></br>
      <Header />

      <Routes>
        <Route path="/" element={<NewRideRequest searchDeparture={searchDeparture} setSearchDeparture={setSearchDeparture}
          searchDestination={searchDestination} setSearchDestination={setSearchDestination}
        />
        } />
        <Route path="/newRidePost" element={<NewRidePost addPostRide={addPostRide} />} />
        <Route path='/AvailableRides'/>
      </Routes>

      <h2 id="listAvailableRides">
        List Available Rides
       
      </h2>
      <RideList rides={filterRides} updateBookings={updateBookings} />

    </div>
  );
}

export default App;
