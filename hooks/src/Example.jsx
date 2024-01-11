import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
 // Just once 
  useEffect(() => {
    console.log(`You have clicked the first button ${count} times`);
  }, []);

  const [count2, setCount2] = useState(0);
// jotoBAr count2 change hobe 
  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times`)
  }, [count2]);

  return (
    <div>
        <p>Hooks Example in console.log</p>
      <button  className="bg bg-red-300 px-4 rounded-xl" onClick={() => setCount(count + 1)}>Click me</button>
      <button className="bg bg-red-400 px-4 rounded-xl" onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
  );
}

export default App;


//className="bg bg-red-300 px-4 rounded-xl" 