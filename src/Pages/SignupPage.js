import React, {useState,useContext} from 'react';
import { NotesContext } from '../Context/NoteContext';
// import {FaEye} from 'react-icons/fa';
import '../Components/Form.css';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
const SignupPage = () => {
    
    const {createUser}=useContext(NotesContext);
    const [user,setUser]=useState({name:"",email:"",password:""})

    const handleSubmit=(e)=>{
        e.preventDefault();
        createUser(user.name,user.email,user.password);
        setUser({name:"",email:"",password:""});
    }

    const onChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <>
     <div className='card' style={{width:'45vw'}}>
    <form className="form" onSubmit={handleSubmit} >
    <h1 className='heading'>Sign Up</h1>
    <div className="inputs" style={{width:'100%'}}>
                <input type="text" id="name" name="name" value={user.name} placeholder="Name" onChange={onChange} required/>
            </div>
            <div className="inputs" style={{width:'100%'}}>
                <input type="email" id="email" name="email" value={user.email} placeholder="Email Id" onChange={onChange} required/>
            </div>
            <div className="inputs" style={{width:'100%'}}>
                <input type="password" id="password" name="password" value={user.password} placeholder="Password" onChange={onChange} required minLength={6}/>
            </div>
            {/* <div className="inputs" style={{width:'100%'}}>
                <input type="password" id="password" name="password" value={user.password} placeholder="Confirm Password" onChange={onChange} required/>
            </div> */}
            <div className="reg"  style={{color:'white'}}>
                Already Registered? <Link to="/login" style={{color:'#00ADB5'}}>Login</Link>
            </div>
            <button className="btn" type="submit">Sign Up</button>
            {/* </div> */}
        </form>
        </div>
        </>
  )
}

export default SignupPage
