import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    let name = {};
    const parentAlert = (childData, chilData2 , objData) =>{
        alert(childData);
        alert(chilData2);
       console.log(objData);
       name = objData.name;
    }
  return (
      <>
    <div>ComponentA</div>
    <ComponentB data={parentAlert}/>
    {name}
    </>
  )
}

export default ComponentA