import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Supported () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [supported, setSupported] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        dispatch({
            type : 'SET_SUPPORTED',
            payload : supported
        });

        setSupported('');

        history.push('/comments');

    }

    return (

        <>

            <h2>How supported did you feel today?</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className='supportedInput'
                    type='number'
                    min='0'
                    max='5'
                    onChange={(event) => setSupported(event.target.value)}
                    required='required'
                    value={supported}
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

export default Supported;