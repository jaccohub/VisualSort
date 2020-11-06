import React from 'react'

export default function RenderChart({ keyFrames, step }) {
  const frame = keyFrames[step] || keyFrames[0]
  const { array, current, compare } = frame

  return (
    <div className="chart">
      {array.map((height, index) => {
        let className = 'bar'
        if ([current, compare].includes(index)) className += ' arrow'
        return <div key={index} className={className} style={{ height }} />
      })}
    </div>
  )
}
