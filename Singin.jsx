import React, { useState } from 'react'
import Swal from 'sweetalert2'
import "./Style.css"
function Singin() {
    const [ADD, setADD] = useState({})
    const [ALL, setALL] = useState([])
    const [Error, setError] = useState([])

    const change=(e)=>{
        // KARTIK IS MY NAME BBBBB
        setADD({...ADD,[e.target.name]:e.target.value})
    }
const Verfy=()=>{



    






    let localdata=[]
    let valid=true;
    if(!ADD.name){
        localdata.name="Name is required"
        valid=false;
    }
    else if(!ADD.phone){
        localdata.phone="Number is required"
        valid=false
    }
    else if(!ADD.email){
        localdata.email="Email is required"
        valid=false
    }
    else if(!ADD.password){
        localdata.password="Password is required"




        
        valid=false
    }
    setError(localdata)
    return (valid)
}

    const submit=(e)=>{
        e.preventDefault()
        if(Verfy()){
            let getlocadata=JSON.parse(localStorage.getItem("user"))
            let mylocaldata=getlocadata.find((e)=>e.email === ADD.email)
            if(mylocaldata){
                Swal.fire({
                    icon: "error",
                    title: "Enter new email",
                    text: "Email is already used "
                })
            }else {
    let newdata= getlocadata.concat(ADD)
    setALL(newdata)
    localStorage.setItem("user",JSON.stringify(newdata))
    Swal.fire({
        icon: "success",
        title: "Successfully ",

    })
            }
    
        }
    }
  return (
    <>
    <div className='Singin'> 
    <div className='imgbox'></div>
    <div className='content'>
        <h1 className= 'text ms-4'>Welcome to ShopKit</h1>
        <center>
    <form action="" className='form'>
        <label htmlFor="">Name</label> <br />
        <input type="text" onChange={change} value={ADD.name} name='name' /> <br />
        {Error && <p>{Error.name}</p>}
        <label htmlFor="">Phone</label> <br />
        <input type="number" onChange={change} value={ADD.phone} name='phone' /> <br />
        {Error && <p>{Error.phone}</p>}
        <label htmlFor="">Email</label> <br />
        <input type="email" onChange={change} value={ADD.email} name='email' /> <br />
        {Error && <p>{Error.email}</p>}
        <label htmlFor="">Password</label> <br />
        <input type="password" onChange={change} value={ADD.password} name='password' /> <br /> <br />
        {Error && <p>{Error.password}</p>}
        <button onClick={submit}>Singin</button>
    </form></center>
    </div>
    </div>
    </>













  )
}

export default Singin
