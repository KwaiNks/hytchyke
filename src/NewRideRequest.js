import React from 'react';


function NewRideRequest({searchDeparture, setSearchDeparture, searchDestination, setSearchDestination}) {

    return (
        <div id="newRideRequest">
            <h2>Book Ride</h2>
                <input type="text" value={searchDeparture} onChange={(e) => setSearchDeparture(e.target.value)} name="departure" placeholder="Departure"  required/>
                <input type="text" value={searchDestination} onChange={(e) => setSearchDestination(e.target.value)} name="destination" placeholder="Destination"  required/>
        </div>
    );

}

export default NewRideRequest;
