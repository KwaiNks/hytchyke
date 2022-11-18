import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav(){

    return (
        <nav className='navigation'>
                <NavLink className="link" to="/" >Passenger</NavLink>
                <NavLink className="link" to="/newRidePost">Driver</NavLink>
                <NavLink className="link" to="/rideList">Rides</NavLink>
         </nav>
    )
}

export default Nav;