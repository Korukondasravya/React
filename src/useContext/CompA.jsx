// import React, {createContext} from 'react'
// import {CompB} from './CompB'

// export const user = React.createContext();
// export const id=React.createContext()
// export const CompA = () => {
//   return (
//     <>
//     <user.Provider value={'abhi'}>

//         <id.Provider value={10}>
//           <CompB/>
//           </id.Provider>
//     </user.Provider>
//     </>
//   )
// }

import React from 'react'
import CompB from './CompB'
export let userName=React.createContext()
export let rollNo=React.createContext()
const CompA = () => {
  return (
    <div>
      <userName.Provider value={"Kumar"}>
      <rollNo.Provider value={12}>
        <CompB></CompB>
      </rollNo.Provider>
      </userName.Provider>
      
    </div>
  )
}

export default CompA
