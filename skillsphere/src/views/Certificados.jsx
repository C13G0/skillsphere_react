import { useState } from 'react'
import CertificadoCard from '../components/CertificadoCard'
import './Certificados.css'

function Certificados() {
    const [certificados, setCertificados] = useState([
        { id: 1, nombre: "Desarrollo de Software", escuela: "SENA", fecha: "Enero 2026" },
        { id: 2, nombre: "Fundamentos de Python", escuela: "Coursera", fecha: "Febrero 2026" },
        { id: 3, nombre: "Diseño UX/UI", escuela: "Google", fecha: "Marzo 2026" },
        { id: 4, nombre: "React Básico", escuela: "Platzi", fecha: "Marzo 2026" },
        { id: 5, nombre: "Git y GitHub", escuela: "Udemy", fecha: "Febrero 2026" },
    ])

    return (
        <div className="certificados-container">
            <h2>Mis Certificados</h2>
            <p className="certificados-subtitulo">Logros y certificaciones obtenidas</p>
            <div className="certificados-grid">
                {certificados.map((cert) => (
                    <CertificadoCard
                        key={cert.id}
                        nombre={cert.nombre}
                        escuela={cert.escuela}
                        fecha={cert.fecha}
                    />
                ))}
            </div>
        </div>
    )
}

export default Certificados