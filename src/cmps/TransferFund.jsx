import { useState } from "react"

export default function TransferFund({ username, maxCoins ,onTransferCoins }) {

  const [inputValue, setInputValue] = useState("")

  function handelSubmit(ev) {
    ev.preventDefault()
    if(+inputValue > maxCoins) return alert('You dont have enought money') // will be modal/user msg
    onTransferCoins(+inputValue)
    setInputValue("")
  }

  function handleInputChange(ev) {
    setInputValue(ev.target.value)
  }

  return (
    <div className="transfer-form">
      <form onSubmit={(ev) => handelSubmit(ev)}>
        <label htmlFor="fundsToTransfer">Transfer coins to {username}</label>
        <input
          type="number"
          value={inputValue}
          onChange={(ev) => handleInputChange(ev)}
        />
        <button>Transfer</button>
      </form>
    </div>
  )
}
