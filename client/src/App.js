import React from 'react';
import axios from 'axios';

import Main from './Views/Main'

function App(){
    const url = 'http://localhost:3300/data'
    axios.get(url)
    .then(response => {
         
    })


    return (
        <div>
            <Main />
        </div>
    )
}

export default App;