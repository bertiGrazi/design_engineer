import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"
import { mega } from "../../functions/mega"

export default function megaSenaOutraResposta() {
  const [numeros, setNumeros] = useState(mega())

  function renderNumeros() {
    return numeros.map(
      numero => <ContadorDisplay  key={numero} numero={numero} />
    )
  }

  return(
    <div>
      <h1>Mega Sena</h1>
      <div>
        {renderNumeros()}
      </div>
    </div>
  )
}