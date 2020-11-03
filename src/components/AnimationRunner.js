import React, { useEffect, useState } from 'react'
import RenderChart from './RenderChart'

export default function AnimationRunner({ freezeFrames, runAnimation }) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    if (runAnimation) {
      const interval = setInterval(() => {
        setFrame(currentFrame => {
          console.log('interval')
          if (freezeFrames.length > currentFrame + 1) {
            return currentFrame + 1
          }
          clearInterval(interval)
          return currentFrame
        })
      }, 20)

      return () => {
        clearInterval(interval)
      }
    }
  }, [runAnimation, freezeFrames.length])

  return (
    <RenderChart
      freezeFrames={freezeFrames}
      step={frame}
    />
  )
}
