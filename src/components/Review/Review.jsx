import { useHistory } from 'react-router-dom';

function Review() {

    const history = useHistory();

    const handleClick = (event) => {

        event.preventDefault();

        history.push('/success');

    }

    return(
        
        <>

            <button
                onClick={handleClick}>
                    Submit Results
            </button>

        </>

    ) // end return

} // end Review fn

export default Review;