import styles from './board.module.css'

export default function board() {
  return (
    <div className={styles.fundo}>
      {makeSquares(3)}
    </div>
  )
}

function makeSquares(valor) {
  const squares = []
  for(let i = 1; i <= valor; i++) {
    squares.push(
      <span style={{
        backgroundColor: i / 2 == 0 ? "orange" : "red",
        height: "100px",
        width: "100px",
        display: "flex row"
      }}></span>
    )
  }
  return squares
}