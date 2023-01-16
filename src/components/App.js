import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [getIncre, setIncre] = useState(1);
   
  const IncreBtn = () => {
      setIncre(getIncre+1);
  }

  const DecreBtn = () => {
      setIncre(getIncre-1);
  }

  let className = "normal";

  if(getIncre % 3 == 0){
    className = "fizz";
  }
  else if(getIncre % 5 == 0){
    className = "buzz";
  }
  else if(getIncre % 3 == 0 && getIncre % 5 == 0){
    className = "fizzbuzz";
  }
  
  return (
    <div id="main">
       <button id='increment' onClick={IncreBtn}>Increment</button>
       <div id='counter' className={className}>{getIncre}</div>
       <button id='decrement' onClick={DecreBtn}>Decrement</button>
    </div>
  )
}


export default App;
