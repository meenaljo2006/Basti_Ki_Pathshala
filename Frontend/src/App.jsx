import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            
          </Routes>
    
        
        </BrowserRouter>
        
      </div>
      
    </>
  )
}

export default App
