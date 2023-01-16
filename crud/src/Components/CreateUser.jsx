import axios from 'axios'
import React, { useState } from 'react'

const CreateUser = () => {
    let[name,setName] = useState("")
    let[designation,setDesignation] = useState("")
    let[salary,setSalary] = useState("")

    let formHandle=(e)=>{
        e.preventDefault()
        let payload = {name,designation,salary} 
        axios.post("http://localhost:3000/users", payload)
        .then(()=>{
            console.log("Data has been added");
        }) 
         .catch(error => {
                console.log(error.message);
              })
        // console.log(name);
        // console.log(designation);
    }

     let reset=()=>{
        setName("")
        setDesignation("")
        setSalary("")
     }

  return (
   <div>
    <h2>React - Crud Operation</h2>
    <form>
        <label>Name </label><br />
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br /><br />
        <label>Designation </label><br />
        <select value={designation} onChange={(e)=>{setDesignation(e.target.value)}}>
            <option>Manager</option>
            <option>IT Manager</option>
            <option>Developer</option>
        </select><br /><br />
        <label>Salary </label><br />
        <input type="number"  value={salary} onChange={(e)=>{setSalary(e.target.value)}}/><br /><br /><br />
        <button onClick={reset}>Reset</button>
        <button onClick={formHandle}>Save</button>
    </form>
   </div>
  )
}

export default CreateUser