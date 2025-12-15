import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  let [count,setCount] = useState(0);
  const addCount = ()=>{
    if(count<20) count++;
    console.log("Count Added",count);
    setCount(count);
  }
  
  const removeCount = ()=>{
    if(count >0) count--;
    console.log("Count Removed",count);
    setCount(count);
  }
  
  return (
    <>
      <h1>Chai with react</h1>
      <h2>Counter count : {count} </h2>
      <button onClick={addCount}>Add count</button>
      <br/><br></br>
      <button onClick={removeCount}>Remove count</button>

    </>
  )
}

export default App
