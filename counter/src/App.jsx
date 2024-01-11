
import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 5; aita use kora jabe nah 
  //React will control the UI and handle variable changes , not us!!

 let [Counter ,setCounter]=useState(5)

 const addValue =()=>{
    return (setCounter (Counter + 1))
 }
 // counter= counter+1
    // setCounter(counter)..aivabe o kora jayy

 const removeValue =()=>{
  return (setCounter (Counter - 1))
}

  return (
    <>
      <h1>Counter hai..</h1>
      <h2>value: {Counter}</h2>
      <button onClick={addValue}>Add</button> 
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App

// aikhny ekhn Branch hisab a update na hoye induvisually update hoye next a jabe ....hence 4 kore barve 

// const addValue=()=>{
//   setCounter(prevCounter=>prevCounter+1)
//   setCounter(prevCounter=>prevCounter+1)
//   setCounter(prevCounter=>prevCounter+1)
//   setCounter(prevCounter=>prevCounter+1)
// }

// OUtput +4


