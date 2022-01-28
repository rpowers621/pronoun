import FileUpload from "./components/FileUpload";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/NavBar/Menu";
import { useOnClickOutside } from './hooks';
import React, { useState, useRef } from 'react';

import './App.css';


function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (

    <div className="App">
      <header ref={node} className="App-header">
        <NavBar open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </header>

    </div>
  );
}

export default App;
