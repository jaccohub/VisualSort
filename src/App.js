import React, { useState, useEffect } from 'react'
import Chart from './Chart'
import { getRandomInt } from './utils'
import bubbleSort from './algorithms/bubbleSort'

function bar(index, height) {
  return <div key={index} className="bar" style={{ height }} />
}

function comparator(a, b) {
  return a - b
}

function App() {
  const [arraySize, setArraySize] = useState(20)
  const array = new Array(arraySize).fill(0).map(() => getRandomInt(0, 500))

  bubbleSort(array)

  return (
    <div className="container">
      <Chart
        {...array}
      />
    </div>
  )
}

export default App
