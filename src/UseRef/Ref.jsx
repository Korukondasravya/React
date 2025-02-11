// import React from 'react'

// const Ref = () => {
//     let a=document.getElementById("demo")
//     console.log(a);
    
//   return (
//    <>
//    <h1 id="demo">Hello-World</h1>
//    </>
//   )
// }

// export default Ref

// import React, { useRef } from 'react'



// const Ref = () => {
// let a=useRef()
// console.log(a.current);
// a.current.style.backgroundColor="green"
// a.current.style.textAlign="center"
// a.current.style.textDecoration="underline"
// a.current.style.textDecorationColor="red"

//   return (
//     <div>
//      <h1 ref="a">Hii</h1>
//     </div>
//   )
// }

// export default Ref

// import React,{useRef, useState} from 'react'
// import video from './video.mp4'

// const Ref = () => {
//     let ref1=useRef()
//     console.log(ref1.current);
//     let[state,setState]=useState(true)

//     let demo =()=>{
//         setState(!state)
//         state === true?ref1.current.play():ref1.current.pause()

//     }



//   return (
//     <div>
//       <video ref={ref1} src={video} height={"300px"} onClick={demo}></video>
//     </div>
//   )
// }

// export default Ref


import React from 'react'

const Ref = () => {
    let ref1=React.createRef()
    console.log(ref1.current);
    let ref2=React.createRef()
    console.log(ref2.current);
    let demo=(e)=>{
        e.preventDefault()
        // console.log(ref1: name.current.value);
        // console.log(password: password.current.value);
        

    }
  return (
    <div>
      <form>
        <label>Username:</label>
        <input ref={ref1} type="text" name="username" />
        <br />
        <label>Password:</label>
        <input ref ={ref2} type="password" name="password" />
        <br />
        <button type="submit" onClick={demo}>Submit</button>
      </form>
    </div>
  )
}

export default Ref
