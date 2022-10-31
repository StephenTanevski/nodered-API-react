import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Overview.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Thermometer from 'react-thermometer-component'


function Overview(){
    // Placeholder Json
    const { id } = useParams()
    const url = `http://localhost:3300/${id}` 
    const [room, setRoom] = useState(null)
    
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setRoom(response.data)
        })
    }, [url])
 
    if (room){
        return <div>
        <div class='center'>
            <h2>Room {room.room}</h2>
        </div>
        <div class='container'>
            <div id='cam'>
                <h2>Thermal Camera Feed</h2>
                </div>
            <div id='temp'>
                <h2>Temp</h2>
                <div id='tempinfo'>
                    <Thermometer
                        theme="light"
                        value="27"
                        max="40"
                        steps="4"
                        format="°C"
                        size="large"
                        height="250"
                    />
                    <div id='tempnum'><h1>{room.temperature}℃</h1></div>
                </div>
            </div>
            <div id='past'>
                <h3>Past Bookings</h3>
                <div id='body1'>
                    [ 12:00 - 14:00 ], 11/08/22, Patient Consulting<br></br>
                    [ 09:00 - 13:00 ], 10/08/22, Medicine mixing<br></br>
                    [ 09:30 - 11:45 ], 09/08/22, GP Checkups 
                </div>
                </div>
            <div id='future'>
                <h3>Future Bookings</h3>
                <div id='body1'>
                    [ 12:00 - 14:00 ], 15/09/22, Patient Consulting<br></br>
                    [ 09:00 - 13:00 ], 23/09/22, Medicine mixing<br></br>
                    [ 09:30 - 11:45 ], 02/10/22, GP Checkups 
                </div>
                </div>
            <div id='info'>
                <h2>Booking Information</h2>
                <div id='body1'>
                    Booking Title:<br></br>
                    Booking Duration:<br></br>
                    Booking Description:<br></br>
                </div>
                </div>
            <div id='footer'>
                <Button style={{
                    backgroundColor: "#21b6ae"
                    }} variant='contained' id='mainButtons' component={Link} to={`/`}>Back</Button>
                <div class='divider'> </div> 
            </div>

        </div>

        </div>
    }
}

export default Overview;