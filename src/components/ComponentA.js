import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = (props) => {

    const studentDetails = [
        {
            "id": 1,
            "title": "title_1",
            "body": "body_1"
        },
        {
            "id": 2,
            "title": "title_2",
            "body": "body_2"
        }, {
            "id": 3,
            "title": "title_3",
            "body": "body_3"
        }, {
            "id": 4,
            "title": "title_4",
            "body": "body_4"
        },

    ]
    return (
        <>
            <div>ComponentA</div>
            <h2>{props.data}</h2>
            <ComponentB data={studentDetails}/>
        </>
    )
}

export default ComponentA