import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch} from 'react-redux';

function Understanding () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState('');

    const handleSubmit = (event) => {
        
        event.preventDefault();

        dispatch({
            type : 'SET_UNDERSTANDING',
            payload : understanding
        });

        setUnderstanding('');

        history.push('/supported');

    }

    return (
        <>
            <h2>How well do you feel you understand today's material?</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className='understandingInput'
                    type='number'
                    min='0'
                    max='5'
                    onChange={(event) => setUnderstanding(event.target.value)}
                    required='required'
                    value={understanding}
                    placeholder='0-5'
                />

                <button
                    type='submit'>
                        Submit
                </button>

            </form>

        </>

    ) // end return

} // end Understanding fn

export default Understanding;