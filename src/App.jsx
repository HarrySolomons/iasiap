import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Flappy } from './pages/Flappy'
import { Head } from './pages/Head'
import { Ropemakers } from './pages/Ropemakers'
import { Invalid } from './pages/Invalid'
import { Bsky } from './pages/Bsky'
import { Boats } from './pages/Boats'
import { Quiz } from './pages/Quiz'

function Language() {
  return <h1>Watch your language.</h1>
}

function App() {

  return (
      <section id="center">
        <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nicetry" element={<Boats />} />
          <Route path="/bronze" element={<Head />} />
          <Route path="/anglesey" element={<Bsky />} />
          <Route path="/bandstand" element={<Ropemakers />} />
          <Route path="/mudlark" element={<Flappy />} />
          <Route path="/trivia" element={<Quiz />} />
          <Route path="/fuck" element={<Language />} />
          <Route path="/shit" element={<Language />} />
          <Route path="/cunt" element={<Language />} />
          <Route path="/*" element={<Invalid/>} />
        </Routes>
        <NavLink to="/">Back to home</NavLink>
      </HashRouter>
      </section>
  )
}

export default App
