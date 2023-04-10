import { useState, useEffect } from 'react';
import fetchInfo from '../../apiCalls';
import Trick from '../Trick/Trick';
import './App.css';

function App() {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => setTricks(data))
  }, []);

  createTricks = () => {
    if (tricks.length) {
      const trickCards= tricks.map(trick => {
        return <Trick />
      })
    }
  }
  return (
    
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        {trickCards}
      </main>
    );
}

export default App;