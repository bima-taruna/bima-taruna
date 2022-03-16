import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/Contact";
import Modal from "./components/Modal/Modal";
import "./App.scss";
import Menu from "./components/Menu/Menu";
function getDefaultMode() {
  const savedMode = localStorage.getItem('mode');
  return savedMode ? savedMode : 'light';
}
function App() {
  const [bukaMenu,setBukaMenu] = useState(false);
  const [openModal,setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(0);
  const [mode,setMode] = useState(getDefaultMode());

  useEffect(()=>{
    if (mode==='dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('mode', mode);
  },[mode]);

  return (
    <div className="app">
     {openModal && <Modal closeModal={setOpenModal} data={modalData}/>}
      <Navbar mode={mode} setMode={setMode} bukaMenu={bukaMenu} setBukaMenu={setBukaMenu}/>
      <Menu bukaMenu={bukaMenu} setBukaMenu={setBukaMenu} mode={mode} setMode={setMode}/>
      <div className="sections">
        <Intro mode={mode} setMode={setMode}/>
        <Portfolio openModal={openModal} setOpenModal={setOpenModal} modalData={modalData} setModalData={setModalData}/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
