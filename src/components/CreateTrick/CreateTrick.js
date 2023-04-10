import './CreateTrick.css';
import React, { useState } from 'react';


function CreateTrick() {
    const [stance, setStance] = useState('Choose your Stance');
    const [name, setName] = useState('');
    const [obstacle, setObstacle] = useState('Choose your Obstacle');
    const [link, setLink] = useState('');



    return (
        <form >
            <label> 
                <select value={stance} onChange={e => setStance(e.target.value)}>
                <option disabled value='Choose your Stance'>Choose your Stance</option>
                    <option value='Regular'>Regular</option>
                    <option value='Switch'>Switch</option>
                </select>
            </label>
            <label htmlFor='name'> 
                <input type='text' id='name' placeholder='Name of Trick' value={name} onChange={e => setName(e.target.value)} required></input>
            </label>
            <label>
                <select value={obstacle} onChange={e => setObstacle(e.target.value)}>
                    <option disabled value='Choose your Obstacle'>Choose your Obstacle</option>
                    <option value='Flatground'>Flatground</option>
                    <option value='Ledge'>Ledge</option>
                    <option value='Rail'>Rail</option>
                    <option value='Stairs'>Stairs</option>
                    <option value='Pool'>Pool</option>
                </select>
            </label>
            <label htmlFor='link'> 
                <input tpye='url' id='link' placeholder='Link to Tutorial' value={link} onChange={e => setLink(e.target.value)} required></input>
            </label>
            <button type='submit'>Send it!</button>
        </form>
    )

}

export default CreateTrick;