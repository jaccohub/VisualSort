import React, { useState, useEffect } from 'react'
import { getRandomInt } from './utils'
import bubbleSort from './algorithms/bubbleSort'
import AnimationRunner from './components/AnimationRunner'
import HeaderRow from './components/HeaderRow'

function comparator(a, b) {
  return a - b
}

function App() {
  const [arraySize, setArraySize] = useState(50)
  const [animate, setAnimate] = useState(false)
  const [freezeFrames, setFreezeFrames] = useState()

  const array = new Array(arraySize).fill(0).map(() => getRandomInt(0, 500))

  useEffect(() => {
    setFreezeFrames(bubbleSort(array, comparator))
  }, [arraySize])

  if (!freezeFrames) return null
  return (
    <div>
      <HeaderRow start={() => setAnimate(true)} reset={() => setAnimate(false)} />
      <AnimationRunner
        freezeFrames={freezeFrames}
        runAnimation={animate}
      />
    </div>
  )
}

export default App
