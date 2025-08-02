import React, { useEffect, useState } from 'react'

const Button = () => {

const [darkMode,setDarkMode]=useState(false);

const toggleMode=()=>setDarkMode(!darkMode);


useEffect(()=>{
    document.body.style.background=darkMode ? '#222':'#fff';
     document.body.style.background=darkMode ? '#fff':'#000';
},[darkMode]);

  return (
    <div>
      <button onClick={toggleMode}
      style={{
        backgroundColor:darkMode ? '#555':'#ddd',
        color:darkMode ? '#fff':'#000',
      }}
      >
Cambiar modo
      </button>
    </div>
  )
}

export default Button
