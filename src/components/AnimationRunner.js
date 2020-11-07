import React, { useEffect, useState } from 'react'
import RenderChart from './RenderChart'

export default function AnimationRunner({ keyFrames, animate }) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    // Reset animation
    if (!animate) setFrame(0)
  }, [animate])

  useEffect(() => {
    // Start animation
    if (animate) {
      const interval = setInterval(() => {
        setFrame(currentFrame => {
          if (keyFrames.length > currentFrame + 1) {
            return currentFrame + 1
          }
          clearInterval(interval)
          return currentFrame
        })
      }, 300)

      return () => {
        clearInterval(interval)
      }
    }
  }, [animate, keyFrames])

  return (
    <RenderChart
      keyFrames={keyFrames}
      step={frame}
    />
  )
}
