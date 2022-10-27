import Main from './Main';
import Overview from './Overview';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return <div className="App">
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/overview/:id' element={<Overview />}/>
    </Routes>
  </div>
}

export default App;
