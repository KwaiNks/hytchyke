import React from 'react';
import Ride from './Ride'

function RideList({ rides, updateBookings }) {
    if(rides.length === 0){
        return(<h2> 🙁 Sorry there is no ride available. Maybe its time to buy your own.🙂</h2>)
    }
    else{
    return (
        <ul className="rideList">
            { 
                rides.map(ride => {
                    return <Ride key={ride.id} rides={ride} updateBookings={updateBookings} />
                }).slice(0, 8)      
            }     
        </ul>
    )
}}
export default RideList;