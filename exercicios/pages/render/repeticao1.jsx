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
    //transformar lista de aprovados em JSX

    const itens = []

    for(let i = 0; i < listaAprovados.length; i++) {
      itens.push(<li>{listaAprovados[i]}</li>)
    }
      return itens
  }

  return (
    <ul>
      {renderizarLista()}
    </ul>
  )

}