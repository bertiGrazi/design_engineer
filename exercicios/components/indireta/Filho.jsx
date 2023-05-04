export default function Filho(props) {
  return (
    <div>
      <button onClick={() => props.funcao("Passei no ENEM!")}>Click me</button>
    </div>
  )
}