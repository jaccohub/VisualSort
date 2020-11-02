import React, { useState } from 'react'
import superagent from 'superagent'

function App() {
  const [app, setApp] = useState(null)
  superagent.get(process.env.REACT_APP_BACKEND_URL).then(res => { setApp(res.body.app) })

  return (
    <div>
      Connected to backend "{app}"
    </div>
  )
}

export default App
