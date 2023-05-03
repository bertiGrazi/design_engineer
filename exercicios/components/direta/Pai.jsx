import Filho from "./Filho";

export default function Pai(props) {
  return(
    <div>
      <h1>Família {props.familia}</h1>
      <Filho nome="Pedro" familia={props.familia}/>
      <Filho nome="Grazielli" familia={props.familia}/>
      <Filho nome="Beyoncé" familia={props.familia}/>
      <Filho nome="Gabriel" {...props} />
    </div>
  )
}