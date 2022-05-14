import React,{useContext} from 'react'
import noteContext from './ContextAPI/noteContext'

const AccessData = () => {
    const f = useContext(noteContext)
  return (
    <>
    <h2>Access Data from {f.name}</h2>
    </>
  )
}

export default AccessData