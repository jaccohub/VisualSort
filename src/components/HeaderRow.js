import React from 'react'

export default function HeaderRow({ start, reset }) {
  return (
    <div className="header">
      <select>
        <option>Bubble sort</option>
        <option disabled>Quick sort</option>
      </select>
      <button onClick={start}>
        Start
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  )
}
