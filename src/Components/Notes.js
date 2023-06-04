import React, {useContext,useEffect } from 'react';
import { NotesContext } from '../Context/NoteContext';
import {useNavigate} from 'react-router-dom'
import Note from './Note';
import "./Notes.css";

const Notes = () => {
    const {notes,getNotes}=useContext(NotesContext);
    let navigate=useNavigate();
    useEffect(() => {
      if(localStorage.getItem('token')){getNotes();}
      else{
        navigate("/login");
      }
      // eslint-disable-next-line
    }, [])
    
  return (
    <div className='noteContainer'>
    {notes.map(singleNote=><Note note={singleNote} key={singleNote._id}/>)}
    </div>
  )
}

export default Notes