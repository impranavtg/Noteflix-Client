import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import { ToastContainer } from 'react-toastify';
import LoginPage from './Pages/LoginPage';
import NoteContext from './Context/NoteContext';

function App() {
  return (
    <BrowserRouter>
    <NoteContext>
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route exact path='login' element={<LoginPage/>}/>
      <Route exact path='/signup' element={<SignupPage/>}/>
    </Routes>
    </NoteContext>
    </BrowserRouter>
  );
}

export default App;
