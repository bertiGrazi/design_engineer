import ContadorDisplay from "@/components/ContadorDisplay"
import { useState } from "react"

export default function contador() {
  const styleButton = {
    height: "50px",
    width: "50px",
    margin: "10px"
  }
  const [valor, setValor] = useState(0)

   const somaValor = () => setValor(valor + 1)

  function subtraiValor() {
    let novoValor = valor - 1
    setValor(novoValor)
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h3>Contador</h3>
      <ContadorDisplay numero={valor}/>
     <div>
      <button style={styleButton} onClick={somaValor}>+</button>
      <button style={styleButton} onClick={subtraiValor}>-</button>
     </div>
    </div>
  )
}