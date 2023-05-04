export default function ContadorDisplay(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50px",
      width: "50px",
      borderRadius: "50px",
      backgroundColor: "red",
      color: "white",
      margin: "20px"

    }}>
      {props.numero}
    </div>
  )
}