
import './App.css'
import Header from './components/header/header'
import Home from './page/home/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Leaders from './components/leaders/leaders'
import Tracks from './page/tracks/tracks'
import Event from './page/event/events'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/Leaders' element={<Leaders/>}/>
      <Route path='/tracks' element={<Tracks/>}/>
      <Route path='/events'  element={<Event/>}/>
    </Routes>
    </BrowserRouter>
    
    
   
    
    </>
  )
}

export default App
