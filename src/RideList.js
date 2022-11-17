import React from 'react';
import Ride from './Ride'

function RideList({ rides }) {
    return (
        <ul className="rideList">
            {
                rides.map(ride => {
                    return <Ride key={ride.id} rides={ride} />
                }).slice(0, 4)      
            }     
        </ul>
    )
}
export default RideList;