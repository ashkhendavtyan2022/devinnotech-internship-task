import React from 'react';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import { Main } from './Components/Main';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/:id" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
