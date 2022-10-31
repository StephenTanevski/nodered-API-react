import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './Views/Main'
import MainPage from './MainPage';
import Overview from './Overview';

function App(){
    // Possibly add id params; have to properply set up api

    return <div className="App">
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/overview/:id' element={<Overview />}/>
    </Routes>
    </div>

}

export default App;