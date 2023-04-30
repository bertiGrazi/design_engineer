//integracao JSX + JS
export default function jsx3() {
  const subtitulo = "Estou no JavaScript!"

  return (
    <div>
      <h1>Integracao JS e JSX</h1>
      <h2>{subtitulo}</h2>
      <h3>{entre(30, 1, 10)}</h3>
    </div>
  )
}

function entre(valor, min, max) {
  if(valor >= min && valor <= max) {
    return "Sim"
  } else {
    return "Não"
  }
}