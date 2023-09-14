import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../Components/Home'
import Destination from '../Components/Destination';
import Crew from '../Components/Crew'
import Technology from '../Components/Technology';
import Moon from '../Components/Destinations/Moon';
import Mars from '../Components/Destinations/Mars';
import Europa from '../Components/Destinations/Europa';
import Titan from '../Components/Destinations/Titan';


function App() {

  return (
    <div>
       <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}></Route>
             {/* <Route path='/destination' element={<Destination/>}></Route> */}
             <Route path='/moon' element={<Moon/>}></Route>
             <Route path='/crew' element={<Crew/>}></Route>
             <Route path='/technology' element={<Technology/>}></Route>
             <Route path='/mars' element={<Mars/>}></Route>
             <Route path='/europa' element={<Europa/>}></Route>
             <Route path='/titan' element={<Titan/>}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
