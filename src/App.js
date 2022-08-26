import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';

function App() {
  
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data)
    setSongs(response.data)
  }
  
  async function updateSong(){
    const response = await axios.put('http://127.0.0.1:8000/music/');
    console.log(response.data)
  }

  return (
    <div>
      <button onClick={() => getAllSongs()}>Get All Songs</button>
      <DisplayMusic songs={songs} getAllSongs={getAllSongs}/>
    </div>
  );
}

export default App;
