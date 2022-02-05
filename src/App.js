import FileUpload from "./components/FileUpload";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/NavBar/Menu";
import { useOnClickOutside } from './hooks';
import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from "./components/Landing/Landing";



function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <BrowserRouter>
      <div className="App">
        <header ref={node} className="App-header">
          <NavBar open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </header>
        <Routes>
          <Route exact path="/" exact element={<Landing />} />
          <Route path='/File_Upload' element={<FileUpload />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
