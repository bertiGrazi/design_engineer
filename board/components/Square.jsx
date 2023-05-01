function makeSquares(valor) {
  const squares = []
  for(let i = 1; i <= valor; i++) {
    squares.push(
      <span>{i},</span>
    )
    return squares
  }
}

export default function Square() {
  return (
    <div>
     {makeSquares(30)}
    </div>
  )
}

