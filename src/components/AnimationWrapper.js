import React, { useState, useEffect } from 'react'
import { getRandomInt } from '../utils'
import bubbleSort from '../algorithms/bubbleSort'
import quickSort from '../algorithms/quickSort'
import AnimationRunner from './AnimationRunner'
import HeaderRow from './HeaderRow'

function comparator(a, b) {
  return a - b
}

export default function AnimationWrapper() {
  const [arraySize, setArraySize] = useState(20)
  const [algoIndex, setAlgoIndex] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [freezeFrames, setFreezeFrames] = useState()

  const algorithms = [bubbleSort, quickSort]
  const sortFn = algorithms[algoIndex]

  useEffect(() => {
    setAnimate(false)
    const array = new Array(arraySize).fill(0).map(() => getRandomInt(0, 500))
    setFreezeFrames(sortFn(array, comparator))
  }, [arraySize, sortFn])

  // Has to wait for useEffect to run
  if (!freezeFrames) return null
  return (
    <div>
      <HeaderRow
        start={() => setAnimate(true)}
        reset={() => setAnimate(false)}
        arraySize={arraySize}
        setArraySize={setArraySize}
        setAlgorithm={setAlgoIndex}
      />
      <AnimationRunner
        freezeFrames={freezeFrames}
        runAnimation={animate}
      />
    </div>
  )
}
