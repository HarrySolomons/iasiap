import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Flappy } from './pages/Flappy'
import { NiceTry } from './pages/NiceTry'
import { Ropemakers } from './pages/Ropemakers'
import { Invalid } from './pages/Invalid'
import { Anglesey } from './pages/Anglesey'

function App() {

  return (
      <section id="center">
        <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nicetry" element={<NiceTry />} />
          <Route path="/anglesey" element={<Anglesey />} />
          <Route path="/bandstand" element={<Ropemakers />} />
          <Route path="/mudlark" element={<Flappy />} />
          <Route path="/*" element={<Invalid/>} />
        </Routes>
        <NavLink to="/">Back to home</NavLink>
      </HashRouter>
      </section>
  )
}

export default App
