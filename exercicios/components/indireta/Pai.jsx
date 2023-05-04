import Filho from "./Filho";

export default function Pai(props) {
  function funcaoDoPai(param) {
    console.log(param)
  }
  return (
    <div>
      <Filho funcao={funcaoDoPai}/>
    </div>
  )
}