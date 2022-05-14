import React from 'react'
import ChildForm from './ChildForm'

const MainFrom = () => {

    const handleData = (dataFromChild) =>{
        console.log(dataFromChild);
    }
  return (
    <div>
    <h2>MainFrom</h2>
    <ParentForm data={handleData}/>
    </div>
  )
}

export default MainFrom