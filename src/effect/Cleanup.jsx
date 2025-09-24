import React, { useEffect, useState } from 'react'

const Cleanup = () => {

    const handleSize = ()=>{
        setSize(window.innerWidth)
    }

    const [size, setSize] = useState(window.innerWidth);
   useEffect(()=>{
    window.addEventListener('resize', setSize(window.innerWidth))
    return ()=>{
        window.removeEventListener('resize', setSize(window.innerWidth))
    }
   })
  return (
    <>
    <h1 className='text-6xl text-center'>
        window size: {size}px
    </h1>
    </>
  )
}

export default Cleanup