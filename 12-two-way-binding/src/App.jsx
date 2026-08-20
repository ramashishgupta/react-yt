import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState("")

  const formSubmit=(elem)=>{
    elem.preventDefault();
    console.log("form submitted by" , title);
    setTitle(" ")
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        formSubmit(elem)
      }}>
        <input 
         type='text' 
         placeholder='enter your name'
         value={title}
         onChange={(elem)=>{
          setTitle(elem.target.value)
         }}
         / >
        <button>Click me !!</button>
      </form>
    </div>
  )
}

export default App 