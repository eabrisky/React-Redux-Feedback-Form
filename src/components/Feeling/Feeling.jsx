import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Feeling () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        // send value of state variable feeling to reducer
        dispatch({
            type : 'SET_FEELING',
            payload : feeling
        });

        // clear input field. input value set to feeling
        setFeeling('');

        //direct user to next page (understanding)
        history.push('/understanding');

    }

    return (

        <>

            <h2>How good do you feel about today's content?</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className='feelingInput'
                    type='number'
                    min='0'
                    max='5'
                    onChange={(event) => setFeeling(event.target.value)}
                    required='required'
                    value={feeling}
                    placeholder='0-5'
                />

                <button
                    type='submit'>
                        Submit
                </button>

            </form>

        </>

    ) // end return

} // end Feeling fn

export default Feeling;