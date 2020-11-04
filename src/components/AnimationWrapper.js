import React, { useState, useEffect } from 'react'
import algorithms from '../algorithms'
import AnimationRunner from './AnimationRunner'
import HeaderRow from './HeaderRow'

function comparator(a, b) {
  return a - b
}

export default function AnimationWrapper({ array, setArraySize }) {
  const [algoIndex, setAlgoIndex] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [freezeFrames, setFreezeFrames] = useState()
  const sortFn = algorithms[algoIndex].func

  useEffect(() => {
    setAnimate(false)
    setFreezeFrames(sortFn(array, comparator))
  }, [array, sortFn])

  // Has to wait for useEffect to run
  if (!freezeFrames) return null
  return (
    <div>
      <HeaderRow
        start={() => setAnimate(true)}
        reset={() => setAnimate(false)}
        arraySize={array.size}
        setArraySize={setArraySize}
        setAlgorithm={setAlgoIndex}
      />
      <AnimationRunner
        freezeFrames={freezeFrames}
        animate={animate}
      />
    </div>
  )
}
