import React from 'react'

export default function RenderChart({ freezeFrames, step }) {
  const frame = freezeFrames[step] || freezeFrames[0]
  const { array, current, compare } = frame

  return (
    <div>
      <div className="container">
        {array.map((height, index) => {
          let className = 'bar'
          if ([current, compare].includes(index)) className += ' arrow'
          return <div key={index} className={className} style={{ height }} />
        })}
      </div>
    </div>
  )
}
