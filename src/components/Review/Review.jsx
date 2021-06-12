import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Review() {

    const history = useHistory();

    const results = useSelector( store => store.feedbackReducer);

    console.log(results);

    const handleClick = (event) => {

        event.preventDefault();

        history.push('/success');

    }

    return(
        
        <>

            <h2>Review Your Feedback</h2>

            <button
                onClick={handleClick}>
                    Submit Results
            </button>

        </>

    ) // end return

} // end Review fn

export default Review;