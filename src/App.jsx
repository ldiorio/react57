import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(100)

  return (
    <>
      
      <h1>React is Working Online!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
