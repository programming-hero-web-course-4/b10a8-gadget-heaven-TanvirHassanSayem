import { useEffect } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Gadgets from './components/Gadgets/Gadgets'
import NavBar from './components/NavBar/NavBar'

function App() {
  useEffect(() => {
    document.title = "Gadget Heaven | Home"
  }, [])

  return (
    <> 

      <NavBar> </NavBar>
      <Banner></Banner>
      <Gadgets></Gadgets>
      <Footer></Footer>

    </>
  )
}

export default App

