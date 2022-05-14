import React from 'react'
import {useState, useEffect} from 'react';

const FetchAPI = () => {

    const [data, setData] = useState([])
    const getData = async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        setData(await response.json());
    }

    useEffect(() => {

        getData();
    })

    return (
        <>
            <div>FetchAPI</div>
            {
                data.map((data) => {
                    return (
                        <>
                            <p>ID : {data.id}</p>
                            <p>Title : {data.body}</p>
                            <p>Body : {data.title} </p>
                        </>
                    )
                })
            }


        </>
    )
}

export default FetchAPI