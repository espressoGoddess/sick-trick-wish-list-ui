import { useState, useEffect } from 'react';
import Trick from '../Trick/Trick';
import './App.css';
import CreateTrick from '../CreateTrick/CreateTrick';

function App() {
  const [tricks, setTricks] = useState([]);
  const [error, setError] = useState(null);

  const createTrick = (newTrick) => {
    submitTrick(newTrick);
  }

  const updateTricks = () => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => setTricks(data));
  }
  useEffect(updateTricks, []);

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
          updateTricks();
          setError(null);
        } else {
          throw new Error('errooooorrrr');
        }
      }).catch(setError(true));
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
        <CreateTrick createTrick={createTrick} error={error}/>
        {error ? <p>OOps, try again</p> : null}
        <section className='tricks'>
          {createTricks()}
        </section>
      </main>
    );
}

export default App;