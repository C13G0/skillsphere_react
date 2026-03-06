import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Certificados from './views/Certificados'
import './App.css'
import Vacantes from './views/Vacantes'

function App() {
  return (
    <div>
      <Navbar />
      <Certificados />
      <Vacantes />
      <Footer />
    </div>
  )
}

export default App
