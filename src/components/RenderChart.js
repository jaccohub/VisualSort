import React, { useRef, useEffect, useState } from 'react'

export default function RenderChart({ keyFrames, step }) {
  const [translateX, setTranslateX] = useState()
  const [initialX, setInitialX] = useState()

  const firstRef = useRef()
  const currentRef = useRef()
  const frame = keyFrames[step] || keyFrames[0]
  const { array, current } = frame

  useEffect(() => {
    const fx = firstRef.current.offsetLeft
    const cx = currentRef.current ? currentRef.current.offsetLeft : fx
    const barWidth = firstRef.current.offsetWidth
    let translateX = cx - fx - 10
    if (barWidth < 20) translateX -= (20 - barWidth) / 2
    setInitialX(firstRef.current.offsetLeft)
    setTranslateX(translateX)
  }, [keyFrames, step])

  return (
    <div className="chart">
      <div className="arrow" style={{ left: initialX, transform: `translate(${translateX}px, -4rem)` }} />
      {array.map((height, index) => {
        const ref = index === 0 ? firstRef : index === current ? currentRef : null
        return <div ref={ref} key={index} className="bar" style={{ height }} />
      })}
    </div>
  )
}
