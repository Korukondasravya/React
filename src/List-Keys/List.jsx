// import React from 'react'

// const List = () => {
//     let arr=[10,20,30,40]
//     let num=0
//   return (
//     <>
//     {
//     arr.map((x)=>{
//         console.log(`<li key=${num++} >${x}</li>`)
//         return(
//             <li key={num++}>{x}</li>
//         )
//     }
//     )
// }
//     </>
//   )
// }

// export default List
import React, { Fragment } from 'react'

const List = () => {
    let main=[
        {
            name:"ABC",
            id:1
        },
        {
            name:"DEF",
            id:2
        },
        {
            name:"GHI",
            id:3
        }
    ]
  return (
    <>
    {
    main.map((x)=>{
      return(
        <Fragment key={x.id}>
            <li>{x.name}</li>
        </Fragment>
      )  

    })
}
    </>
  )
}

export default List
