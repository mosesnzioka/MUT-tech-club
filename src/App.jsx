
import './App.css'
import Header from './components/header/header'
import Home from './page/home/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Leaders from './components/leaders/leaders'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/Leaders' element={<Leaders/>}/>
    </Routes>
    </BrowserRouter>
    
    
   
    
    </>
  )
}

export default App
