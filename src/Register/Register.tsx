"use client"
import React, {useState} from 'react';
import style from '@/Register/Register.module.css'

export const Register = () => {

    const [data, setData]= useState<Record<string, string>>({})

    const handleChange=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
         const {name,value}=event.target;
         setData((pre)=>({...pre, [name]:value}));
    };
    const fnClick= async ()=>{
        try{
        const dataObj = {
            'data': data
        }
        const res = await fetch("http://localhost:3030/std/student",{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(dataObj)
        })
        const result = await res.json()
        console.log(result)
     }  catch (err) {
  if (err instanceof Error) {
    console.error("Error:", err.message);
  } else {
    console.error("Unknown error:", err);
  }
}
    }
      return (
    <div className={style.maincontainer}>
        <div className={style.container}>
        <h2>Registration form</h2>
        <p>
            <b>Name</b> <input type='text' name="name" placeholder='Name' onChange={handleChange} />

        </p>
        <p>
            <b>RollNo</b> <input type='number' name="rollno" placeholder='RollNo' onChange={handleChange} />

        </p>
        <p className={style.textarea} >
            <b>Location</b> <textarea  name="location"  placeholder='Location' onChange={handleChange} />

        </p>
        <p>
            <button onClick={fnClick} >Register</button>
        </p>
        </div>
    </div>
  )
}
