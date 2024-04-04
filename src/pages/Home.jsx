import React from 'react'
import { useThemeContext } from '../hooks/useThemeContext'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import './css/Home.css'

export const Home = () => {
  const { contextTheme } = useThemeContext()
  return (
    <div className='app-header'>
      <h2>{contextTheme} Mode</h2>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
