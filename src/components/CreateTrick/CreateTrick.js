import './CreateTrick.css';
import React, { useState } from 'react';

function CreateTrick({ submitTrick }) {
	const [stance, setStance] = useState('Choose your Stance');
	const [name, setName] = useState('');
	const [obstacle, setObstacle] = useState('Choose your Obstacle');
	const [tutorial, setTutorial] = useState('');

	return (
		<form onSubmit={(e) => {
				e.preventDefault();
				submitTrick({
				stance,
				name,
				obstacle,
				tutorial,
				id: Date.now()
		})}}>
				<label> 
					<select value={stance} onChange={e => setStance(e.target.value)} required>
							<option disabled value='Choose your Stance'>Choose your Stance</option>
							<option value='Regular'>Regular</option>
							<option value='Switch'>Switch</option>
					</select>
				</label>
				<label htmlFor='name'> 
					<input type='text' id='name' placeholder='Name of Trick' value={name} onChange={e => setName(e.target.value)} required></input>
				</label>
				<label>
					<select value={obstacle} onChange={e => setObstacle(e.target.value)} required>
						<option disabled value='Choose your Obstacle'>Choose your Obstacle</option>
						<option value='Flatground'>Flatground</option>
						<option value='Ledge'>Ledge</option>
						<option value='Rail'>Rail</option>
						<option value='Stairs'>Stairs</option>
						<option value='Pool'>Pool</option>
					</select>
				</label>
				<label htmlFor='tutorial'> 
					<input type='tutorial' id='tutorial' placeholder='Link to Tutorial' value={tutorial} onChange={e => setTutorial(e.target.value)} required></input>
				</label>
				<button type='submit'>Send it!</button>
		</form>
	)

}

export default CreateTrick;