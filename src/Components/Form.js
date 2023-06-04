import React, { useContext, useState } from 'react';
import './Form.css';
import { NotesContext } from '../Context/NoteContext';

const Form = () => {

    const {addNote}=useContext(NotesContext);
    const [note,setNote]=useState({title:"",description:"",tag:""})

    const handleSubmit=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
    }

    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

  return (
    <>
      <div className='card'>
    <form className="form" onSubmit={handleSubmit} >
    <h1 className='heading'>Add a Note</h1>
        <div className="textInput">
            <div className="inputs">
                <input type="text" id="title" name="title" value={note.title} placeholder="Enter Title" onChange={onChange} required minLength={3}/>
            </div>
            <div className="inputs">
                <input type="text"  id="tag" name="tag" value={note.tag} placeholder="Enter Tag" onChange={onChange}/>
            </div>
            </div> 
            {/* <div className="dateSub"> */}
            <div className="inputArea">
                <textarea rows="10" cols="30"  id="description" name="description" value={note.description} placeholder="Enter the Note" onChange={onChange} required minLength={3}/>
            </div>
            <button disabled={note.title.length<3 || note.description.length<3} className="btn" type="submit">Add Note</button>
            {/* </div> */}
        </form>
        </div>
        </>
  )
}

export default Form