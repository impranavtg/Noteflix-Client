import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
export const NotesContext=createContext();
const NoteContext = ({children}) => {

    const [enteredTitle,setEnteredTitle]=useState("");
    const [enteredAmount,setEnteredAmount]=useState("");
    const [enteredDate,setEnteredDate]=useState("");
    const [notes,setNotes]=useState([]);
    const [note,setNote]=useState({id:"",title:"",description:"",tag:""})
    let navigate=useNavigate();
    const updateNote=(currentNote)=>{
      setNote({id:currentNote._id,title:currentNote.title,description:currentNote.description,tag:currentNote.tag});
    }
    const [openModal,setOpenModal]=useState(false);
    const notify = (message,success) => {
      if(success){
        toast.success("📃 "+message);
      }
      else{
        toast.error("📃 "+message);
      }
    }

    const getNotes=async()=>{
      const response=await fetch('http://localhost:5000/api/notes/getnotes',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'authToken':localStorage.getItem('token')
        }
      })
      const json=await response.json();
      setNotes(json);
      console.log(json);
    }


    const addNote=async(title,description,tag)=>{
      if(tag.length===0)tag="General"
      const response=await fetch('http://localhost:5000/api/notes/addnote',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'authToken':localStorage.getItem('token')
        },
        body:JSON.stringify({title,description,tag})
      })
      console.log(response)
      const json= await response.json();
      setNotes(notes.concat(json.savedNotes));
      notify(json.Status,json.success);
    }
    const deleteNote=async(id)=>{
      console.log("deleting note with id "+id);
      const response=await fetch(`http://localhost:5000/api/notes/deletenote/${id}`,{
        method:'DELETE',
        headers:{
          'authToken':localStorage.getItem('token')
        }
      })
      const json=await response.json();
      notify(json.Status,json.success);
      const newNotes=notes.filter((note)=>note._id!==id);
      setNotes(newNotes);
    }
    const editNote=async(id,title,description,tag)=>{
      console.log(id+" "+title+" "+description+" "+tag)
      const response=await fetch(`http://localhost:5000/api/notes/updatenote/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'authToken':localStorage.getItem('token')
        },
        body:JSON.stringify({title,description,tag})
      })
      const json= await response.json();
      console.log(json);
      let newNotes=JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < notes.length; index++) {
        if(newNotes[index]._id===id){
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        }
      }
      setNotes(newNotes);
    }


    const createUser=async(name,email,password)=>{
      const response=await fetch('http://localhost:5000/api/auth/createuser',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({name,email,password})
      })
      const json=await response.json();
      if(json.success===true){
      localStorage.setItem('token',json.token);
      navigate("/")
      notify(json.Status,json.success);
      }
      else{
        alert("Invalid credentials")
      }
      console.log(json);
    }


    const login=async(email,password)=>{
      const response=await fetch('http://localhost:5000/api/auth/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({email,password})
      })
      const json=await response.json();
      if(json.success===true){
        localStorage.setItem('token',json.token);
        navigate("/")
      }
        notify(json.Status,json.success);
    }


  return (
    <NotesContext.Provider value={{enteredTitle,setEnteredTitle,enteredAmount,setEnteredAmount,enteredDate,setEnteredDate,notes,setNotes,addNote,deleteNote,editNote,getNotes,openModal,setOpenModal,note,setNote,updateNote,createUser,login,notify}}>
    {children}
    </NotesContext.Provider>
  )
}

export default NoteContext;