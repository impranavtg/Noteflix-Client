import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../Components/Form';
import { NotesContext } from '../Context/NoteContext';
import { Modal } from '../Components/Modal';
import Notes from '../Components/Notes';

const Homepage = () => {
  const {openModal}=useContext(NotesContext);
  return (
    <>
    {openModal && <Modal/>}
    <Form/>
    <Notes/>
    </>
  )
}

export default Homepage;