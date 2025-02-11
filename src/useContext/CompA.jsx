import React from 'react'
import CompB from './CompB'

export const user = React.createContext();
export const CompA = () => {
  return (
    <>
    <user.Provider value={'abhi'}>

        <CompB/>
    </user.Provider>
    </>
  )
}

