export default function Estilo(props) {
  const classeAplicada = props.numero >= 0 ? "azul" : "vermelha"

  return (
    <div>
      <h1 style={{
        backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
        color: props.color,
        textAlign: props.direita ? "right" : "left"
        }}>
        Texto
      </h1>
      <h2 className={classeAplicada}>Texto #02</h2>
    </div>
  )
}