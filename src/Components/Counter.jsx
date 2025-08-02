import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

const aumentar=()=>{
    if (count<10) setCount(count+1);
};

const disminuir=()=>{
   if (count>0) setCount(count-1);
}

  return (
  
  <div>
<h2>Contador</h2>
<button onClick={disminuir}>-</button>
<span style={{margin:'0 1rem'}}>{count}</span>
<button onClick={aumentar}>+</button>
  </div>
  );
}
