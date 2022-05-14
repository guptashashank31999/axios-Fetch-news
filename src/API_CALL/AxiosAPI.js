import {Axios} from 'axios';
import React from 'react'
import { useState } from 'react';

const AxiosAPI = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [data, setData] = useState({
    name : "",
    date : "",
    id: ""
  })

  const handle = (e) => {
    const newData = {...data}
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);

  }
  const submit = (e) => {
      e.preventDefault();
      Axios.post(url , {
        name : data.name,
        date : data.date,
        id : data.id
      }).then(res => {
        console.log(res.data)
      }).catch((err)=>{
        console.log("Error" , err);
      })
  }

  return (
    <>
    <h2>AxiosAPI</h2>
    <form onSubmit={(e)=>{submit(e)}}>
      <input onChange={(e) => {handle(e)}} id="name" value={data.name} placeholder='Name' type="text"></input>
      <input onChange={(e) => {handle(e)}} id="date" value={data.date} placeholder='Date' type="date"></input>
      <input onChange={(e) => {handle(e)}} id="id" value={data.id} placeholder='ID-User' type="number"></input>
    <button>Submit</button>
    </form>
    </>
  )
}

export default AxiosAPI