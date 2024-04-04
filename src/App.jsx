import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useThemeContext } from './hooks/useThemeContext'
import { Navbar } from './components'
import { About, Contact, Home } from './pages';

function App() {
  const { contextTheme, setContextTheme } = useThemeContext();
  return (
    <div id={contextTheme}>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </BrowserRouter> 
    </div>
   
  )
}

export default App
