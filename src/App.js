import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {
      const [json, setJson] = useState([]);

  return (
    <React.StrictMode>
        <Header onFileLoaded={setJson}/>
        <Layout jsonData = {json}/>
    </React.StrictMode>
  );
}

export default App;
