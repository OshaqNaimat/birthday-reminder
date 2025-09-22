import React from 'react'
import './globals.css'
import Effect from './effect/Effect'
import Cleanup from './effect/Cleanup'
import Birthday from './bday-reminder/Birthday'
import Api from './apis/Api'
import Forms from './controlled_inputs/Forms'


const App = () => {
  return (
    <>
      {/* <Effect/> */}
      {/* <Cleanup/> */}
      <Birthday/>
      {/* <Api/> */}
      {/* <Forms/> */}
    </>
  )
}

export default App