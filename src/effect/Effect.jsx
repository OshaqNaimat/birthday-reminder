 import React, { useEffect } from 'react'
import { useState } from 'react';

const Effect = () => {
    const [count, setCount] = useState(0);
    

    useEffect(()=>{
          document.title = `(${count}) new messages`    
    },[count])
   
  return (
    <>
    <div className="container mx-auto text-center ">
        <h1 className='text-9xl'>{count}</h1>
        <button onClick={()=> setCount(count + 1)} className='bg-green-500 p-2 rounded-md text-white hover:bg-green-700 cursor-pointer active:scale-95'>Increament</button>
    </div>
    </>
  )
}

export default Effect