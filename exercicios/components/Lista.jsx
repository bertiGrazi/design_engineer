export default function Lista(props) {
  //renderizar os filhos
  return (
    <>
        <h1>Lista de Algo</h1>
          <ul style={{ 
            listStyle: "none",
            padding: 0,
            color: "pink"
            }}>
           {props.children}
          </ul>
    </>
  )
}