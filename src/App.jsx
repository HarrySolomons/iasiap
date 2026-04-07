import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Flappy } from './pages/Flappy'
import { NiceTry } from './pages/NiceTry'
import { Ropemakers } from './pages/Ropemakers'

function App() {

  return (
    <BrowserRouter basename='/iasiap'>
      <section id="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/XXXXXX" element={<NiceTry />} />
          <Route path="/bookcode" element={<Ropemakers />} />
          <Route path="/boatname" element={<Flappy />} />
      </Routes>
      </section>
    </BrowserRouter>
  )
}

export default App
