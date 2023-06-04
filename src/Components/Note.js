import React, { useContext }  from 'react';
import {FaTrash,FaEdit} from 'react-icons/fa';
import { NotesContext } from '../Context/NoteContext';
import "./Note.css"; 
// import { MdDelete } from 'react-icons/Md';

const Note = ({note}) => {
  const {deleteNote,setOpenModal,updateNote}=useContext(NotesContext);
  return (
      <>
    <div className="note">
    <div className="noteHead">
    <div className="cardTitle">
        <h2>{note.title}</h2>
    </div>
    <div className="icons">
    <FaEdit className="edit" onClick={()=>{setOpenModal(true);updateNote(note)}}/>
    <FaTrash className="del" onClick={()=>{deleteNote(note._id)}}/>
    </div>
    </div>
    <div className="cardDetails">
        <p>{note.tag} </p>
        <p className='date'>{note.date.slice(0,10).split('-').reverse().join('/')}</p>
    </div>
    <div className="cardDesc">
        <p>{note.description}</p>
    </div>
    
    {/* <div className="cardButton">
        <a href={myUrl} target="_blank">Read More <i className="fas fa-angle-double-right"></i></a>
    </div> */}
    </div>
   
    </>
  )
}

export default Note;