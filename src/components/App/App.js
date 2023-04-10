import { useState, useEffect } from 'react';
import Trick from '../Trick/Trick';
import './App.css';
import CreateTrick from '../CreateTrick/CreateTrick';

function App() {
  const [tricks, setTricks] = useState([]);

  const createTrick = (newTrick) => {
    submitTrick(newTrick);
  }

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => setTricks(data))
  }, []);

  const submitTrick = (trick) => {
    fetch('http://localhost:3001/api/v1/tricks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        stance: trick.stance,
        name: trick.name,
        obstacle: trick.obstacle,
        tutorial: trick.tutorial
      })
    })
      .then(response => {
        if (response.ok) {
          setTricks([...tricks, trick])
        } else 
        return;
      })

  }

  const createTricks = () => {
    if (tricks.length) {
      return tricks.map(trick => {
        return <Trick key={trick.id} stance={trick.stance} name={trick.name} obstacle={trick.obstacle} tutorial={trick.tutorial}/>
      })
    }
    else {
      return null;
    }
  }
  return (
    
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        <CreateTrick createTrick={createTrick}/>
        <section className='tricks'>
          {createTricks()}
        </section>
      </main>
    );
}

export default App;