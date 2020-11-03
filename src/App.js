import React, { useState, useEffect } from 'react'
import { getRandomInt } from './utils'
import bubbleSort from './algorithms/bubbleSort'
import AnimationRunner from './components/AnimationRunner'
import HeaderRow from './components/HeaderRow'

function comparator(a, b) {
  return a - b
}

function App() {
  const [arraySize, setArraySize] = useState(20)
  const [animate, setAnimate] = useState(false)
  const [freezeFrames, setFreezeFrames] = useState()

  useEffect(() => {
    setAnimate(false)
    const array = new Array(arraySize).fill(0).map(() => getRandomInt(0, 500))
    setFreezeFrames(bubbleSort(array, comparator))
  }, [arraySize])

  // Has to wait for useEffect to run
  if (!freezeFrames) return null
  return (
    <div>
      <HeaderRow
        start={() => setAnimate(true)}
        reset={() => setAnimate(false)}
        arraySize={arraySize}
        setArraySize={setArraySize}
      />
      <AnimationRunner
        freezeFrames={freezeFrames}
        runAnimation={animate}
      />
    </div>
  )
}

export default App
