import React, {useState,useContext} from 'react';
import { NotesContext } from '../Context/NoteContext';
import '../Components/Form.css';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
const LoginPage = () => {
    
    const {login}=useContext(NotesContext);
    const [user,setUser]=useState({email:"",password:""})

    const handleSubmit=(e)=>{
        e.preventDefault();
        login(user.email,user.password);
        setUser({email:"",password:""});
    }

    const onChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <>
    
     <div className='card' style={{width:'45vw'}}>
    <form className="form"  onSubmit={handleSubmit}>
    <h1 className='heading'>Login</h1>
            <div className="inputs" style={{width:'100%'}}>
                <input type="email" id="email" name="email" value={user.email} placeholder="Email Id" onChange={onChange} required/>
            </div>
            <div className="inputs" style={{width:'100%'}}>
                <input type="password" id="password" name="password" value={user.password} placeholder="Password" onChange={onChange} required minLength={6}/>
            </div>
            <div className="reg"  style={{color:'white'}}>
            New to Noteflix? <Link to="/signup" style={{color:'#00ADB5'}}>Sign up now.</Link>
            </div>
            <button className="btn" type="submit">Login</button>
            
        </form>
        </div>
        </>
  )
}

export default LoginPage
