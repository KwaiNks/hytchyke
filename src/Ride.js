import React,{useState} from 'react';

function Ride({rides}) {
    

    const[searchSeat, setSearchSeat] = useState("")

    function handleBookings(id){

        fetch(`http://localhost:3000/rides/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
                
        }
        )
       
    }

    return (
        <div className='ridedetails'>
            <div className="box">
            <img className="image" src={rides.image} alt={rides.firstname}/>
            <h4>Date of Travel: {rides.date}</h4>
            <p>Name: {rides.firstname} {rides.lastname}</p>
            <p>Departure: {rides.departure}</p>
            <p>Destination: {rides.destination}</p>
            <p>Price: {'$' + rides.price}</p>
            <p>Seats Available: {rides.seats}</p>
            
            <form>
            <button type="submit">Book Your Seat</button>
            <input type="number" value={searchSeat} onChange={(e) => setSearchSeat(e.target.value)} min="1" max="9" name="Seats"  required/>
            </form>
            </div>
        </div>
    )
}

export default Ride;

// onChange={(e) => setSearchSeat(e.target.value)} 