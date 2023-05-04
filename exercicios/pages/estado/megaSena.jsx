import { useState } from "react"

export default function megaSena() {
  const [numbers, setNumbers] = useState([])

  function geraNumero() {
    let min = 1;
    let max = 100;
    const numerosGerados = [];
   
    for(let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
      numerosGerados.push(randomNum)
    }

    setNumbers(numerosGerados)
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