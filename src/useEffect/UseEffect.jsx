// import React, { useEffect } from 'react'

// const UseEffect = () => {
//     let [state, setState] = React.useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(state+1)

//         },2000)
//     })//No Dependency
//   return (
//     <>
//       <h1>{state}</h1>
//     </>
//   )
// }

// export default UseEffect

import React, { useEffect } from 'react'

const UseEffect = () => {
    let [state, setState] = React.useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setState(state+1)

        },2000)
    }," ")//Empty Dependency
  return (
    <>
      <h1>{state}</h1>
    </>
  )
}

export default UseEffect
