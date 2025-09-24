import React from 'react'

const Singleuser = ({avatar_url,login,id}) => {
  return (
    <>
    <div className="shadow-2xl cursor-pointer hover:scale-110 duration-200 my-3 p-5 rounded-md shadow-black">
        <img src={avatar_url} className='w-full' alt="" />
        <h4 className='text-xl gap-2 text-gray'>
          {id}.{login}</h4>
    </div>
    
    </>
  )
}

export default Singleuser