import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Overview.css'

function Overview(){
    const { id } = useParams()
    const url = `https://jsonplaceholder.typicode.com/users/${id}` 
    const [user, setUser] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setUser(response.data)
            })
    }, [url])
    
    if (user){
        return <div>
        <div class='center'>
            <h2>Room Name: {user.name}</h2>
        </div>
        <div class="container">
            <div id='thermalcam'>Thermal Camera</div>
            <div id='bookinginfo'>Booking Info</div>
            <div id='pastbookings'>Past Bookings</div>
            <div id='futurebookings'>Future Bookings</div>
            <footer>Efficiency Meter</footer>
        </div>
        </div>
    }
}

export default Overview;