// import React, { useState } from 'react'

// const State = () => {
// let [state,setState]=useState("abhi")
// console.log(state);
// console.log(setState);

// let demo=()=>{
//     setState("Sravya");

// };
//   return (
//     <>
//     <h1>{state}</h1>
//     <button onClick={demo}>Click</button>
//     </>
//   )
// }

// export default State

import React, { useState } from 'react'
import img1 from "\Images\img1.jpg"
import img2 from "\Images\img2.jpg"

const State = () => {
    let [img,setImg]=useState(img1)
    console.log(img);

    let demo2=()=>{
        setImg(img2);
    }
  return (
   <>
   <img src='img' alt='' height="300px" width="300px" ></img>
   <button onClick={demo2}>change</button>

   
   </>
  )
}

export default State
