import React, { useContext } from 'react'
import { userName}  from './CompA'
import { rollNo } from './CompA'

const CompC = () => {
  let user=useContext(userName)
  let roll=useContext(rollNo)
  return (
    <div>
    <h1>My name is {user},{roll}</h1>
      
    </div>
  )
}

export default CompC
