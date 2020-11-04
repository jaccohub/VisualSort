import React from 'react'

export default function HeaderRow({ start, reset, arraySize, setArraySize, setAlgorithm }) {
  function onChangeArraySize(e) {
    setArraySize(Number(e.target.value))
  }

  function onChangeAlgorithm(e) {
    setAlgorithm(Number(e.target.value))
  }

  return (
    <div className="header">
      <h1>VisualSort</h1>
      <div className="center">
        <select onChange={onChangeAlgorithm}>
          <option value="0">Bubble sort</option>
          <option value="1">Quick sort</option>
        </select>
        <button onClick={start}>
          Start
        </button>
        <button onClick={reset}>
          Reset
        </button>
        <input
          onChange={onChangeArraySize}
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
