import React from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const state = {
        "name" : "test",
        "class" : "test2"
    }
  return (
    <div>
    <p>NoteState</p>
    <NoteState.Provider value={state}>
        {props.children}
    </NoteState.Provider>
    </div>
  )
}

export default NoteState