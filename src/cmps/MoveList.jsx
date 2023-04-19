import React from "react"

export default function MoveList({ title, moves }) {
  return (
    <div className="moves-list">
      <h3 className="moves-list-title">{title}</h3>
      <ul>
        {moves.map((move,idx) => {
          return (
            <li className="move" key={idx}>
              <span>At: {move.at}</span>
              <span>To: {move.to}</span>
              <span>Amount: {move.amount}$</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
