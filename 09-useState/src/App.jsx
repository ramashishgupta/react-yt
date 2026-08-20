import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(20)

  function changeNum(){
    setNum(30);
  }

  return (
    <div>
      <h1>Value of A is {num}</h1>
      <button onClick={changeNum}> click me</button>
    </div>
  )
}

export default App