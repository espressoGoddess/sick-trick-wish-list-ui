import { useState, useEffect } from 'react';
import Trick from '../Trick/Trick';
import './App.css';

function App() {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => setTricks(data))
  }, []);

  return (
    
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        {trickCards}
      </main>
    );
}

export default App;