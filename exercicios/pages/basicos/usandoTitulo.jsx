import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
  return (
    <div>
     <Titulo 
      principal = "Pagina de Cadastro"
      secundario = "Incluir, alterar e excluir coisas!"
      teste = "123"
      grazi = "Grazielli"
      pequeno = {true}
     />
    </div>
  )
}