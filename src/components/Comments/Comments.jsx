import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Comments () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

        dispatch({
            type : 'SET_COMMENTS',
            payload : comments
        });

        setComments('');

        history.push('/review');

    }

    return (

        <>

            <h2>Any comments you'd like to leave?</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className='commentInput'
                    type='text'
                    onChange={(event) => setComments(event.target.value)}
                    value={comments}
                    placeholder='Type comments here...'
                />

                <button
                    type='submit'>
                        Submit
                </button>

            </form>

        </>

    ) // end return

} // end Comments fn

export default Comments;