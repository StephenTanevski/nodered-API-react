import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Main from './Views/Main'

function App(){
    const url = 'http://localhost:3300/data'
    const [roomData, setRoomData] = useState(null)

    useEffect(() => {
        
    }, [url])

    return (
        <div>
            <Main />
        </div>
    )
}

export default App;