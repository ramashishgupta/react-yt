import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:"ashish", age : 20})
  const [arr, setArr] = useState([12,34,43,34])

  const btnClicked =()=>{
    const newNum = {...num};
    newNum.user = "aman";
    setNum(newNum);

  }

    const updateArr =()=>{
    const newArr = [...arr];
    newArr.push(20)
    setArr(newArr);

  }
  return (
    <div>
      <h1>{num.user} {num.age} {arr}</h1>
      <button onClick={btnClicked}>Click me </button><br></br><br></br>
      <button onClick={updateArr}> arrUpdate</button>
    </div>
  )
}

export default App