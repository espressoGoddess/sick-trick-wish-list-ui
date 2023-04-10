import './CreateTrick.css';
import React from 'react';


function CreateTrick({}) {
    return (
        <form>
            <label> 
                <select>
                <option disabled value='Choose your Stance'>Choose your Stance</option>
                    <option value='Regular'>Regular</option>
                    <option value='Switch'>Switch</option>
                </select>
            </label>
            <label htmlFor='name'> 
                <input id='name' placeholder='Name of Trick' required></input>
            </label>
            <label>
                <select>
                    <option disabled value='Choose your Obstacle'>Choose your Obstacle</option>
                    <option value='Flatground'>Flatground</option>
                    <option value='Ledge'>Ledge</option>
                    <option value='Rail'>Rail</option>
                    <option value='Stairs'>Stairs</option>
                    <option value='Pool'>Pool</option>
                </select>
            </label>
            <label htmlFor='link'> 
                <input id='link' placeholder='Link to Tutorial' required></input>
            </label>
            <button type='submit'>Send it!</button>
        </form>
    )

}

export default CreateTrick;