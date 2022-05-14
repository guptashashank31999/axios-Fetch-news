import React from 'react'
import { useState } from 'react'
const MainFrom = (props) => {

    const [name, setName] = useState('');
    const handleChange = (e) =>{
         setName(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.data(name);
    }
  return (
      <>
    <h2>MainFrom</h2>
    <form>
        <input type="text" onChange={handleChange}></input>
        <button type='Submit' onClick={handleSubmit}>OnSubmit</button>
    </form>
    </>
  )
}

export default MainFrom