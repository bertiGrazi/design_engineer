import { useState } from "react"

export default function mouse() {
  const [x, setX] = useState(0)

  const arrayY = useState(0)
  let y = arrayY[0]
  const alteraY = arrayY[1]

  function quandoMover(ev) {
    setX(ev.clientX)
    alteraY(ev.clientY)
  }
  return (
    <div style={{
      display:"flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "pink",
      color: "black",
      fontWeight: "bold"
      
    }} onMouseMove={quandoMover}>

      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  )
}