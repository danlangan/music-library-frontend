import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  useEffect(async() => {
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response)
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
