import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h2>SkillSphere</h2>
      <div className="navbar-links">
        <Link to="/certificados">Certificados</Link>
        <Link to="/vacantes">Vacantes</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/academicos">Académicos</Link>
      </div>
    </nav>
  )
}

export default Navbar

