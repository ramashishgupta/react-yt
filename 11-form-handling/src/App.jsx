import React from 'react'

const App = () => {

  const formSubmit=(elem)=>{
    elem.preventDefault();
    console.log("form submitted");
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        formSubmit(elem)
      }}>
        <input type='text' placeholder='enter your name'/ >
        <button>Click me !!</button>
      </form>
    </div>
  )
}

export default App 