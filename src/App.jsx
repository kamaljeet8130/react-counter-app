import { useState } from 'react';

function App() {
  const[counter,setCounter] =useState(0)
  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1);
    }
  };
  const removeValue=()=>{
   if(counter>0){
    setCounter(counter-1);
    }
  };
  const resetValue=()=>{
    setCounter(0);
  }
  return (
    <>
      <h1> Basic Counter App</h1>
      <h2>Current Counter Value {counter}</h2>
      <button onClick={addValue}
      >Add Value {counter} </button>
      <br/>
      <button onClick={removeValue}> Remove Value {counter}</button>
      <br />
      <button onClick={resetValue}>
        Reset
      </button>
    </>
  )
}

export default App
