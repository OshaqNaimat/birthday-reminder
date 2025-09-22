import React, { useState } from 'react'

const Forms = () => {
const [age,setAge] = useState('')
const [data,setData] = useState([])



    if(age > 18){
        console.log('Aja bhai');
    }else{
        console.log('Chote Hat beh');
    }
  return (
    <>
    <div className="container my-5 mx-auto shadow-lg w-[90%] md:w-1/2 lg:w-1/3">
    <form >

        <label >User Age</label>
            <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} className='w-full ' placeholder='Add your age...' />
               {
                 setAge > 18 ? <p className='text-green-500'>Aja bhai</p> : <p className='text-red-500'>Chote Hat beh</p>
               }
            <button className='bg-blue-500 hover:bg-blue-600 cursor-pointer active:scale-90'>Add Data</button>
    </form>
    </div>
    
    </>
  )
}

export default Forms