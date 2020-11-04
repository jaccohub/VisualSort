import React from 'react'
import algorithms from '../algorithms'

export default function HeaderRow({ start, reset, arraySize, setArraySize, setAlgorithm }) {
  function onChangeArraySize(e) {
    setArraySize(Number(e.target.value))
  }

  function onChangeAlgorithm(e) {
    setAlgorithm(e.target.value)
  }

  return (
    <div className="header">
      <h1>VisualSort</h1>
      <div className="center">
        <select onChange={onChangeAlgorithm}>
          {algorithms.map((algo, index) => <option key={index} value={index}>{algo.name}</option>)}
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
