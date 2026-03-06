import './CertificadoCard.css'

function CertificadoCard(props) {
  return (
    <div className="certificado-card">
      <h2>{props.nombre}</h2>
      <p className="escuela">{props.escuela}</p>
      <p className="fecha">{props.fecha}</p>
    </div>
  )
}

export default CertificadoCard