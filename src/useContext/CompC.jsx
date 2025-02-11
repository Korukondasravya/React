import React from 'react'
import {user} from './CompA'
const CompC = () => {
  return (
    <>
    {
    <user.Consumer>
        {
            (user)=>{
            return(
                <h1>My name is {user}</h1>

            )
        }
}
    </user.Consumer>
}
    </>
  )
}

export default CompC
