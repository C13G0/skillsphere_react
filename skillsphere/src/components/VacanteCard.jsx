import './VacanteCard.css'

function VacanteCard(props) {
  return (
    <div className="vacante-card">
      <h2>{props.nombre}</h2>
      <p className="cargo">{props.cargo}</p>
      <p className="empresa">{props.empresa}</p>
      <p className="salario">{props.salario}</p>
      <p className="disponibilidad">{props.disponibilidad}</p>
      <button>Aplicar</button>

    </div>
  )
}

export default VacanteCard