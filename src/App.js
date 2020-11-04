import React, { useState, useEffect } from 'react'
import { getRandomInt } from './utils'
import AnimationWrapper from './components/AnimationWrapper'

function App() {
  const [arraySize, setArraySize] = useState(20)
  const [array, setArray] = useState(new Array(arraySize).fill(0).map(() => getRandomInt(0, 500)))

  useEffect(() => {
    setArray(new Array(arraySize).fill(0).map(() => getRandomInt(0, 500)))
  }, [arraySize])

  return (
    <AnimationWrapper
      array={array}
      setArraySize={setArraySize}
    />
  )
}

export default App
