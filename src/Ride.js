import { isDisabled } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';

function Ride({rides, updateBookings}) {
    

    const[searchSeat, setSearchSeat] = useState("")


    function handleBookings(e){
        e.preventDefault()

        const updateRides = {
            seats: rides.seats - searchSeat,
        }
        fetch(`http://localhost:3000/rides/${rides.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateRides)
        }
        )
       .then(response => response.json())
       .then(data => updateBookings(data))

        setSearchSeat("")
    }

    return (
        <div className='ridedetails'>
            <div className="box">
            <h4>Date of Travel: {rides.date}</h4>
            <p>Name: {rides.firstname} {rides.lastname}</p>
            <p>Departure: {rides.departure}</p>
            <p>Destination: {rides.destination}</p>
            <p>Price: {'$' + rides.price}</p>
            <p>Seats Available: {rides.seats}</p>
            
            <form onSubmit={handleBookings}>
            <input type="number" value={searchSeat} onChange={(e) => setSearchSeat(e.target.value)} min="1" max="9" name="Seats"  required/>
            <button type="submit">{rides.seats === 0? isDisabled :"Book Your Seat"}</button>
            </form>
            </div>
            <img className="image" src={rides.image} alt={rides.firstname}/>
            
        </div>
    )
}

export default Ride;
