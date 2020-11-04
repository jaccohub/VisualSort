import React, { useEffect, useState } from 'react'
import RenderChart from './RenderChart'

export default function AnimationRunner({ freezeFrames, runAnimation }) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    // Reset animation
    if (!runAnimation) setFrame(0)
  }, [runAnimation])

  useEffect(() => {
    // Start animation
    if (runAnimation) {
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
  }, [runAnimation, freezeFrames])

  return (
    <RenderChart
      freezeFrames={freezeFrames}
      step={frame}
    />
  )
}
