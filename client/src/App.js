import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Overview from './Overview';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/overview' element={<Overview />}/>
    </Routes>
  </div>
}

export default App;
