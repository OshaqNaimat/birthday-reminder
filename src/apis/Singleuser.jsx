import React from 'react'

const Singleuser = ({avatar_url,login}) => {
  return (
    <>
    <div className="shadow-2xl my-3 p-5 rounded-md shadow-black">
        <img src={avatar_url} className='w-full' alt="" />
        <h4 className='text-xl text-gray'>{login}</h4>
    </div>
    
    </>
  )
}

export default Singleuser