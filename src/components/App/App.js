import { useState, useEffect } from 'react';
import Trick from '../Trick/Trick';
import './App.css';
import CreateTrick from '../CreateTrick/CreateTrick';

function App() {
  const [tricks, setTricks] = useState([]);

  const submitTrick = (newTrick) => {
    setTricks([...tricks, newTrick]);
  }

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then(data => setTricks(data))
  }, []);

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
        <CreateTrick submitTrick={submitTrick}/>
        <section className='tricks'>
          {createTricks()}
        </section>
      </main>
    );
}

export default App;