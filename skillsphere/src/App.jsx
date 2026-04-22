import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Certificados from './views/Certificados'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/certificados" />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/vacantes" element={<div>Vacantes - próximamente</div>} />
        <Route path="/perfil" element={<div>Perfil - próximamente</div>} />
        <Route path="/academicos" element={<div>Académicos - próximamente</div>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App