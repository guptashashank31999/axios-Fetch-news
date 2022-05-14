import React from 'react'
import MainFrom from './MainFrom'

const Parent = () => {
    let data = ""
    const getData = (name) => {
        console.log(name);
        data = name;
    }
  return (
    <div>
    <h2>Parent</h2>
    <MainFrom data = {getData}/>
   {data}
    </div>

  )
}

export default Parent