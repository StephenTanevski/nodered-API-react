import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';
import RoomCard from './Components/RoomCard';
import RoomCardUnavailable from './Components/RoomCardUnavailable'
import Header from './Components/Header';
import Button from '@mui/material/Button';


function MainPage(){
    const url = 'http://localhost:3300/' 
    /* create rooms variable and method for setting rooms called setRooms. */
    const [rooms, setRooms] = useState({
        loading: false,
        data: null,
        error: false
    })

    /* function for refreshing page so data can be fetched again. */
    function refreshPage() {
        window.location.reload(false);
    }

    /* if url changes than the code within useeffect will rerun */
    useEffect(() => {
        setRooms({
            loading: false,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRooms({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() =>{
                setRooms({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    /* setting variables to display the data. */
    let content = null
    let content2 = null

    /* if there is data is rooms it will display a card of it. */
    if(rooms.data){
        content = 
        rooms.data.map((room, key) =>
            <div>
                <RoomCard
                    room={room}
                />
            </div>
        )
    }
    if(rooms.data){
        content2 = 
        rooms.data.map((room, key) =>
            <div>
                <RoomCardUnavailable
                    room={room}
                />
            </div>
        )
    }
    return <div>
        <Header />
        <div class="container2">

            <div id='blank'></div>
            <div id='title1'>
                <h2 id='center'>Available Rooms</h2>
            </div>
            <div id='blank'></div>
            <div id='title2'>
                <h2 id='center'>Unavailable Rooms</h2>
                </div>
            <div id='blank'></div>

            <div id='blank'></div>
            <div id='available'>
                { content }
                
            </div>
        <div id='blank'></div>
        <div id='unavailable'>
            { content2 }
            </div>
        <div id='blank'></div>
        <div id='blank'></div>
        <div id='blank'>
        </div>
        <div id='blank'></div>
        <div id='mainButtons'>
            {/* clicking refresh rooms button will refresh page resulting in fetching the data again. */}
            <Button variant='outlined' id='mainButtons' onClick={refreshPage}>Refresh Rooms</Button> 
        </div>
        </div>
        
    </div>
}

export default MainPage;