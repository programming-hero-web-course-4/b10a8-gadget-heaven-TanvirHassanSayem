import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import PriceOption from './components/PriceOption/PriceOption'
import LineChart1 from './components/LineChart/LineChart'
import Phones from './components/phones/Phones'

function App() {


  return (
    <> 
      <NavBar> </NavBar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className='text-7xl bg-red-300'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineChart1></LineChart1>
      <Phones></Phones>
    </>
  )
}

export default App

