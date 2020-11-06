import React from 'react'

export default function RenderChart({ keyFrames, step }) {
  const frame = keyFrames[step] || keyFrames[0]
  const { array, current } = frame

  return (
    <div className="chart">
      {array.map((height, index) => {
        const className = `bar${current === index ? ' arrow' : ''}`
        return <div key={index} className={className} style={{ height }} />
      })}
    </div>
  )
}
