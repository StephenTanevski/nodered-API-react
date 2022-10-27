import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';
import RoomCard from './Components/RoomCard';


function Main(){
    const url = `https://jsonplaceholder.typicode.com/users/` 
    const [users, setUsers] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setUsers({
            loading: false,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setUsers({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() =>{
                setUsers({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    let content = null

    if(users.data){
        content = 
        users.data.map((user, key) =>
            <div>
                <RoomCard
                    user={user}
                />
            </div>
        )
    }
    return <div>
        <div class='center'>
            <h2>Hospital Overview</h2>
        </div>
        <div class="container2"> 
            <div id='blank'></div>
            <div id='available'>
                <h2 id='center'>Available Rooms</h2>
                { content }
                
            </div>
        <div id='blank'></div>
        <div id='unavailable'>
            <h2 id='center'>Unavailable Rooms</h2>
            { content }
            </div>
        <div id='blank'></div>
        </div>
    </div>
}

export default Main;