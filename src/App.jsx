import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { useThemeContext } from './hooks/useThemeContext'

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
