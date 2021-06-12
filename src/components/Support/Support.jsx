import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Support () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        dispatch({
            type : 'SET_SUPPORT',
            payload : support
        });

        setSupport('');

        history.push('/comments');

    }

    return (

        <>

            <h2>How supported did you feel today?</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className='supportInput'
                    type='number'
                    min='0'
                    max='5'
                    onChange={(event) => setSupport(event.target.value)}
                    required='required'
                    value={support}
                    placeholder='0-5'
                />

                <button
                    type='submit'>
                        Submit
                </button>

            </form>
            

        </>

    ) // end return

} // end Supported fn

export default Support;