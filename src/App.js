import React, { useState, useEffect } from 'react'
import { getRandomInt } from './utils'
import bubbleSort from './algorithms/bubbleSort'
import AnimationRunner from './components/AnimationRunner'

function comparator(a, b) {
  return a - b
}

function App() {
  const [arraySize, setArraySize] = useState(20)
  const [animate, startAnimation] = useState(false)
  const array = new Array(arraySize).fill(0).map(() => getRandomInt(0, 500))

  const freezeFrames = bubbleSort(array, comparator)

  return (
    <div className="container">
      <button onClick={() => startAnimation(true)}>Animate</button>
      <AnimationRunner
        freezeFrames={freezeFrames}
        runAnimation={animate}
      />
    </div>
  )
}

export default App
