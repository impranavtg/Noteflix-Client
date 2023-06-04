import React,{useContext} from 'react'
import { NotesContext } from '../Context/NoteContext';
import './Modal.css';
export const Modal = () => {
    const {setOpenModal,note,setNote,editNote}=useContext(NotesContext);
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
        editNote(note.id,note.title,note.description,note.tag)
        console.log(note);
        e.preventDefault();
    }
    const closeModal=(e)=>{
        e.preventDefault();
    }

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
        <form className="eform"  >
    <h1 className='eheading'>Edit a Note</h1>
        <div className="etextInput">
            <div className="einputs">
                <input type="text" id="etitle" name="title" value={note.title} placeholder="Enter Title" onChange={onChange} />
            </div>
            <div className="inputs">
                <input type="text"  id="etag" name="tag" value={note.tag} placeholder="Enter Tag" onChange={onChange} />
            </div>
            </div> 
            {/* <div className="dateSub"> */}
            <div className="einputArea">
                <textarea rows="10" cols="30"  id="edescription" value={note.description} name="description" placeholder="Enter the Note" onChange={onChange} />
            </div>
            <div className="btns">
            <button className="ebtn" type="submit" onClick={(e)=>{setOpenModal(false);closeModal(e);}}>Cancel</button>
            <button className="ebtn" type="submit" onClick={(e)=>{setOpenModal(false);handleClick(e);}}>Done</button>
            </div>
            
            {/* </div> */}
        </form>
        </div>
    </div>
  )
}
