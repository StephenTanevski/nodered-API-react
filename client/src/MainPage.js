import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';
import RoomCard from './Components/RoomCard';
import RoomCardUnavailable from './Components/RoomCardUnavailable'
import Header from './Components/Header';
import Button from '@mui/material/Button';


function MainPage(){
    const url = 'http://localhost:3300/' 
    const [rooms, setRooms] = useState({
        loading: false,
        data: null,
        error: false
    })

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

    let content = null
    let content2 = null

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
            <Button variant='outlined' id='mainButtons'>Refresh Rooms</Button>
        </div>
        </div>
        
    </div>
}

export default MainPage;