import React, { useState } from 'react'
import Singlebday from './Singlebday'
import { bday } from './Data'
import { FaTrashAlt } from "react-icons/fa";

const Birthday = () => {
    const [data, setData] = useState( bday )
  return (
    <>
    <div className="w-[90%] shadow-blue-500 sm:w-[70%] md:w-[60%] lg:w-[35%] shadow-2xl rounded-md mx-auto p-5 my-5">
      <h1 className='text-center text-4xl'>
        {data.length} Birthdays Today
        </h1>

      {data.map((item,index)=>{
        return <Singlebday {...item} key={index}/>
      })}
      
      <button onClick={
        data.length == 0 ? ()=>setData(bday) : ()=>setData([])
      } className={`${data.length == 0 ? 'bg-green-500  hover:bg-green-600 ' : 'bg-red-500  hover:bg-red-600 '} p-2 rounded-md w-full text-white text-center cursor-pointer active:scale-90 duration-200 `}>
                {data.length == 0 ? 'Refresh All' : ' Remove All'}
               
              </button>
    </div>
    </>
  )
}

export default Birthday