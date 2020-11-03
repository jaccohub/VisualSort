import React, { useEffect } from 'react'

function Chart(props) {
  return Object.entries(props).map(([key, height]) => <div key={key} className="bar" style={{ height }} />)
}

export default Chart
