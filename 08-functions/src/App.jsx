import React from 'react'

const App = () => {

function btnClick(){
  console.log("button is clicked");
}

function inputChange(params) {
  console.log(params);
}

  return (
    <div>
      <h1>hi i am ashish gupta </h1>
      <button onClick={btnClick}>Clicked me </button>
      {/* <input onChange={()=>{console.log("user is typing")}} type='text' placeholder='Enter your name '></input> */}

      <input onChange={function(elem){
        inputChange(elem.target.value);
      }} type='text' placeholder='Enter your name '></input>
      
    </div> 
  )
}

export default App