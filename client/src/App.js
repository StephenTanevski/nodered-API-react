import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Main from './Views/Main'

function App(){
    // Possibly add id params; have to properply set up api
    const url = 'http://localhost:3300/data'
    const [roomData, setRoomData] = useState(null)

    let content = null

    useEffect(() =>{        
        axios.get(url)
        .then(response => {
            setRoomData(response.data)
        })
    }, [url])

    if(roomData){
        content = 
        <div>
            <Main />
        </div>
    }

    return(
        <div>
            No Data yet {content}
        </div>
    )

}

export default App;