import React, { useEffect, useState } from 'react'
import Singleuser from './Singleuser'

const Api = () => {

    let url ='https://api.github.com/users'
    const [users, setUsers] = useState([])

    const getData = async()=>{
        let response = await fetch(url)
        let data = await response.json()
        
        setUsers(data)
    }

    useEffect(()=>{
        getData()   
    },[])

  return (
    <>
    <h1 className="text-center my-4">
        User Data
    </h1>


<div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">

        {users?.map((item,index)=>{
            return <Singleuser {...item} key={index}/>
        })}
        </div>
    </>
  )
}

export default Api