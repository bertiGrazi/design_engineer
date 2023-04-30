/**
 * Gere uma div e dentro dela tera um span com vários valores (de 1 ao 10)
 * Geração de uma lista
 */

// Sobre o <span> = é usada para agrupar conteúdo em linha e aplicar estilos a ele usando CSS ou para identificá-lo com JavaScript. 

function gerarLista(valor) {
  const lista = []
  for(let i = 1; i <= valor; i++) {
    if (i < valor) {
      lista.push(<span>{i}, </span>)
    } else {
      lista.push(<span>{i}</span>)
    }
  }
  return lista
}

export default function lista1() {
  return (
    <div>
     {gerarLista(20)}
    </div>
  )
}
