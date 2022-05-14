import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {

    const data = "Data From B to C"
    // console.log(props);

    const student = props.data.map((studentData,i)=>{
        return (
            <div>
                <li key={i}>
                <p>{studentData.id}</p>
                <p>{studentData.body}</p>
                <p>{studentData.title}</p>
                </li>
            </div>
        )
    })
  return (
      <>  
      <div>ComponentB</div>
       {student}
    <ComponentC data={data}/>
    </>

  )
}

export default ComponentB