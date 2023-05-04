import { useState } from "react"

export default function formulario() {
  const [value, setValue] = useState("")

  function alterarInput() {
    setValue(value + "!")
  }
  return(
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
      <button onClick={alterarInput}>Alterar</button>
    </div>
  )
}