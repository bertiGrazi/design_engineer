export default function Repeticao1() {
  const listaAprovados = [
    'Joao',
    'Maria',
    'Ana',
    'Bia',
    'Carlos',
    'Daniel',
    'Laura',
  ]

  function renderizarLista() {
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
  }

  return (
    <ul>
      {renderizarLista()}
    </ul>
  )

}
/*
function renderizarLista() {
  //transformar lista de aprovados em JSX
  const itens = []

  for(let i = 0; i < listaAprovados.length; i++) {
    itens.push(<li key={i}>{listaAprovados[i]}</li>)
  }
    return itens
}
*/