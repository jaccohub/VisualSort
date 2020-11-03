import React from 'react'

export default function RenderChart({ freezeFrames, step }) {
  const frame = freezeFrames[step] || freezeFrames[0]
  const { array, current, compare } = frame

  return (
    <div>
      <div className="container">
        {array.map((height, index) => {
          let backgroundColor = 'aqua'
          if (index === compare) backgroundColor = 'orange'
          if (index === current) backgroundColor = 'blue'
          return <div key={index} className="bar" style={{ height, backgroundColor }} />
        })}
      </div>
    </div>
  )
}
