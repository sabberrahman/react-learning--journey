import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [ charAllowed , setCharAllowed]=useState(false);
  const [passward , setPassword]=useState("");

  const passwordRef=useRef(); //for more Optimization & effects

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"  //if true it will be added to list
    if (charAllowed) str += "!@#$%^&*-_+=[]{}" // A to z list if true 

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char)
      
    }
   //char hold random str index , chatAt making the index into string form
   // now we passing new password value via setPassword
    setPassword(pass)

   //
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select() //highlight hobe
    passwordRef.current?.setSelectionRange(0,50) //0-50 copy hobe
    window.navigator.clipboard.writeText(passward) //bc copy to cilpBoard logic
  }, [passward]) 



  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-orange-400 bg-gray-800 px-4 py-3 my-8'>

      <h1 className='dsd text-white text-center my-3 '>Passward generator</h1>
       <div className='flex  rounded-lg overflow-hidden mb-4'>
         <input type="text" value={passward} className='outline-none w-full py-1 px-3' placeholder='passward' readOnly ref={passwordRef} />
        <button className='dsd outline-none bg-blue-700 text-white px-3 py-o.5 shrink-0 ' onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 '>

          <input type="range" min={6} max={50} value={length} className=' cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} /> <label >Length: {length}</label>
        </div>
         
        <div className='flex text-sm gap-x-2'>
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
            setNumberAllowed((prev)=> !prev)
          }} /> <label htmlFor='numberInput' >Number</label>
        </div>

        <div className='flex text-sm gap-x-2'>
          <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={()=>{
            setCharAllowed((prev)=> !prev)
          }} /> <label htmlFor='charInput' >Characters</label>
        </div>
      </div>
     
    </div>
      

    
  )
}

export default App

//NOtes!

// useCallback is primarily used to memoize a callback function so that it doesn't get recreated on every render unless its dependencies change.


