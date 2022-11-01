import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from './MainPage';
import Overview from './Overview';

function App(){
    return <div className="App">
    <Routes>
      <Route path='/' element={<MainPage/>}/> {/* routes '/' to mainpage. */}
      <Route path='/overview/:id' element={<Overview />}/> {/* dynamically routes /overview according to roomID. */}
    </Routes>
    </div>

}

export default App;