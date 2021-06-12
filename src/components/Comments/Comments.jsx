import { useHistory } from 'react-router-dom';

function Comments () {

    const history = useHistory();

    const handleSubmit = (event) => {

        event.preventDefault();

        history.push('/review');

    }

    return (

        <>

            <form onSubmit={handleSubmit}>

                <button
                    type='submit'>
                        Submit
                </button>

            </form>

        </>

    ) // end return

} // end Comments fn

export default Comments;