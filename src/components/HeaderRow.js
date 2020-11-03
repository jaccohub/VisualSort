import React from 'react'

export default function HeaderRow({ start, reset, arraySize, setArraySize }) {
  function onChange(e) {
    setArraySize(Number(e.target.value))
  }

  return (
    <div className="header">
      <h1>VisualSort</h1>
      <div className="center">
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
        <input
          onChange={onChange}
          type="range"
          min="5"
          max="100"
          defaultValue={arraySize}
          className="slider"
          id="slider"
        />
      </div>
    </div>
  )
}
