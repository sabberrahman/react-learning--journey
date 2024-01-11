
import { useState } from 'react'


function App() {

  const [color , setColor]=useState("olive")


  return (
    
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

          <div className='fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2 '>

            <div className='flxed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl'> 

            <button onClick={()=> setColor("red")} className='px-4 py-1 outline-none text-white rounded-full'  style={{backgroundColor: "red"}} >Red </button>

            <button onClick={()=> setColor("yellow")} className='px-4 py-1 outline-none text-black rounded-full'  style={{backgroundColor: "yellow"}} >yellow </button>

            <button onClick={()=> setColor("olive")} className='px-4 py-1 outline-none text-white rounded-full'  style={{backgroundColor: "olive"}} >olive </button>

            <button onClick={()=> setColor("blue")} className='px-4 py-1 outline-none text-white rounded-full'  style={{backgroundColor: "blue"}} >blue </button>

            <button onClick={()=> setColor("green")} className='px-4 py-1 outline-none text-white rounded-full'  style={{backgroundColor: "green"}} >green </button>
            
            </div>
             


          </div>

      </div>
       
    
  )
}

export default App


//onClick={setcolor} aivaby ref naoa jay but argu pass kora jay na...thats why
// onClick={()=> setColor("red/blue/yellow")} aivaby pass koraaa 
//()=> callBack 
