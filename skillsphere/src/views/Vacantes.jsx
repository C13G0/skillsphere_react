import { useState } from 'react'
import VacanteCard from '../components/VacanteCard'
import './Vacantes.css'

function Vacantes() {
    const [vacantes, setVacantes] = useState([
    { id: 1, nombre: "Desarrollador Frontend", cargo: "Junior", empresa: "Tech Colombia", salario: "$3.500.000", disponibilidad: "Tiempo completo" },
    { id: 2, nombre: "Diseñador UX/UI", cargo: "Semi-senior", empresa: "Creative Studio", salario: "$4.000.000", disponibilidad: "Híbrido" },
    { id: 3, nombre: "Analista de Datos", cargo: "Junior", empresa: "DataCo", salario: "$3.800.000", disponibilidad: "Remoto" },
    { id: 4, nombre: "Desarrollador Backend", cargo: "Senior", empresa: "SoftHub", salario: "$6.000.000", disponibilidad: "Tiempo completo" },
    { id: 5, nombre: "DevOps Engineer", cargo: "Semi-senior", empresa: "CloudNet", salario: "$5.500.000", disponibilidad: "Remoto" },
])

    return (
        <div className="vacantes-container">
            <h2>Vacantes disponibles</h2>
            <p className="vacantes-subtitulo">Cargo disponible</p>
            <div className="vacantes-grid">
                {vacantes.map((vac) => (
                    <VacanteCard
                        key={vac.id}
                        nombre={vac.nombre}
                        cargo={vac.cargo}
                        empresa={vac.empresa}
                        salario={vac.salario}
                        disponibilidad={vac.disponibilidad}
                    />
                ))}
            </div>
        </div>
    )
}

export default Vacantes