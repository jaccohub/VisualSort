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
  const [keyFrames, setKeyFrames] = useState()
  const sortFn = algorithms[algoIndex].func

  useEffect(() => {
    setAnimate(false)
    setKeyFrames(sortFn(array, comparator))
  }, [array, sortFn])

  // Has to wait for useEffect to run
  if (!keyFrames) return null
  return (
    <>
      <HeaderRow
        start={() => setAnimate(true)}
        reset={() => setAnimate(false)}
        arraySize={array.length}
        setArraySize={setArraySize}
        setAlgorithm={setAlgoIndex}
      />
      <AnimationRunner
        keyFrames={keyFrames}
        animate={animate}
      />
    </>
  )
}
