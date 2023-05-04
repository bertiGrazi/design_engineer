import { useState } from "react"

export default function megaSenaComNumerosDefinidos() {
  const [numbers, setNumbers] = useState([])
  const [value, setValue] = useState("")

  function geraNumero() {
    let min = 1;
    let max = 100;
    const numerosGerados = [];
   
    for(let i = 0; i < value; i++) {
      let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
      numerosGerados.push(randomNum)
    }

    setNumbers(numerosGerados)
  }

  function numeroDefinido(e) {
    if (e.target.value < 0) {
      return setValue("Número inválido")
    } else {
      setValue(e.target.value)
    }
  }

  return (
    <>
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h1 style={{
        color: "yellow"
      }}>Mega Sena</h1>
      <ul style={{
        display: "flex",
        listStyle: "none",
        margin: "20px"
      }}>
          {numbers.map((num, index) => (
            <li key={index} style={
              {
                padding: "20px",
                backgroundColor: "blue",
                margin: "20px",
                borderRadius: "100px"
              }
            }>{num}</li>
          ))}
        </ul>
        <input 
          style={{
            height: "50px",
            width: "300px",
            margin: "20px"
          }}
          onChange={e => {
            if (e.target.value < 0) {
              setValue(null)
            } else {
              setValue(e.target.value)
            }
          }}
          type="number" 
          placeholder="Insira quantos números você quer gerar aqui.">
          </input>

      <button onClick={geraNumero} style={{
        backgroundColor: "white",
        color: "black",
        height: "40px",
        width: "200px",
        borderRadius: "8px"
      }}>Gerar números</button>
    </div>
    </>
  )
}