import React, { useEffect, useState } from 'react'
import RenderChart from './RenderChart'

export default function AnimationRunner({ freezeFrames, animate }) {
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
          if (freezeFrames.length > currentFrame + 1) {
            return currentFrame + 1
          }
          clearInterval(interval)
          return currentFrame
        })
      }, 100)

      return () => {
        clearInterval(interval)
      }
    }
  }, [animate, freezeFrames])

  return (
    <RenderChart
      freezeFrames={freezeFrames}
      step={frame}
    />
  )
}
