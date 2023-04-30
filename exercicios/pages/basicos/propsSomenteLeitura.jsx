import SomaUm from "@/components/SomaUm";

export default function propsSomenteLeitura() {
  return (
    //TypeError: Cannot assign to read only property 'numero' of object '#<Object>'
    <SomaUm  numero={99}/>
  )
}