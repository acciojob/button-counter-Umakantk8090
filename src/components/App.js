import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count,setCount]=useState(0)
  
  const addValue=()=>{
    setCount(count+1)
  }
  return (
    <div>
       <button onClick={addValue} >count</button> 
    </div>
  )
}

export default App
