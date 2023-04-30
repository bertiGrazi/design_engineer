export default function Titulo(props) {
  // props = propriedades que são passadas para um component 
  console.log(props)
  /*
   if (props.pequeno) {
      return (
        <>
          <p>São Paulo Futebol Clube</p>
        </>
      )
   } else {
      return (
        <>
        <h1>{props.principal}</h1>
        <h2>{props.secundario}</h2>
        <h3>{props.teste}</h3>
        <h4>{props.grazi}</h4>
      </>
      )
   }
   */
  // if ternário
  return props.pequeno ? (
    <>
      <p>São Paulo Futebol Clube</p>
    </>
  ) : (
    <>
      <h1>{props.principal}</h1>
      <h2>{props.secundario}</h2>
      <h3>{props.teste}</h3>
      <h4>{props.grazi}</h4>
    </>
  )
}