import React from 'react'

const ComponentB = (props) => {
    const childData = 'Test Data'
    const chilData2 =  'Test Data 2'
    const objData = {
        name: 'Bname',
        email: 'Bmail'

    }


  return (
      <>
    <div>ComponentB</div>
    <button onClick={()=>props.data(childData , chilData2, objData)}>Click</button>
    
    </>
  )
}

export default ComponentB