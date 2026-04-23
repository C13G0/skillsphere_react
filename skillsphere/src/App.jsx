import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Certificados from './views/Certificados'
import Vacantes from './views/Vacantes'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/vacantes" element={<Vacantes />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
