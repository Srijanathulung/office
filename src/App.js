import './App.css';
import Modal from './components/Modal';
import {useState} from 'react';

function App() {

  const openModalHandler=()=>{
    setOpenModal(true);
  }

  const[openModal,setOpenModal]=useState(false);
  return (
    <div className="App">
     <h1>Hey click on the button to open a modal</h1>
     <button className='openModalBtn'
      onClick={openModalHandler}
      >Open</button>
      {openModal && <Modal closeModal={setOpenModal}/>}
      {/* <Modal/> */}
    </div>
  );
}

export default App;
