import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    postNewSong();
    deleteSong();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data)
    setSongs(response.data)
  }

  async function postNewSong(){
    const response = await axios.post('http://127.0.0.1:8000/music/');
    console.log(response.data)

  }

  async function deleteSong(){
    const response = await axios.delete('http://127.0.0.1:8000/music/');
    console.log(response.data)
  }

  return (
    <div>
      <button onClick={() => getAllSongs()}>Get All Songs</button>
    </div>
  );
}

export default App;
